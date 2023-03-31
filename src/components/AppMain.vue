<template>
    <main>

        <div class="container py-3">
            <SelectorComponentVue class="selector" :type-list="store.archetypes" @search="$emit('search')"/>
            <div class="list-container p-5">
                <CardsFoundComponent :cardsFound="store.foundCards" class="bg-dark text-light p-3 d-flex align-items-center" />
                <div class="row g-4">
                    <div class="col-2" v-for="card in store.cards" :key="card.id">
                        <CardComponent :name="card.name" :type="card.archetype" :imgAlt="card.name" class="card-container" :img="card.card_images[0].image_url"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store';
import SelectorComponentVue from './SelectorComponent.vue';
import CardsFoundComponent from './CardsFoundComponent.vue';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'AppMain',
        components: {
            SelectorComponentVue,
            CardsFoundComponent,
            CardComponent,
        },
        data(){
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
main {
    background-color: $tertiary-color;
    .selector{
        width: 20%;
    }
    .list-container {
        background-color: #fff;
        .card-container{
            background-color: $tertiary-color;
            height: 100%;
        }
    }

}
</style>