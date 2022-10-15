<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <nav class="nav">
            <GqButton @click="$router.push({name: 'add-game'})"
                >Add game</GqButton
            >
        </nav>
        <ul>
            <draggable
                v-model="games.list"
                group="games"
                @end="onStop"
                item-key="id"
            >
                <template #item="{element}">
                    <li class="game-list mt-4 p-3">
                        <div class="game-list__game-image">
                            <img :src="element.cover_url" :alt="element.name" />
                        </div>
                        <div class="pl-4 game-list__game-info">
                            <h3>{{ element.name }}</h3>
                            <h4>{{ element.developers }}</h4>
                            <p>{{ element.description }}</p>
                        </div>
                        <div class="group-btn">
                            <GqButtonDelete @click="deleteGame(element.id)"
                                >Delete</GqButtonDelete
                            >
                            <select
                                v-model="element.status"
                                @change="updateGame(element)"
                            >
                                <option>New</option>
                                <option>Playing</option>
                                <option>Finished</option>
                            </select>
                        </div>
                    </li>
                </template>
            </draggable>
        </ul>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useGameList from '@/hooks/useGameList'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButtonDelete from '@/components/UI/GqButtonDelete'
import draggable from 'vuedraggable'

const {games, deleteGame, updateGame} = useGameList()

function onStop() {
    games.list.forEach((game, index) => {
        game.position = index + 1
        updateGame(game)
    })
}
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
    &__game-info {
        margin-right: 1rem;
    }
}
.group-btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    gap: 1rem;
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
    background: $color_bg;
}
</style>
