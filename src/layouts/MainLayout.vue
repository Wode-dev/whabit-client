<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>Whabit</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-text>Navbar text</b-nav-text>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>
