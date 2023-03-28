<template>
  <div>
    <select
      class="form-select form-select-lg mb-3">
      <option selected>Select Spiecies</option>
      <option value="" v-for="archetype in typeList">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'SelectorComponent',
    props: {
      typeList: Array,
    }
};
</script>

<style lang="scss" scoped></style>
