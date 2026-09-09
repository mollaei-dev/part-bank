<script setup>
import { ErrorMessage, Field } from 'vee-validate'
const props = defineProps({
  as: { type: String, default: 'input' },
  name: { type: String, required: true },
  label: String,
  placeHolder: { type: String, default: '' },
  variant: String,
  type: { type: String, default: 'text' },
  rules: { type: [String, Object], default: null },
  readonly: { type: Boolean, default: false },
})
</script>

<template>
  <div class="input">
    <label :class="['input__label', `input__label--${variant}`]">{{ props.label }}</label>
    <div class="input__field-wrapper">
      <Field
        :as="as"
        :class="[
          'input__field',
          `input__field--${variant}`,
          as === 'textarea' ? `input__field--textarea-${variant}` : null,
        ]"
        :name="name"
        :placeholder="placeHolder"
        :type="type"
        :rules="rules"
        :readonly="readonly"
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
@use '@/styles/mixins' as *;
.input {
  width: 100%;
  @include flex(column);
  gap: 4px;
  &__label {
    padding-right: 8px;
    padding-left: 8px;
    height: 22px;
    width: 100%;
    &--login {
      @include input-label-style(#3c4351, 16px, 400);
    }
    &--personal {
      @include input-label-style(#8999b9, 14px, 600);
    }
    &--confirm {
      @include input-label-style(#8999b9, 16px, 400);
    }
  }
  &__field {
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
      @include input-field-style(48px, none, #f9fafb, 14px);
    }
    &--personal {
      @include input-field-style(40px, 1px solid #ececee, #f9fafb, 14px);
    }
    &--confirm {
      @include input-field-style(22px, none, #fff, 16px);
    }
    &--textarea-personal {
      height: 120px;
      padding: 16px 8px;
      resize: none;
    }
    &--textarea-confirm {
      height: auto;
      overflow-y: hidden;
      resize: none;
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #f9fafb inset;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      color: #c3c5c9;
    }
    &-wrapper {
      position: relative;
      @include flex(row, space-between, center);
      width: 100%;
    }
  }
  &__error-wrapper {
    height: 18px;
  }
  &__error {
    width: 100%;
    color: #eb482b;
    font-weight: 400;
    font-size: 12px;
    padding: 0 8px;
  }
}
</style>
