import PocketBase from 'pocketbase'
import {reactive, ref, unref} from 'vue'
import axios from 'axios'

const client = new PocketBase('http://game-queue.com:8888')

export default function useGameList() {
    let games = reactive({
        list: [],
    })
    let searchedGames = ref([])
    async function getGames() {
        const records = await client.records.getFullList('games', '', {
            sort: `position`,
        })
        games.list = records
        console.log(games.list)
        return games
    }
    async function deleteGame(gameId) {
        await client.records.delete('games', gameId)
        await getGames()
    }
    async function updateGame(game) {
        await client.records.update('games', game.id, game)
    }
    async function addGame(game) {
        const data = {
            name: game.name,
            cover_url: `http:${game.cover.url}`,
            description: game.summary,
            position: games.list[games.list.length - 1].position + 1,
            user: client.authStore.model.id,
            status: 'New',
            tags: [],
        }
        console.log(game)
        await client.records.create('games', data)
        await getGames()
    }
    async function searchGames(searchedQuery) {
        const response = await axios.get(
            `http://game-queue.com:3030/igdb/search?q=${unref(searchedQuery)}`
        )
        searchedGames.value = response.data
        return searchedGames
    }

    return {
        games,
        getGames,
        deleteGame,
        searchGames,
        searchedGames,
        addGame,
        updateGame,
    }
}
