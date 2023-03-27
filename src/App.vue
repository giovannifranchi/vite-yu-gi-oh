<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppMain,
      AppFooter,
    },
    data(){
      return {
        store,
      }
    },
    created(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(response => {
        store.cards = response.data;
      });
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>



