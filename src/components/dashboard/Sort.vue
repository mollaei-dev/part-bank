<script setup>
import { ref } from 'vue'
const emit = defineEmits(['changeSort'])
const options = ['همه', 'واریز', 'برداشت']
const selected = ref('')
const isOpenSort = ref(false)

function selectOption(option) {
  selected.value = option
  emit('changeSort', option)
  isOpenSort.value = false
}
</script>
<template>
  <div class="sort">
    <div class="sort__label">
      <img class="sort__label-icon" src="@/assets/images/icons/sort.png" />
      <span class="sort__label-text"> مرتب سازی:</span>
    </div>
    <div class="sort__dropdown">
      <div
        class="sort__dropdown-header"
        @click="isOpenSort = !isOpenSort"
        :class="{ 'sort__dropdown-header--isOpen': isOpenSort }"
      >
        <span class="sort__selected">{{ selected }}</span>
        <img class="sort__icon-arrow" src="@/assets/images/icons/arrow-bottom.png" />
      </div>
      <transition name="dropdown">
        <ul class="sort__list" v-show="isOpenSort">
          <li
            class="sort__option"
            v-for="option in options"
            :key="option"
            @click.stop="selectOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;

// Transition classes for Vue dropdown animation
.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 300ms ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  overflow: hidden;
}
.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 120px;
}

.sort {
  width: 269px;
  height: 34px;
  display: flex;
  align-items: center;
  gap: 8px;
  &__label {
    @include flex(row, center, center);
    gap: 2px;
    width: 88px;
    height: 20px;
    &-icon {
      cursor: pointer;
      pointer-events: none;
    }
    &-text {
      font-weight: 400;
      font-size: 14px;
      color: #8999b9;
    }
  }
  &__dropdown {
    position: relative;
    width: 183px;
    &-header {
      height: 34px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      padding: 7px 8px 7px 4px;
      border: 1px solid #e2edff;
      cursor: pointer;
      &--isOpen {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  &__selected {
    font-weight: 400;
    font-size: 14px;
    color: #3c4351;
  }
  &__icon-arrow {
    width: 16px;
    height: 16px;
  }
  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    cursor: pointer;
    list-style-type: none;
    border: 1px solid #e2edff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #ffffff;
  }
  &__option {
    padding: 3px 10px;
    font-weight: 400;
    font-size: 14px;
    color: #3c4351;
    &:hover {
      background-color: #f0f0f1;
    }
  }
}

// Responsive
@media only screen and (max-width: 992px) {
  .sort {
    min-width: auto;
    flex-basis: 200px;
  }
}
@media only screen and (max-width: 768px) {
  .sort {
    flex: 1;
    width: auto;
    &__label {
      width: auto;
      &-text {
        display: none;
      }
      &-icon {
        width: 20px;
        height: 20px;
        pointer-events: auto;
      }
    }
    &__dropdown {
      width: auto;
      &-header {
        display: none;
      }
    }
    &__list {
      width: 183px;
      top: 15px;
    }
  }
}
</style>
