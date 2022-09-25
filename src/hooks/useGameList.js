import PocketBase from 'pocketbase';

const client = new PocketBase('http://game-queue.com:8888');

export default function useGameList() {
    async function getGame() {
        try {
            return await client.records.getList('games')
        } catch (e) {
            console.log(e);
        }
    }

    return {
        getGame,
    }
}