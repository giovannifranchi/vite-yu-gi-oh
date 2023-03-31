<template>
    <select
      class="form-select form-select-lg mb-3 "  v-model="store.searchArchetype" @change="$emit('search')">
      <option selected value="">Select Spiecies</option>
      <option v-for="archetype in typeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SelectorComponent',
    props: {
      typeList: Array,
    },
    data(){
      return {
        store,
      }
    }

};
</script>

<style lang="scss" scoped></style>
