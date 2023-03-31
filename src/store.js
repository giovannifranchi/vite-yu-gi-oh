import { reactive } from "vue";



export const store = reactive({
    cards: [],
    archetypes: [],
    searchArchetype: '',
    foundCards: 0,
});