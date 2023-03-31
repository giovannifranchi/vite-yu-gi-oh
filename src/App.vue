<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import SpinnerLoradVue from './components/SpinnerLorad.vue';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter,
      SpinnerLoradVue,
    },
    data(){
      return {
        store,
        isBusy: true,
      }
    },
    methods: {
      searchCards(){
        const routeApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='
        axios.get(`${routeApi}${store.searchArchetype}`)
        .then((response)=>{
          store.cards = response.data.data;
          store.foundCards = store.cards.length;
        });
      }
    },
    created(){
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response)=>{
        store.archetypes = response.data;
      });
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(response => {
        store.cards = response.data.data.slice(0, 30);
        store.foundCards = store.cards.length;
      })
      .then(()=>{
        this.isBusy = false;
      });
    }
  }
</script>

<template>
  <AppHeader/>
  <SpinnerLoradVue v-if="isBusy"/>
  <AppMain @search="searchCards" v-else/>
</template>



