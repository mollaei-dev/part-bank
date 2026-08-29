<script setup>
import search from '@/assets/images/icons/search.png'
import searchMute from '@/assets/images/icons/Search-mute.png'
import { ref } from 'vue'

const searchQuery = ref()
const isOpenSearch = ref(false)
</script>
<template>
  <div class="search" :class="{ 'search--isOpen': isOpenSearch }">
    <input
      class="search__input"
      :class="{ 'search__input--isOpen': isOpenSearch }"
      v-model="searchQuery"
      type="text"
      placeholder="جستجو"
    />
    <div class="search__icon-wrapper">
      <img class="search__icon" :src="search" />
      <img
        class="search__icon--isOpen"
        @click="isOpenSearch = !isOpenSearch"
        :src="isOpenSearch ? search : searchMute"
      />
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.search {
  width: 257px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #e2edff;
  @include flex(row, space-between, center);
  &__input {
    font-weight: 400;
    font-size: 14px;
    color: #8999b9;
    border: none;
    padding: 5px;
    &--isOpen {
      display: block;
    }
  }
  &__icon {
    &--isOpen {
      display: none;
    }
    &-wrapper {
      width: 33px;
      height: 32px;
      text-align: center;
      padding: 7px;
      background-color: #eceef6;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
}
</style>
