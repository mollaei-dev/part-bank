<style lang="scss" scoped></style>
<template>
  <Header v-if="$route.fullPath !== '/'"></Header>
  <RouterView></RouterView>
</template>
<script setup>
import Header from './components/Header.vue'
</script>
