<script setup>
import Header from './components/Header.vue'
</script>
<template>
  <Header v-if="!$route.meta.hideHeader"></Header>
  <router-view v-slot="{ Component }">
    <Transition name="slide-fade" mode="out-in">
      <component :is="Component" :key="$route.fullPath" />
    </Transition>
  </router-view>
</template>
<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
