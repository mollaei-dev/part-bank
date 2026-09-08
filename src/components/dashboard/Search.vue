<script setup>
import search from '@/assets/images/icons/search.png'
import searchMute from '@/assets/images/icons/Search-mute.png'
import { ref, watch, defineEmits } from 'vue'

const searchQuery = ref()
const isOpenSearch = ref(false)

const emit = defineEmits(['searchInput'])
watch(searchQuery, (value) => emit('searchInput', value))
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
      <img class="search__icon-main" :src="search" />
      <img
        class="search__icon-toggle"
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
  &__icon-wrapper {
    width: 33px;
    height: 32px;
    text-align: center;
    padding: 7px;
    background-color: #eceef6;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &__icon-toggle {
    display: none;
  }
}
// Responsive
@media only screen and (max-width: 992px) {
  .search {
    min-width: 0;
    flex-basis: 200px;
  }
}
@media only screen and (max-width: 768px) {
  .search {
    flex: 1;
    border: none;
    width: auto;
    &--isOpen {
      border: 1px solid #e2edff;
      min-width: 183px;
    }
    &__input {
      width: 0;
      opacity: 0;
      transition: opacity 600ms ease;
      &--isOpen {
        width: 100%;
        opacity: 1;
      }
    }
    &__icon-main {
      display: none;
    }
    &__icon-toggle {
      display: block;
      cursor: pointer;
    }
    &__icon-wrapper {
      background-color: #ffffff;
      &--isOpen {
        background-color: #eceef6;
      }
    }
  }
}
</style>
