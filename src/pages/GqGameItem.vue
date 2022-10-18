<template>
    <li class="game-list mt-4 p-3">
        <div class="game-list__game-image">
            <img
                :src="`http://game-queue.com:8888/api/files/games/${props.modelValue.id}/${props.modelValue.field}?thumb=100x350`"
                :alt="props.modelValue.name"
            />
        </div>
        <div class="pl-4 game-list__game-info">
            <h3>{{ props.modelValue.name }}</h3>
            <h4>{{ props.modelValue.developers }}</h4>
            <p>{{ props.modelValue.description }}</p>
            <vue-tags-input
                :tags="props.modelValue.tags"
                @tags-changed="newTags => addTags(props.modelValue, newTags)"
            />
        </div>
        <div class="group-btn">
            <GqButtonDelete @click="deleteGame(props.modelValue.id)"
            >Delete
            </GqButtonDelete
            >
            <select
                :value="props.modelValue.status"
                @change="onUpdateGame(props.modelValue)"
            >
                <option>New</option>
                <option>Playing</option>
                <option>Finished</option>
            </select>
        </div>
    </li>
</template>

<script setup>
import {defineProps} from 'vue'
import GqButtonDelete from '@/components/UI/GqButtonDelete'
import VueTagsInput from "@sipec/vue3-tags-input";
import useGameList from "@/hooks/useGameList";

const {deleteGame, updateGame} = useGameList()

function addTags(game, newTags) {
    game.tags = newTags
    updateGame(game)
}

async function onUpdateGame(game) {
   await updateGame(game)
}

const props = defineProps({
    modelValue: [Object]
})
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
</style>