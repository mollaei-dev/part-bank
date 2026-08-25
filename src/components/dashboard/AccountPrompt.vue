<script setup>
import Button from '../Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function openAccount() {
  router.push({ name: 'personal-info' })
}
</script>

<template>
  <div class="prompt">
    <img class="prompt__icon" src="@/assets/images/icons/iconBigSearch.png" />
    <p class="prompt__text">برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید</p>
    <Button class="prompt__button" @press="openAccount">
      <template #btnLabel>افتتاح حساب</template>
    </Button>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;

.prompt {
  position: absolute;
  z-index: 900;
  inset: 0;
  margin: auto;
  width: 331px;
  height: 237px;
  @include flex(column, center, center);
  padding: 16px 0;
  gap: 22px;
  &__text {
    font-weight: 600;
    font-size: 16px;
    color: #3c4351;
    width: 100%;
  }
  &__button {
    width: 200px;
  }
}
</style>
