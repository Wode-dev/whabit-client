<template>
    <b-list-group>
        <b-list-group-item v-for="habit in habits" v-bind:key="habit.name">
            <span @click="goToHabitPage(habit)">{{habit.name}}</span>
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
                    id: 1,
                    name: "Habito 1",
                    completed: [Date.now()],
                },
                {
                    id: 2,
                    name: "Habito 2",
                    completed: ["Oi"],
                },
            ],
        };
    },
    methods: {
        goToHabitPage(habit) {
            this.$root.$options.router.push({
                name: "habit",
                params: {
                    habit: habit,
                },
            });
        },
    },
};
</script>

<style>
</style>