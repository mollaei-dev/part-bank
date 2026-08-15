<script setup>
import Sidebar from '@/components/sidebar/Sidebar.vue'
</script>
<template>
  <div class="dashboard">
    <Sidebar />
    <div class="dashboard__content"></div>
  </div>
</template>
<style lang="scss" scoped>
.dashboard {
  margin: 108px auto;
  display: flex;
  width: 100%;
  max-width: 1400px;
  background-color: #f7f8fa;
  gap: 16px;
}
.dashboard__content {
  background: #000;
}
</style>
