<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <nav class="nav">
            <GqButton @click="$router.push({name: 'add-game'})">Add game</GqButton>
        </nav>
        <ul>
            <li
                class="game-list mt-4 p-3"
                v-for="game in games.list"
                :key="game.id"
            >
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
                <div class="group-btn">
                    <GqButtonDelete @click="deleteGame(game.id)"
                        >Delete</GqButtonDelete
                    >
                    <select v-model="game.status" @change="setStatus(game)">
                        <option>New</option>
                        <option>Playing</option>
                        <option>Finished</option>
                    </select>
                </div>
            </li>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useGameList from '@/hooks/useGameList'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButtonDelete from '@/components/UI/GqButtonDelete'
import GqButton from "@/components/UI/GqButton";

const {games, deleteGame, setStatus} = useGameList()
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
.group-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
}
select {
    padding: 15px 20px;
    background: #49586a;
    border-radius: 10px;
    border: none;
    font-size: 17px;
    color: #eeeeee;
    font-family: 'Nunito Sans';
    &:hover {
        transition: 200ms;
        opacity: 0.9;
    }
}
.nav {
    margin-top: 5rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    background: $color_bg
}
</style>
