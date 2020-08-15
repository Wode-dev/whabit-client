<template>
    <MainLayout>
        <b-container class="pt-3">
            <div class="text-right mb-2">
                <b-button v-b-modal.new-habit>Novo hábito</b-button>
            </div>
            <div v-if="loading.habits" class="d-flex flex-column align-items-center">
                <self-building-square-spinner
                    :animation-duration="6000"
                    :size="40"
                    color="#000000"
                />
                <span>Carregando...</span>
            </div>
            <habits-list :habits="habits" v-else-if="habits.length > 0" class="mb-2"></habits-list>
            <div v-else>
                <p>Você ainda não tem nenhum hábito :( Crie algum hábito agora!</p>
            </div>
        </b-container>
        <new-habit-modal></new-habit-modal>
    </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import HabitsList from "../components/TheHabitsList";
import NewHabitModal from "./components/NewHabitModalComponent";
import { SelfBuildingSquareSpinner } from "epic-spinners";
import Habit from "../core/models/Habit";
export default {
    name: "Home",
    components: {
        MainLayout,
        HabitsList,
        NewHabitModal,
        SelfBuildingSquareSpinner,
    },
    data() {
        return {
            habits: [],
            loading: {
                habits: true,
            },
        };
    },
    methods: {
        getAllHabitsFromAPI() {
            // Get all habits from API
            let component = this;
            Habit.getAllFromAPI()
                .then((response) => {
                    component.habits = response.data.data;
                })
                .catch((error) => {
                    console.log({ error });
                })
                .finally(() => {
                    component.loading.habits = false;
                });
        },
    },
    beforeMount() {
        this.getAllHabitsFromAPI();

        // Add event listener para
        let comp = this;
        this.$root.$on("new-habit-created", () => {
            comp.getAllHabitsFromAPI();
            comp.loading.habits = true;
        });
    },
};
</script>
