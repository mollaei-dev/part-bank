<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { Form } from 'vee-validate'
import api from '@/axios'
import { ref } from 'vue'

const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

function goBack() {
  router.push({ name: 'upload-id' })
}
async function handleSubmit() {
  loading.value = true
  try {
    const response = await api.post('', {
      firstName: userStore.userInfo.firstName,
      lastName: userStore.userInfo.lastName,
      postalCode: userStore.userInfo.postalCode,
      address: userStore.userInfo.address,
      nationalCardImage: userStore.userInfo.frontCardImage,
    })
    if (response.status === 201) {
      router.push({ name: 'dashboard' })
    }
  } catch (error) {
    if (!error.response) {
      await userStore.activeDemoMode()
      router.replace({ name: 'dashboard' })
    }
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 6500)
  }
}
</script>
<template>
  <div class="page">
    <h1 class="page__title">اطلاعات فردی</h1>
    <div class="divider"></div>
    <Form @submit="handleSubmit" :initial-values="userStore.userInfo" class="page__form">
      <div class="page__form-row">
        <Input readonly name="firstName" label="نام" variant="confirm" \ />
        <Input readonly name="lastName" label="نام خانوادگی" variant="confirm" />
        <Input readonly name="postalCode" label="کدپستی" variant="confirm" />
      </div>
      <Input readonly as="textarea" name="address" label="محل سکونت" variant="confirm" />
      <div class="page__form-buttons">
        <Button @press="goBack" variant="secondary">
          <template #btnLabel>قبلی</template>
        </Button>
        <Button type="submit" :disabled="loading">
          <template #btnLabel>{{ loading ? 'درحال ایجاد حساب' : 'افتتاح حساب' }}</template>
        </Button>
      </div>
    </Form>
  </div>
</template>
