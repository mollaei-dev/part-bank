<script setup lang="ts">
import { required } from '@vee-validate/rules'
import { ErrorMessage, Field } from 'vee-validate'
const props = defineProps({
  name: { type: String, required: true },
  label: String,
  placeHolder: { type: String, default: '' },
  variant: String,
})
</script>

<template>
  <div class="input">
    <label :class="['input__label', `input__label--${variant}`]">{{ props.label }}</label>
    <Field
      :class="['input__field', `input__field--${variant}`]"
      :name="name"
      :placeholder="placeHolder"
    ></Field>
    <ErrorMessage class="input__error" :name="name"></ErrorMessage>
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
    &--login {
      color: #3c4351;
      font-size: 16px;
      font-weight: 400;
    }
  }
  &__field {
    border-radius: 6px;
    padding-right: 8px;
    padding-left: 30px;
    color: #3c4351;
    color: #eb482b;

    font: inherit;
    font-weight: 600;
    font-size: 14px;
    //  width: 100%;
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
  }
  &__error {
    color: #eb482b;
    font-weight: 400;
    font-size: 12px;
    padding: 0 8px;
  }
}
</style>
