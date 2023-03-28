import { reactive } from "vue";



export const store = reactive({
    cards: [].slice(0, 30),
    archetypes: [],
    foundCards: 0,
});