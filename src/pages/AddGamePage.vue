<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <div class="mt-5 group-search">
            <GqInput v-model="searchQuery" placeholder="Name of the game">
            </GqInput>
            <GqButton @click="onSearchedGame">Search</GqButton>
        </div>
        <ul class="mt-5">
            <li v-for="game in searchedGames" :key="game.id">
                <div>
                    <img :src="game.cover?.url" :alt="game.name" />
                </div>
                <div class="game-info">
                    <h2>{{ game.name }}</h2>
                    <p>{{ game.summary }}</p>
                </div>
                <GqButton @click="addGame(game)" class="btn-add"
                    >Add game</GqButton
                >
            </li>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader'
import useGameList from '@/hooks/useGameList'
import {onMounted, ref} from 'vue'

const {searchGames, addGame, searchedGames, getGames} = useGameList()

const searchQuery = ref('')

async function onSearchedGame() {
    await searchGames(searchQuery)
}

onSearchedGame()

onMounted(() => {
    getGames()
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
p {
    color: white;
}
ul {
    display: flex;
    gap: 5rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
li {
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: $color_bg;
    padding: 1.5rem;
    max-width: 448px;
    width: 100%;
}
.game-info {
    max-width: 400px;
    width: 100%;
}
.group-search {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}
.btn-add {
    max-width: 290px;
    width: 100%;
    margin-top: auto;
}
</style>
