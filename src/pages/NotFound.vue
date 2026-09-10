<script setup>
import { useRouter } from 'vue-router'
import Button from '@/components/Button.vue'
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
<template>
  <div class="not-found">
    <h1 class="not-found__title">۴۰۴ - صفحه پیدا نشد!</h1>
    <p class="not-found__message">متأسفیم، صفحه‌ای که دنبالش هستید وجود ندارد.</p>
    <Button class="not-found__btn" @press="goBack()">
      <template #btnLabel>بازگشت</template>
    </Button>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/variables' as *;

.not-found {
  @include flex(column, center, center);
  min-height: 100vh;
  gap: 20px;
  &__title {
    color: $text-color;
  }
  &__message {
    font-size: 24px;
    font-weight: 700;
    color: $text-color;
  }
  &__btn {
    width: 200px;
  }
}
</style>
