<template>
    <header class="p-2">
        <h1>Game-queue</h1>
        <div class="items">
            <div class="user">
                <a href="profile"
                    ><img
                        src="https://www.klerk.ru/images/noavatar.webp"
                        alt="avatar"
                /></a>
                <a class="username" href="profile">{{ user.email }}</a>
            </div>
            <GqButton>Logout</GqButton>
        </div>
    </header>
</template>

<script>
export default {}
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
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    font-family: $font_secondary;
    font-size: 3rem;
}
header {
    display: flex;
    justify-content: space-between;
}
p {
    font-family: $font_secondary;
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
