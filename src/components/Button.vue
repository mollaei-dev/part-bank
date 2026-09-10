<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  heightBtn: { type: String, default: '48px' },
  disabled: { type: Boolean, default: false },
})
const emit = defineEmits(['press'])
</script>
<template>
  <button
    @click="emit('press')"
    :type="type"
    :disabled="disabled"
    :class="['btn', `btn--${variant}`]"
  >
    <slot name="btnLabel"></slot>
  </button>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/variables' as *;

.btn {
  cursor: pointer;
  width: 100%;
  height: v-bind('heightBtn');
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  @include flex(row, center, center);
  gap: 12px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.11);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &--primary {
    background-color: $primary-color;
    color: $surface-color;
  }
  &--secondary {
    background-color: $secondary-background-color;
    color: $text-color;
  }
}
</style>
