<template>
    <main-layout>
        <b-container class="pt-2">
            <b-button :to="{name: 'Home'}">Voltar</b-button>
            <p class="h1">{{habit ? habit.name : "Undefined"}}</p>
            <p>Dias: {{habit ? habit.data.accomplishment_amount : 0}}</p>
            <!-- <p>Maior sequencia: 7</p> -->
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
            <b-row v-if="days.length > 0" class="mt-2">
                <b-col v-for="day in days" v-bind:key="day.value" cols="3">
                    <span>{{day.text}}</span>
                    <b-form-checkbox
                        @change="toggleAccomplishment(day)"
                        class="float-right"
                        v-model="day.checked"
                    ></b-form-checkbox>
                </b-col>
            </b-row>
            <b-row v-else>
                <b-col cols="12">
                    <div class="d-flex flex-column align-items-center mt-5">
                        <self-building-square-spinner
                            :animation-duration="6000"
                            :size="40"
                            color="#000000"
                        />
                        <span>Carregando...</span>
                    </div>
                </b-col>
            </b-row>
            <b-button variant="danger" class="mt-3" @click.prevent="deleteHabit">Excluir</b-button>
        </b-container>
    </main-layout>
</template>

<script>
import MainLayout from "../../layouts/MainLayout";
import Habit from "../../core/models/Habit";
import Accomplishment from "../../core/models/Accomplishment";
import { SelfBuildingSquareSpinner } from "epic-spinners";
// import Habit from "../../core/models/Habit";
export default {
    data() {
        return {
            selection: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
            },
            habit: {},
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
            days: [],
        };
    },
    components: { MainLayout, SelfBuildingSquareSpinner },
    beforeCreate() {
        if (this.$route.params.habit) {
            Habit.getFromAPI(this.$route.params.habit.id).then((response) => {
                console.log({ response });
                this.habit = response.data;
                this.updateDays();
            });
        } else {
            this.$router.push({ name: "Home" });
        }
    },
    watch: {
        selection: {
            handler: function () {
                // console.log("updated");
                this.days = [];
                this.updateDays();
            },
            deep: true,
        },
    },
    methods: {
        deleteHabit() {
            Habit.delete(this.habit.id)
                .then(() => {
                    console.log("deleted");
                })
                .catch((error) => {
                    console.log({ error });
                });
        },
        toggleAccomplishment(day) {
            //Send accomplishment to server
            Accomplishment.setAccomplishmentStatus(
                this.habit.id,
                this.selection.year,
                this.selection.month + 1,
                day.text,
                !day.checked
            )
                .then((response) => {
                    console.log({ response });
                })
                .catch((error) => {
                    console.log({ error });
                });
        },
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
            let component = this;
            Accomplishment.getAllFromAPI(
                this.habit.id,
                this.selection.year,
                this.selection.month + 1
            ).then((response) => {
                // Transform array with objects into
                // Array with only dates
                let dates = response.data.map((value) => {
                    return value.date;
                });

                let days = [];
                let daysFromMonth = Array.from(
                    Array(
                        new Date(
                            component.selection.year,
                            component.selection.month + 1,
                            0
                        ).getDate()
                    ).keys()
                ).length;

                // For each day of the month, check if was it is checked
                for (let index = 0; index < daysFromMonth; index++) {
                    //Get date ISO string, and pick only date
                    let dateString = new Date(
                        component.selection.year,
                        component.selection.month,
                        index + 1
                    )
                        .toISOString()
                        .split("T")[0];
                    let day = {
                        value: index,
                        text: index + 1,
                        checked: dates.includes(dateString),
                    };

                    // Push days to form checkbox
                    days.push(day);
                }

                //Assign days coming from API into component variable
                component.days = days;
            });
        },
    },
};
</script>
