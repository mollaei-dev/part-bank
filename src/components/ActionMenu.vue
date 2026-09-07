<script setup>
defineProps({ menuItems: { type: Array, required: true } })
const emit = defineEmits(['select'])
</script>
<template>
  <div class="action-menu">
    <div v-for="(item, index) in menuItems" :key="item.label">
      <button
        @click="emit('select', item.action)"
        class="action-menu__item"
        :class="{ 'action-menu__item--disabled': item.disabled }"
      >
        <img class="action-menu__icon" :src="item.icon" />
        <span
          class="action-menu__label"
          :class="{
            'action-menu__label--danger': item.danger,
            'action-menu__label--disabled': item.disabled,
          }"
          >{{ item.label }}</span
        >
      </button>
      <div v-if="index !== menuItems.length - 1" class="divider"></div>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.action-menu {
  @include flex(column, flex-start, stretch);
  box-shadow: 0px 0px 4px 0px #0043650d;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 12px;
  gap: 12px;
  &__item {
    @include flex(row, flex-start, center);
    gap: 8px;
    background-color: inherit;
    cursor: pointer;
    margin-bottom: 12px;
    &--disabled {
      pointer-events: none;
    }
  }
  &__label {
    font-weight: 400;
    font-size: 14px;
    color: #3c4351;
    &--danger {
      color: #eb482b;
    }
    &--disabled {
      color: #c3c5c9;
      pointer-events: none;
    }
  }
}
</style>
