import { required } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

export function registerValidationRules() {
  defineRule('required', (value, [label]) => {
    if (!required(value)) return ` ${label} را وارد کنید `
    return true
  })

  const mobilePattern = /^09\d{9}$/
  defineRule('phoneNumber', (value) => {
    if (!mobilePattern.test(value)) return 'شماره همراه معتبر نیست'
    return true
  })

  defineRule('password', (value) => {
    if (value.length < 6) return ' رمز عبور حداقل باید 6 کاراکتر باشد'
    return true
  })

  const postalCodePattern = /^\d{10}$/
  defineRule('postalCode', (value) => {
    if (!postalCodePattern.test(value)) {
      return 'کد پستی باید ۱۰ رقم باشد'
    }
    return true
  })
}
