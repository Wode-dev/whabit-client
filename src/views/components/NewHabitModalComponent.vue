<template>
    <b-modal
        id="new-habit"
        title="Novo Hábito"
        ok-title="Criar"
        cancel-title="Cancelar"
        @ok.prevent="onSubmit"
    >
        <b-form @submit.prevent>
            <b-form-group
                id="input-group-1"
                label-for="input-1"
                description="Escreva o nome que você quer dar a esse hábito"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.habit.name"
                    type="text"
                    required
                    placeholder="Meu hábito"
                ></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
import Habit from "../../core/models/Habit";
export default {
    data() {
        return {
            form: {
                habit: {
                    name: "",
                },
            },
        };
    },
    methods: {
        onSubmit() {
            let comp = this;
            let habit = this.form.habit;
            Habit.create(this.axios, habit)
                .then(function () {
                    comp.$bvModal.hide("new-habit");
                    comp.$root.$emit("new-habit-created");
                })
                .catch(() => {
                    //Update list
                });
        },
    },
};
</script>

<style>
</style>