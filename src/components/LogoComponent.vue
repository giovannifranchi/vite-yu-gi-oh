<template>
    <div>
        <img :src="img" :alt="imgAlt">
    </div>
</template>

<script>
    export default {
        name: 'LogoComponent',
        props: {
            img: String,
            imgAlt: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>