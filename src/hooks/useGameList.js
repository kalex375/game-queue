import PocketBase from 'pocketbase'
import {onMounted, reactive} from 'vue'

const client = new PocketBase('http://game-queue.com:8888')

export default function useGameList() {
    let games = reactive({
        list: [],
    })
    async function getGames() {
        const records = await client.records.getFullList('games')
        games.list = records
        return games
    }
    async function deleteGame(gameId) {
        await client.records.delete('games', `${gameId}`)
        await getGames()
    }
    async function setStatus(game) {
        if (game.status === 'new') {
            game.status = 'playing'
        } else if (game.status === 'playing') {
            game.status = 'finished'
        }
        await client.records.update('games', game.id, game);
        console.log(game.status)
    }

    onMounted(getGames)
    return {
        games,
        getGames,
        deleteGame,
        setStatus
    }
}
