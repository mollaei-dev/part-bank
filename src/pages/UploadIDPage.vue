<script setup>
import Button from '@/components/Button.vue'
import ImageUploader from '@/components/ImageUploader.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()
function goBack() {
  router.push({ name: 'personal-info' })
}
function handleSubmit() {
  const userStore = useUserStore()
  if (userStore.userInfo.frontCardImage && userStore.userInfo.backCardImage)
    router.push({ name: 'confirm-info' })
}
</script>
<template>
  <div class="page">
    <div class="page__title">تصویر کارت ملی</div>
    <div class="divider"></div>
    <div class="uploade-cards">
      <ImageUploader side="front" />
      <ImageUploader side="back" />
    </div>
    <div class="page__form-buttons">
      <Button @press="goBack" variant="secondary">
        <template #btnLabel>قبلی</template>
      </Button>
      <Button @press="handleSubmit" type="submit">
        <template #btnLabel>ثبت و ادامه</template>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.uploade-cards {
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;
}
</style>
