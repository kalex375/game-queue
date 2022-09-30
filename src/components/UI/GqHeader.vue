<template>
    <header class="p-4">
        <h1>Game-queue</h1>
        <div class="items">
            <div class="user">
                <a href="profile"
                    ><img
                        src="https://www.klerk.ru/images/noavatar.webp"
                        alt="avatar"
                /></a>
                <p>username</p>
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
header {
    display: flex;
    justify-content: space-between;
    background-image: url('https://templatekit.tokokoo.com/knight/wp-content/uploads/sites/17/2021/01/navbar-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    border-bottom: 2px solid $color_secondary;
}
.user {
    flex-direction: column;
}
h1 {
    font-family: $font_secondary;
    font-size: 50px;
}
div {
    display: flex;
    align-items: center;
}
p {
    font-family: $font_secondary;
}
img {
    width: 35px;
    height: 35px;
    border-radius: 20px;
}
.items {
    gap: 2rem;
}
</style>
