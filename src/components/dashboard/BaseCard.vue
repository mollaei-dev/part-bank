<script setup>
import Button from '@/components/Button.vue'
const props = defineProps(['cardTitle', 'metaIcon', 'metaLabel', 'btnIcon', 'btnLabel'])
</script>
<template>
  <div class="card">
    <div class="card__header">
      <div class="card__title">{{ cardTitle }}</div>
      <div class="card__meta">
        <span class="card__meta-label">{{ metaLabel }}</span>
        <img class="card__meta-icon" :src="metaIcon" />
      </div>
    </div>
    <slot name="content"></slot>
    <div class="card__footer">
      <slot name="details"></slot>
      <Button class="card__action" heightBtn="44px" variant="secondary">
        <template #btnLabel>
          {{ btnLabel }}
          <img :src="btnIcon" />
        </template>
      </Button>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/variables' as *;

.card {
  flex: 1;
  width: 338px;
  min-width: 320px;
  max-width: 338px;
  height: 260px;
  @include flex(column, space-between);
  background: $surface-color;
  border-radius: 12px;
  padding: 24px;
  &__header {
    @include flex(row, space-between, center);
  }
  &__title {
    font-weight: 700;
    font-size: 20px;
    color: $text-color;
  }
  &__meta {
    @include flex(row, flex-start, center);
    gap: 5px;
  }
  &__meta-label {
    color: $text-secondary-color;
    font-weight: 400;
    font-size: 14px;
  }
  &__footer {
    @include flex(column, flex-start);
    gap: 20px;
  }
}

// Responsive
@media only screen and (max-width: 1440px) {
  .card {
    height: 240px;
    &__title {
      font-size: 18px;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .card {
    flex: 0;
    flex-basis: 320px;
    height: 220px;
    &__title {
      font-size: 16px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .card {
    flex-basis: 350px;
  }
}
@media only screen and (max-width: 576px) {
  .card {
    flex-basis: 320px;
    height: 180px;
  }
}
</style>
