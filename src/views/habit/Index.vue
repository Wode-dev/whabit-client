<template>
    <main-layout>
        <b-container class="pt-2">
            <b-button :to="{name: 'Home'}">Voltar</b-button>

            <p class="h1">{{habit.name}}</p>
            <p>Dias: 20</p>
            <p>Maior sequencia: 7</p>
            <b-row class="mt-2">
                <b-col class="pr-1" cols="6">
                    <b-form-select
                        @change="checkMonth"
                        v-model="selection.year"
                        :options="getYears()"
                    ></b-form-select>
                </b-col>
                <b-col class="pl-1" cols="6">
                    <b-form-select v-model="selection.month" :options="getMonths()"></b-form-select>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col v-for="day in days" v-bind:key="day.value" cols="3">
                    <span>{{day.text}}</span>
                    <b-form-checkbox class="float-right" v-model="day.checked"></b-form-checkbox>
                </b-col>
            </b-row>
        </b-container>
    </main-layout>
</template>

<script>
import MainLayout from "../../layouts/MainLayout";
// import Habit from "../../core/models/Habit";
export default {
    data() {
        return {
            selection: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
            },
            habit: { name: "Undefined" },
            months: [
                { value: 0, text: "Janeiro" },
                { value: 1, text: "Fevereiro" },
                { value: 2, text: "Março" },
                { value: 3, text: "Abril" },
                { value: 4, text: "Maio" },
                { value: 5, text: "Junho" },
                { value: 6, text: "Julho" },
                { value: 7, text: "Agosto" },
                { value: 8, text: "Setembro" },
                { value: 9, text: "Outubro" },
                { value: 10, text: "Novembro" },
                { value: 11, text: "Dezembro" },
            ],
        };
    },
    components: { MainLayout },
    created() {
        if (this.$route.params.habit) {
            this.habit = this.$route.params.habit;
        }
    },
    watch: {
        selection: function () {
            console.log("updated");
            this.updateDays();
        },
    },
    computed: {
        days: function () {
            let days = [];
            let total = [
                ...Array(
                    new Date(
                        this.selection.year,
                        this.selection.month + 1,
                        0
                    ).getDate()
                ).keys(),
            ].length;
            for (let index = 0; index < total; index++) {
                days.push({ value: index, text: index + 1, checked: false });
            }

            console.log({
                days,
                total,
                year: this.selection.year,
                month: this.selection.month + 1,
            });
            return days;
        },
    },
    methods: {
        getYears() {
            let years = [];
            for (let index = 0; index < 5; index++) {
                years.push(new Date().getFullYear() - index);
            }
            return years;
        },
        getMonths() {
            let months = [
                { value: 0, text: "Janeiro" },
                { value: 1, text: "Fevereiro" },
                { value: 2, text: "Março" },
                { value: 3, text: "Abril" },
                { value: 4, text: "Maio" },
                { value: 5, text: "Junho" },
                { value: 6, text: "Julho" },
                { value: 7, text: "Agosto" },
                { value: 8, text: "Setembro" },
                { value: 9, text: "Outubro" },
                { value: 10, text: "Novembro" },
                { value: 11, text: "Dezembro" },
            ];
            for (let index = 0; index < months.length; index++) {
                if (this.selection.year == new Date().getFullYear()) {
                    if (months[index].value > new Date().getMonth()) {
                        months[index].disabled = true;
                    }
                }
            }

            return months;
        },
        checkMonth() {
            if (this.selection.year == new Date().getFullYear()) {
                if (this.selection.month > new Date().getMonth()) {
                    this.selection.month = new Date().getMonth();
                }
            }
        },
        updateDays() {
            let days = [];
            for (
                let index = 0;
                index <
                Array.from(
                    Array(
                        new Date(
                            this.selection.year,
                            this.selection.month + 1,
                            0
                        )
                    ).keys()
                );
                index++
            ) {
                days.push({ value: index, text: index + 1, checked: true });
            }

            console.log(days);
            return days;
        },
    },
};
</script>
