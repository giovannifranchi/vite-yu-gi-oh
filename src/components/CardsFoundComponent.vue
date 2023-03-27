<template>
    <div>
        <h3>Found {{ cardsFound }} cards</h3>
    </div>
</template>

<script>
    export default {
        name: 'FoundCards',
        props: {
            cardsFound: Number,
        }
    }
</script>

<style lang="scss" scoped>

</style>