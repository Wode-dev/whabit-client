<template>
    <div>
        <b-list-group>
            <b-list-group-item v-for="habit in habits" v-bind:key="habit.id">
                <span @click="goToHabitPage(habit)">{{habit.name}}</span>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    methods: {
        goToHabitPage(habit) {
            this.$root.$options.router.push({
                name: "Habit",
                params: {
                    habit: habit,
                },
            });
        },
    },
    props: {
        habits: Array,
    },
};
</script>

<style>
</style>