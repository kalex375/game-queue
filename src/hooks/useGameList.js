import PocketBase from 'pocketbase'
import { onMounted, reactive, ref} from 'vue'
import axios from "axios"

const client = new PocketBase('http://game-queue.com:8888')

export default function useGameList() {
    let games = reactive({
        list: [],
    })
    let gamesAxios = ref({})
   // let searchedGame = ref([])
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
            position: '1',
            user: client.authStore.model.id,
            status: 'New'
        }
        console.log(data)
        await client.records.create('games', data)
    }


    async function showGames() {
        await axios.get('http://game-queue.com:3030/igdb/search?q=halo%20infinite')
            .then(response => (
                gamesAxios.value = response.data
            ))
            .catch(error => console.log(error))
    }
    // async function searchedGames(searchedQuery) {
    //     await axios.get(`http://game-queue.com:3030/igdb/search?q=${searchedQuery}`).then(response => (searchedGame.value = response.data))
    //     console.log(searchedGame)
    // }

    onMounted(getGames, showGames)
    return {
        games,
        gamesAxios,
        getGames,
        deleteGame,
        showGames,
        addGame,
        updateGame,
    }
}
