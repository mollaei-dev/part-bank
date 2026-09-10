<script setup>
import { useUserStore } from '@/stores/userStore'
import Sidebar from './sidebar/Sidebar.vue'
import { ref } from 'vue'

function toPersianNumber(str) {
  if (str === null || str === undefined) return ''
  return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
}
const userStore = useUserStore()
const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
function closeSidebar() {
  isSidebarOpen.value = false
}
</script>
<template>
  <div class="header">
    <div class="header-right">
      <img class="header__logo" src="@/assets/images/icons/logo.svg" />
      <p class="header__logo-text">پارت بانک</p>
    </div>
    <div class="header-left">
      <img class="header__icon-notification" src="@/assets/images/icons/notification.svg" />
      <img
        @click="toggleSidebar()"
        v-click-outside="closeSidebar"
        class="header__icon-menu"
        src="@/assets/images/icons/hamburger-menu.png"
        alt="منو"
      />
      <div class="header__user-info">
        <img class="header__profile-image" src="@/assets/images/icons/avatar.svg" />
        <p class="header__phone">{{ toPersianNumber(userStore.currentUser?.phoneNumber) }}</p>
      </div>
    </div>
  </div>
  <Sidebar class="sidebar-menu" :class="{ 'sidebar-menu--isOpen': isSidebarOpen }" />
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/variables' as *;

.header {
  @include flex(row, space-between, center);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 68px;
  background-color: $surface-color;
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
      color: $text-color;
    }
  }
  &-left {
    @include flex(row, center, center);
    gap: 16px;
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
    color: $text-color;
  }
  &__icon-notification {
    width: 40px;
    height: 40px;
  }
  &__icon-menu {
    display: none;
    width: 28px;
    height: 28px;
  }
}
.sidebar-menu {
  position: fixed;
  z-index: 999;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &--isOpen {
    transform: translateX(0);
  }
}

// Responsive
@media only screen and (max-width: 992px) {
  .header {
    flex-direction: row-reverse;
    &__icon-menu {
      display: block;
      cursor: pointer;
    }
    &__logo-text,
    &__icon-notification,
    &__user-info {
      display: none;
    }
  }
}
</style>
