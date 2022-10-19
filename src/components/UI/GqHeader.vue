<template>
    <header class="p-2">
        <h1>Game-queue</h1>
        <div class="items">
            <a class="profile" href="profile"
                ><img
                    src="https://www.klerk.ru/images/noavatar.webp"
                    alt="avatar"
                />
                <p :key="user.id">{{ user.email }}</p>
            </a>
            <GqButton @click="onLogout()">Logout</GqButton>
        </div>
    </header>
</template>

<script setup>
import useLoginUser from '@/hooks/useLoginUser'
import router from '@/router/router'
const {user} = useLoginUser()
const {logout} = useLoginUser()
async function onLogout() {
    router.push({name: 'sign-in'})
    logout()
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.username {
    text-decoration: none;
    color: $color-text;
}
header {
    display: flex;
    justify-content: space-between;
    background-image: url('@/img/header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    border-bottom: 2px solid $color_secondary;
}
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-family: $font_secondary;
    color: $color_primary;
}
h1 {
    font-family: $font_secondary;
    font-size: 3rem;
}
header {
    display: flex;
    justify-content: space-between;
}
img {
    width: 2rem;
    height: 2rem;
    border-radius: 20px;
}
.items {
    display: flex;
    align-items: center;
    gap: 2rem;
}
</style>
