import PocketBase from 'pocketbase'
import {onUpdated} from "vue"

const client = new PocketBase('http://game-queue.com:8888')

export default function useDeleteGame() {
    async function deleteGame(gameId) {
        await client.records.delete('games', `${gameId}`)
    }

   onUpdated(deleteGame)
    return {
        deleteGame,
    }
}
