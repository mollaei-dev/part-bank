<script setup>
import { Form } from 'vee-validate'
import Input from '@/components/Input.vue'
import { ref } from 'vue'
import showIcon from '@/assets/images/icons/show-password.png'
import hideIcon from '@/assets/images/icons/hide-password.png'
import Button from '@/components/Button.vue'
import { registerValidationRules } from '@/validation/validationRules'
import api from '@/axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'

const showPassword = ref(true)
registerValidationRules()
const loading = ref(false)
const router = useRouter()
const toast = useToast()
const userStore = useUserStore()

async function loginHandle(formData) {
  loading.value = true
  try {
    const response = await api.post('/auth/login', {
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    })
    const { token, user } = response.data
    if (user) {
      userStore.setCurrentUser(user)
    }
    localStorage.setItem('token', token)
    router.replace({ name: 'dashboard' })
  } catch (error) {
    if (!error.response) {
      await userStore.activeDemoMode()
      router.replace({ name: 'dashboard' })
    } else if (error.response?.status === 401) {
      toast.error('شماره یا رمز عبور اشتباه است')
    } else {
      toast.error('خطای سرور، لطفاً دوباره تلاش کنید')
    }
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 4000)
  }
}
</script>

<template>
  <div class="login">
    <div class="login__container">
      <div class="login__right">
        <img class="login__logo" src="@/assets/images/logo.png" />
        <Form @submit="loginHandle" class="login__form">
          <div class="login__input-wrapper">
            <Input
              variant="login"
              name="phoneNumber"
              label="شماره همراه"
              place-holder="09129876543"
              rules="required:شماره همراه|phoneNumber"
            />
            <Input
              variant="login"
              :type="showPassword ? 'password' : 'text'"
              name="password"
              label="رمزعبور"
              place-holder="Ali@1234"
              rules="required:رمزعبور|password"
            >
              <template #icon
                ><img
                  @click="showPassword = !showPassword"
                  :src="showPassword ? showIcon : hideIcon"
                  class="login__icon-password"
                />
              </template>
            </Input>
          </div>
          <Button type="Submit" :disabled="loading">
            <template #btnLabel>{{ loading ? 'در حال ورود ...' : 'ورود' }}</template>
          </Button>
        </Form>
        <p class="login__footer">پشتیبانی: ۱۲۳۴۵۶۷۸-۰۲۱</p>
      </div>
      <div class="login__left">
        <img class="login__image" src="@/assets/images/photo-login.svg" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/styles/mixins' as *;
.login {
  @include flex(row, center, center);
  background: url('@/assets/images/BG-Image.png');
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  &__container {
    @include flex(row, stretch, stretch);
    background-color: #fff;
    box-shadow: 0px 0px 4px 0px #0043650d;
    border-radius: 20px;
    max-width: 1200px; //new
    width: 65%;
    max-height: 840px;
    height: auto;
  }
  &__right {
    flex: 1 1 50%;
    @include flex(column, space-between, center);
    height: 100%;
    gap: 40px;
    padding: 32px 0;
  }
  &__logo {
    width: 46%;
    max-width: 279px; //new
    height: auto;
    margin-top: 50px;
    margin-bottom: 128px; //new
  }
  &__form {
    @include flex(column, center, stretch);
    gap: 32px;
    width: 59%;
    max-width: 354px;
    height: auto;
    margin-bottom: auto;
    margin-bottom: 110px;
    flex: 1;
  }
  &__input-wrapper {
    @include flex(column, center, stretch);
    width: 100%;
    gap: 8px;
  }
  &__icon-password {
    position: absolute;
    left: 8px;
    width: 24px;
    height: auto;
    cursor: pointer;
  }
  &__footer {
    margin-bottom: 0;
    margin-top: auto;
    font-size: 14px;
    font-weight: 400;
    color: #3c4351;
  }
  &__left {
    flex: 1 1 50%;
    height: 100%;
    padding: 20px;
  }
  &__image {
    width: 100%;
    height: 100%;
  }
}

/* Responsive */
@media only screen and (max-width: 1200px) {
  .login__container {
    width: 85%;
  }
}
@media only screen and (max-width: 992px) {
  .login {
    &__container {
      width: 90%;
      height: 550px; //jadidddddd
    }
  }
}
@media only screen and (max-width: 768px) {
  .login {
    display: block;
    &__container {
      flex-direction: column;
    }
    &__form {
      height: auto;
      width: 100%;
    }
    &__logo {
      width: 35%;
      height: auto;
      max-height: 240px;
      object-fit: contain;
      margin-bottom: 30px;
    }
    &__image {
      height: auto;
      width: 100%;
      max-height: 400px;
      object-fit: contain;
    }
  }
}
@media only screen and (max-width: 576px) {
  .login {
    &__container {
      width: 100%;
    }
    &__form {
      width: 80%;
    }
  }
}
</style>
