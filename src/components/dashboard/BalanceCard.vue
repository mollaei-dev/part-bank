<script setup></script>
<template>
  <div class="balance-card">
    <div class="balance-card__header">
      <img class="balance-card__icon" src="@/assets/images/icons/more-card.png" alt="گزینه ها" />

      <div class="balance-card__amount">
        <h4 class="balance-card__label">موجودی کل</h4>
        <div class="balance-card__amount--value">۴۲۴۹۷۸۴۰۰۰</div>
      </div>
    </div>
    <div class="balance-card__number">۵۴۱۸ ۲۷۴۱ ۶۶۹۸ ۸۲۵۱</div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.balance-card {
  width: 456px;
  min-width: 320px;
  max-width: 456px;
  height: 260px;
  border-radius: 12px;
  color: #ffffff;
  padding: 36px;
  padding-bottom: 32px;
  @include flex(column, space-between, stretch);
  background:
    url('@/assets/images/noise.png') repeat,
    url('@/assets/images/pattern.png') repeat,
    linear-gradient(112deg, #4152a0, #d0c9c1);
  &__header {
    width: 100%;
    @include flex(row, space-between, flex-start);
  }
  &__icon {
    cursor: pointer;
  }
  &__amount {
    //wrapper
    @include flex(column, flex-start, stretch);
    text-align: left;
    &--value {
      //amount
      font-weight: 600;
      font-size: 40px;
    }
  }
  &__label {
    //title
    font-weight: 600;
    font-size: 16px;
  }

  &__number {
    @include flex(row, center, center);
    font-weight: 400;
    font-size: 36px;
    gap: 16px;
  }
}
</style>
