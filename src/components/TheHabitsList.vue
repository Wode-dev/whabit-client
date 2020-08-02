<template>
    <div>
        <b-list-group v-if="habits.length > 0">
            <b-list-group-item v-for="habit in habits" v-bind:key="habit.id">
                <span @click="goToHabitPage(habit)">{{habit.name}}</span>
            </b-list-group-item>
        </b-list-group>
        <div v-else>
            <p>Você ainda não tem nenhum hábito :( Crie algum hábito agora!</p>
        </div>
    </div>
</template>

<script>
import Habit from "../core/models/Habit";
export default {
    data() {
        return {
            habits: [],
        };
    },
    methods: {
        goToHabitPage(habit) {
            this.$root.$options.router.push({
                name: "Habit",
                params: {
                    habit: habit,
                },
            });
        },
        getAllHabitsFromAPI() {
            // Get all habits from API
            let component = this;
            Habit.getAllFromAPI()
                .then((response) => {
                    component.habits = response.data.data;
                })
                .catch((error) => {
                    console.log({ error });
                });
        },
    },
    beforeMount() {
        this.getAllHabitsFromAPI();

        // Add event listener para
        let comp = this;
        this.$root.$on("new-habit-created", () => {
            comp.getAllHabitsFromAPI();
        });
    },
};
</script>

<style>
</style>