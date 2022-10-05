<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <ul>
            <draggable
            v-model="games.list"
            group="games"
            @end="onStop"
            item-key="id"
            >
                <template #item="{element}">
                    <li
                        class="game-list mt-4 p-3"
                    >
                        <div class="game-list__game-image">
                            <img
                                :src="`http://game-queue.com:8888/api/files/games/${element.id}/${element.field}?thumb=100x350`"
                                :alt="element.name"
                            />
                        </div>
                        <div class="pl-4">
                            <p>{{element.position}}</p>
                            <h3>{{ element.name }}</h3>
                            <h4>{{ element.developers }}</h4>
                            <p>{{ element.description }}</p>
                        </div>
                        <GqButton @click="deleteGame(element.id)">Delete</GqButton>
                    </li>
                </template>
            </draggable>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useGameList from '@/hooks/useGameList'
import draggable from 'vuedraggable'

const {games, deleteGame, updateGame} = useGameList()


function onStop() {
    games.list.forEach((game, index) => {
        game.position = index + 1
        updateGame(game)
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.game-list {
    display: flex;
    background: $color_bg;
    &__game-image {
        img {
            max-height: 230px;
        }
    }
}
</style>
