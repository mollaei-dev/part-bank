<script setup>
import Button from '@/components/Button.vue'
import ImageUploader from '@/components/ImageUploader.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { nextTick, ref } from 'vue'

const router = useRouter()
function goBack() {
  router.push({ name: 'personal-info' })
}
const isRequiredFront = ref(false)
const isRequiredBack = ref(false)

async function handleSubmit() {
  const userStore = useUserStore()
  isRequiredFront.value = false
  isRequiredBack.value = false
  await nextTick()
  if (!userStore.userInfo.frontCardImage) isRequiredFront.value = true
  if (!userStore.userInfo.backCardImage) isRequiredBack.value = true

  if (userStore.userInfo.frontCardImage && userStore.userInfo.backCardImage)
    router.push({ name: 'confirm-info' })
}
</script>
<template>
  <div class="page">
    <div class="page__title">تصویر کارت ملی</div>
    <div class="divider"></div>
    <div class="uploade-cards">
      <ImageUploader :isRequired="isRequiredFront" side="front" />
      <ImageUploader :isRequired="isRequiredBack" side="back" />
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
@use '@/styles/mixins' as *;

.uploade-cards {
  @include flex(row,center);
  gap: 40px;
  width: 100%;
}

//Responsive
@media only screen and (max-width: 768px) {
  .uploade-cards {
    flex-wrap: wrap;
  }
}
</style>
