<script setup>
import { useUserStore } from '@/stores/userStore'

function toPersianNumber(str) {
  if (str === null || str === undefined) return ''
  return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
}
const userStore = useUserStore()
</script>
<template>
  <div class="header">
    <div class="header-right">
      <img class="header__logo" src="@/assets/images/icons/logo.svg" />
      <p class="header__logo-text">پارت بانک</p>
    </div>
    <div class="header-left">
      <img class="header__icon-notification" src="@/assets/images/icons/notification.svg" />

      <div class="header__user-info">
        <img class="header__profile-image" src="@/assets/images/icons/avatar.svg" />
        <p class="header__phone">{{ toPersianNumber(userStore.currentUser?.phoneNumber) }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.header {
  @include flex(row, space-between, center);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 68px;
  background-color: #ffffff;
  padding: 0 40px;
  box-shadow: 0px 2px 8px 0px #15002b0d;
  &-right {
    @include flex(row, center, center);
    gap: 15px;
  }
  &__logo {
    width: 24.76px;
    height: 23.42px;
    &-text {
      font-weight: 400;
      font-size: 16px;
      color: #3c4351;
    }
  }
  &-left {
    @include flex(row, center, center);
    gap: 16px;
  }
  &__icon-nofication {
    width: 40px;
    height: 40px;
  }
  &__user-info {
    @include flex(row, center, center);
    gap: 8px;
  }
  &__profile-image {
    width: 40px;
    height: 40px;
    background-color: #1818181a;
    border-radius: 50%;
  }
  &__phone {
    font-weight: 400;
    font-size: 14px;
    color: #3c4351;
  }
}
</style>
