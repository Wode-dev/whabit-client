<template>
    <div>
        <main-navbar></main-navbar>
        <slot></slot>
    </div>
</template>

<script>
import MainNavbar from "../components/TheMainNavbar";
export default {
    components: {
        MainNavbar,
    },
};
</script>
