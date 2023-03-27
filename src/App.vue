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
    created(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then(response => {
        store.cards = response.data;
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
  <AppMain v-else/>
</template>



