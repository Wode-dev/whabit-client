<template>
    <b-modal id="new-habit" title="Novo Hábito" ok-title="Criar" cancel-title="Cancelar">
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label-for="input-1"
                description="Escreva o nome que você quer dar a esse hábito"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.habit"
                    type="text"
                    required
                    placeholder="Meu hábito"
                ></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            form: {
                habit: "",
            },
        };
    },
    methods: {
        onSubmit() {
            console.log("Submitted");
        },
    },
};
</script>

<style>
</style>