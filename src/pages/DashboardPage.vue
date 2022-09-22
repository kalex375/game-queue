<template>
    <div>
       {{ user.email }}
    </div>
</template>

<script setup>
import useLoginUser from '@/hooks/useLoginUser'

const { user  } = useLoginUser()
</script>

<style lang="scss" scoped>

</style>