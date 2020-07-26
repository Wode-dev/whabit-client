<template>
    <MainLayout>
        <b-container class="pt-3">
            <div class="text-right mb-2">
                <b-button v-b-modal.new-habit>Novo hábito</b-button>
            </div>
            <habits-list class="mb-2"></habits-list>
        </b-container>
        <new-habit-modal></new-habit-modal>
    </MainLayout>
</template>

<script>
import MainLayout from "../layouts/MainLayout";
import HabitsList from "../components/TheHabitsList";
import NewHabitModal from "./components/NewHabitModalComponent";
export default {
    name: "Home",
    components: {
        MainLayout,
        HabitsList,
        NewHabitModal,
    },
};
</script>
