<template>
    <GqHeader></GqHeader>
    <div>
        {{ user.email }}
        <GqContainer class="m-auto">
            <div>
                <div class="game-list mt-4 p-3">
                    <div>
                        <img src="" alt="Штука чтобы двигать" />
                    </div>
                    <div class="game-list__game-image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png"
                            alt="Картинка игры"
                        />
                    </div>
                    <div class="pl-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam impedit error quas delectus animi distinctio
                        quidem, veniam, doloribus, ipsa et dignissimos eum.
                        Praesentium, vero ipsa animi ea officiis temporibus
                        facere.
                    </div>
                </div>
                <div class="game-list mt-4 p-3">
                    <div>
                        <img src="" alt="Штука чтобы двигать" />
                    </div>
                    <div class="game-list__game-image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png"
                            alt="Картинка игры"
                        />
                    </div>
                    <div class="pl-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam impedit error quas delectus animi distinctio
                        quidem, veniam, doloribus, ipsa et dignissimos eum.
                        Praesentium, vero ipsa animi ea officiis temporibus
                        facere.
                    </div>
                </div>
                <div class="game-list mt-4 p-3">
                    <div>
                        <img src="" alt="Штука чтобы двигать" />
                    </div>
                    <div class="game-list__game-image">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/1/14/Halo_Infinite.png"
                            alt="Картинка игры"
                        />
                    </div>
                    <div class="pl-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ullam impedit error quas delectus animi distinctio
                        quidem, veniam, doloribus, ipsa et dignissimos eum.
                        Praesentium, vero ipsa animi ea officiis temporibus
                        facere.
                    </div>
                </div>
            </div>
        </GqContainer>
    </div>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import useLoginUser from '@/hooks/useLoginUser'

const {user} = useLoginUser()
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
</style>
