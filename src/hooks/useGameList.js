import PocketBase from 'pocketbase';
import {onMounted, reactive} from 'vue';

const client = new PocketBase('http://game-queue.com:8888');

export default function useGameList() {
    let games = reactive({
        list: [],
    })
    async function getGame() {
        const records  = await client.records.getFullList('games')
        games.list = records
        return games
    }
    async function deleteGame(gameId) {
        await client.records.delete('games', `${gameId}`)
        await getGame()
    }

    onMounted(getGame)
    return {
        games,
        getGame,
        deleteGame

    }
}