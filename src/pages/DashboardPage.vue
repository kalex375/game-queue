<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <ul>
            <li
                class="game-list mt-4 p-3"
                v-for="game in games.list"
                :key="game.id"
            >
                <div class="game-list__game-image">
                    <img
                        :src="`http://game-queue.com:8888/api/files/games/${game.id}/${game.field}?thumb=100x350`"
                        :alt="game.name"
                    />
                </div>
                <div class="pl-4 game-info">
                    <h3>{{ game.name }}</h3>
                    <h4>{{ game.developers }}</h4>
                    <p>{{ game.description }}</p>
                </div>
                <div class="group-btn">
                    <GqButtonDelete @click="deleteGame(game.id)">Delete</GqButtonDelete>
                    <GqButton v-if="isNewStatus(game.status)" @click="setStatus(game)">Playing</GqButton>
                    <GqButton v-if="isPlayingStatus(game.status)" @click="setStatus(game)">Finished</GqButton>
                    <GqButton v-if="isFinishStatus(game.status)" class="btn--disabled" disabled>Finished</GqButton>
                </div>
            </li>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useGameList from '@/hooks/useGameList'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButton from '@/components/UI/GqButton'
import GqButtonDelete from "@/components/UI/GqButtonDelete";

const {games, deleteGame, setStatus} = useGameList()

function isNewStatus(status) {
    if (status !== 'new') return false
    return true
}
function isPlayingStatus(status) {
    if (status !== 'playing') return false
    return true
}
function isFinishStatus(status) {
    if (status !== 'finished') return false
    return true
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
.game-info {

}
.group-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
