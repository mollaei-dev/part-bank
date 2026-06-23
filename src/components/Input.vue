<script setup lang="ts">
import { required } from '@vee-validate/rules'
import { ErrorMessage, Field } from 'vee-validate'
const props = defineProps({
  name: { type: String, required: true },
  label: String,
  placeHolder: { type: String, default: '' },
  variant: String,
  type: { type: String, default: 'text' },
})
</script>

<template>
  <div class="input">
    <label :class="['input__label', `input__label--${variant}`]">{{ props.label }}</label>
    <div class="input__field-wrapper">
      <Field
        as="input"
        :class="['input__field', `input__field--${variant}`]"
        :name="name"
        :placeholder="placeHolder"
        :type="type"
      >
      </Field>
      <slot name="icon"></slot>
    </div>

    <div class="input__error-wrapper">
      <ErrorMessage class="input__error" :name="name"></ErrorMessage>
    </div>
  </div>
</template>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  &__label {
    padding-right: 8px;
    padding-left: 8px;
    height: 22px;
    width: 100%;
    &--login {
      color: #3c4351;
      font-size: 16px;
      font-weight: 400;
    }
  }
  &__field {
    // width: 100%;
    border-radius: 6px;
    padding-right: 8px;
    padding-left: 30px;
    color: #3c4351;
    font: inherit;
    font-weight: 600;
    font-size: 14px;
    width: 100%;
    border: none;
    &--login {
      height: 48px;
      background-color: #f9fafb;
      font-size: 14px;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #c3c5c9;
    }
    &-wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  }
  &__error-wrapper {
    height: 18px;
  }
  &__error {
    width: 100%;
    color: #eb482b;
    font-weight: 4;
    font-size: 12px;
    padding: 0 8px;
  }
}
</style>
