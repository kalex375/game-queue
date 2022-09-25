<template>
    <div>
        <div>
            {{ user.email }}
        </div>
        <div>
            <ul>
                <li v-for="game in games" :key="game">
                    {{ game.name }}
                </li>
            </ul>
            <button @click="getGame">Games</button>
        </div>
    </div>
</template>

<script setup>
import useLoginUser from '@/hooks/useLoginUser'
import useGameList from '@/hooks/useGameList'
import { ref } from 'vue'

const { user  } = useLoginUser()    
const { getGame } = useGameList()
const games = ref()

async function getGame() {
    const response = await getGame()
    games.value = response.items
}
</script>

<style lang="scss" scoped>

</style>