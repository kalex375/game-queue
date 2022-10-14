import PocketBase from 'pocketbase'
import { onMounted, reactive} from 'vue'
import axios from "axios"

const client = new PocketBase('http://game-queue.com:8888')

export default function useGameList() {
    let games = reactive({
        list: [],
    })
    async function getGames() {
        const records = await client.records.getFullList('games', '', {
            sort: `position`,
        })
        games.list = records
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
            release_date: new Date(game.first_release_date),
            field: null,
            description: game.summary,
            position: games.list[games.list.length - 1].position + 1,
            user: client.authStore.model.id,
            status: 'New'
        }
        console.log(data)
        await client.records.create('games', data)
        await getGames()
    }
    async function searchedGames(searchedQuery) {
        const response = await axios.get(`http://game-queue.com:3030/igdb/search?q=${searchedQuery}`)
        return response.data
    }

    onMounted(()=>{
        getGames()

    })

    return {
        games,
        getGames,
        deleteGame,
        searchedGames,
        addGame,
        updateGame,
    }
}
