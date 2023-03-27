<template>
    <div>
       <img :src="img" :alt="imgAlt" class="img-fluid">
       <h3 class="text-center py-3 text-light">{{ name }}</h3>
       <p class="text-center pb-3 text-dark">{{ type }}</p>

    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            img: String,
            imgAlt: String,
            name: String,
            type: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>