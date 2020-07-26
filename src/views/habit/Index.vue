<template>
    <main-layout>
        <b-container class="pt-3">
            <p class="h1">{{habit.name}}</p>
            <b-button :to="{name: 'Home'}">Voltar</b-button>
        </b-container>
    </main-layout>
</template>

<script>
import MainLayout from "../../layouts/MainLayout";
// import Habit from "../../core/models/Habit";
export default {
    data() {
        return {
            habit: { name: "Undefined" },
        };
    },
    components: { MainLayout },
    created() {
        this.habit = this.$route.params.habit;
    },
};
</script>
