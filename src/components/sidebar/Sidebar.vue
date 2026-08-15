<script setup>
import Profile from './Profile.vue'
import iconDashboard from '@/assets/images/icons/iconDashboard.png'
import iconAccount from '@/assets/images/icons/iconAccount.png'
import iconLoans from '@/assets/images/icons/iconLoans.png'
import iconCardsOperations from '@/assets/images/icons/iconCardsOperations.png'
import iconReceipts from '@/assets/images/icons/iconReceipts.png'
import iconServices from '@/assets/images/icons/iconServices.png'
import iconLogout from '@/assets/images/icons/iconLogout.png'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const listItems = [
  { icon: iconDashboard, label: 'داشبورد', link: '/dashboard' },
  { icon: iconAccount, label: 'حساب' },
  { icon: iconLoans, label: 'تسهیلات' },
  { icon: iconCardsOperations, label: 'عملیات کارت' },
  { icon: iconReceipts, label: 'سفته الکترونیک' },
  { icon: iconServices, label: 'خدمات' },
  { icon: iconLogout, label: 'خروج', action: 'logout' },
]
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
function handleLogout() {
  userStore.logOut()
  router.replace({ name: 'login' })
}
</script>

<template>
  <aside class="sidebar">
    <Profile />
    <div class="divider"></div>
    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li
          v-for="item in listItems"
          :key="item.label"
          class="sidebar__item"
          :class="{
            'sidebar__item--active': route.path === item.link,
            'sidebar__item--logout': item.label === 'خروج',
          }"
        >
          <img class="sidebar__icon" :src="item.icon" />
          <RouterLink
            v-if="item.link"
            :to="item.link"
            class="sidebar__link"
            exact-active-class="sidebar__link--active"
            >{{ item.label }}</RouterLink
          >
          <button
            v-else-if="item.action === 'logout'"
            type="button"
            @click="handleLogout"
            class="sidebar__link sidebar__link--logout"
          >
            {{ item.label }}
          </button>
          <span v-else class="sidebar__link">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;

.sidebar {
  max-width: 220px;
  flex-shrink: 0;
  height: 804px;
  border-radius: 12px;
  opacity: 1;
  padding: 24px;
  background-color: #ffffff;
  @include flex(column, flex-start, stretch);
  gap: 20px;
  &__list {
    list-style: none;
    width: 100%;
  }
  &__item {
    padding: 8px 16px;
    width: 100%;
    max-width: 204px;
    height: 44px;
    border-radius: 6px;
    margin-bottom: 2px;
    @include flex(row, flex-start, center);
    gap: 8px;
    &--active {
      background-color: #f9fafb;
    }
    &--logout {
      &:hover {
        background-color: #fdedea;
      }
      &:active {
        background-color: #eb482b;
      }
    }
  }
  &__link {
    width: 100%;
    text-align: right;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    color: #8999b9;
    background-color: inherit;
    &--logout {
      font: inherit;
      color: #eb482b;
      border: none;
      cursor: pointer;
      &:active {
        color: #ffffff;
      }
    }
    &--active {
      color: #4152a0;
      font-weight: 700;
    }
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
