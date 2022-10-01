<template>
        <GqContainer class="m-auto">
            <ul>
                <li class="game-list mt-4 p-3" v-for="game in games.list" :key="game.id">
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
                  <GqButton
                      @click="deleteGameFromDom(game.id)"
                  >
                    Delete
                  </GqButton>
                </li>
            </ul>
        </GqContainer>
</template>

<script setup>
import useGameList from '@/hooks/useGameList'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButton from '@/components/UI/GqButton'
import useDeleteGame from "@/hooks/useDeleteGame";

const { games, getGame } = useGameList()
const { deleteGame } = useDeleteGame()

async function deleteGameFromDom(gameId) {
  await deleteGame(gameId).then(await getGame())
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
