<script setup>
import Button from '@/components/Button.vue'
import ImageUploader from '@/components/ImageUploader.vue'
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
      <Button siz="" @press="goBack" variant="secondary">
        <template #btnLabel>قبلی</template>
      </Button>
      <Button type="submit">
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
