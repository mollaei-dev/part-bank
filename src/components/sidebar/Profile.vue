<template>
  <div class="profile">
    <h2 class="profile__name">محمد رحمانی نصب</h2>
    <p class="profile__id">
      <label class="profile__id-label">کدملی:</label>
      <span class="profile__id-value">0920125444</span>
    </p>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.profile {
  max-height: 116px;
  @include flex(column, center, stretch);
  gap: 40px;
  &__name {
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #3c4351;
  }
  &__id {
    @include flex(row, space-between, center);
  }
  &__id-label {
    font-weight: 400;
    font-size: 12px;
    text-align: right;
    color: #8999b9;
  }
  &__id-value {
    font-weight: 600;
    font-size: 14px;
    color: #3c4351;
  }
}
</style>
