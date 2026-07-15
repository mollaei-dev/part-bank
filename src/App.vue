<script setup>
import Header from './components/Header.vue'
</script>
<template>
  <Header v-if="$route.fullPath !== '/'"></Header>
  <RouterView></RouterView>
</template>
<style lang="scss" scoped></style>