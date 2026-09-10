<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
<template>
  <div class="not-found">
    <h1>۴۰۴ - صفحه پیدا نشد!</h1>
    <h2 class="not-found__title">متأسفیم، صفحه‌ای که دنبالش هستید وجود ندارد.</h2>
    <button class="not-found__btn" @click="goBack">بازگشت</button>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.not-found {
  @include flex(column, center, center);
  min-height: 100vh;
  gap: 20px;
  &__title {
    color: #3c4351;
  }
  &__btn {
    color: #4152a0;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #d4dbe6c4;
  }
}
</style>
