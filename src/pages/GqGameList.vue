<template>
    <ul>
        <draggable
            v-model="games.list"
            group="games"
            @end="onStop"
            item-key="id"
        >
            <template #item="{element}">
                <GqGameItem :modelValue="element"/>
            </template>
        </draggable>
    </ul>
</template>

<script setup>
import useGameList from "@/hooks/useGameList";
import {onMounted} from "vue";
import GqGameItem from "@/pages/GqGameItem";
import draggable from 'vuedraggable'

const {games, updateGame, getGames} = useGameList()


onMounted(getGames)
function onStop() {
    games.list.forEach((game, index) => {
        game.position = index + 1
        updateGame(game)
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

select {
    padding: 15px 20px;
    background: #49586a;
    border-radius: 10px;
    border: none;
    font-size: 17px;
    color: #eeeeee;
    font-family: 'Nunito Sans';

    &:hover {
        transition: 200ms;
        opacity: 0.9;
    }
}
</style>