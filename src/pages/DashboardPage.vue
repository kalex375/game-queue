<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <ul>
            <li
                class="game-list mt-4 p-3"
                v-for="game in games.list"
                :key="game.id"
                draggable="true"
                @dragstart="startDrag($event, game)"
                @drop="onDrop($event, game.position)"
                @dragenter.prevent
                @dragover.prevent
            >
                <div class="game-list__game-image">
                    <img
                        :src="`http://game-queue.com:8888/api/files/games/${game.id}/${game.field}?thumb=100x350`"
                        :alt="game.name"
                    />
                </div>
                <div class="pl-4">
                    <h3>{{ game.name }}</h3>
                    <h4>{{ game.developers }}</h4>
                    <p>{{ game.description }}</p>
                </div>
                <GqButton @click="deleteGame(game.id)"> Delete </GqButton>
            </li>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useGameList from '@/hooks/useGameList'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButton from '@/components/UI/GqButton'

const {games, deleteGame} = useGameList()

const startDrag = (event, game) => {
     console.log(game)
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', game.id)
}

const onDrop = (event, position) => {
    const itemID = event.dataTransfer.getData('itemId')
    console.log(position)
    const item = games.list.find(game => game.id == itemID)
    item.position = position
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
