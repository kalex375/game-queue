<template>
        <GqContainer class="m-auto">
            <ul>
                <li class="game-list mt-4 p-3" v-for="game in games.list" :key="game.name">
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
                </li>
            </ul>
        </GqContainer>
</template>

<script setup>
import useGameList from '@/hooks/useGameList'   
import GqContainer from '@/components/UI/GqContainer.vue'

const { games } = useGameList()
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
