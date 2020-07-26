<template>
    <b-list-group>
        <b-list-group-item v-for="habit in habits" v-bind:key="habit.name">
            <span @click="goToHabitPage">{{habit.name}}</span>
            <b-form-checkbox class="float-right"></b-form-checkbox>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
    data() {
        return {
            habits: [
                {
                    name: "Habito 1",
                    completed: [Date.now()],
                },
                {
                    name: "Habito 2",
                    completed: ["Oi"],
                },
            ],
        };
    },
    methods: {
        goToHabitPage() {
            this.$root.$options.router.push({ name: "habito" });
        },
    },
};
</script>

<style>
</style>