<template>
    <header>
        <div class="d-flex align-items-center p-4 gap-5">
            <LogoComponentVue class="logo"
            :img="logoSrc"
            :imgAlt="logoAlt"
            />
            <h1>Yu-Gi-Oh-Api</h1>
        </div>
    </header>
</template>

<script>
import LogoComponentVue from './LogoComponent.vue';
    export default {
        name: 'AppHeader',
        components: {
            LogoComponentVue,
        },
        data(){
            return {
                logoSrc: 'src/assets/img/logo-1.png',
                logoAlt: 'yu-gi-oh-logo',
            }
        }
    }
</script>

<style lang="scss" scoped>
.logo{
    width: 100px;
    :deep(img){
        width: 100%;
    }
}
</style>