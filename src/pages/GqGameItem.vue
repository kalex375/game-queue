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
                @tags-changed="newTags => addTags(newTags)"
            />
        </div>
        <div class="group-btn">
            <GqButtonDelete @click="$emit('delete', props.modelValue)"
                >Delete
            </GqButtonDelete>
            <select
                :value="props.modelValue.status"
                @change="onChangeStatus($event.target.value)"
            >
                <option>New</option>
                <option>Playing</option>
                <option>Finished</option>
            </select>
        </div>
    </li>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue'
import GqButtonDelete from '@/components/UI/GqButtonDelete'
import VueTagsInput from '@sipec/vue3-tags-input'

const emit = defineEmits(['update:modelValue', 'delete'])

const props = defineProps({
    modelValue: [Object],
})

async function addTags(newTags) {
    const newGame = {...props.modelValue, tags: newTags}
    emit('update:modelValue', newGame)
}

function onChangeStatus(status) {
    const game = {...props.modelValue, status}
    emit('update:modelValue', game)
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
</style>
