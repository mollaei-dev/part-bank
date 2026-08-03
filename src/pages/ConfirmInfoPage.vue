<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { Form } from 'vee-validate'

const router = useRouter()
const userStore = useUserStore()

function handleSubmit() {
  router.push({ name: 'dashboard' })
}
function goBack() {
  router.push({ name: 'upload-id' })
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
        <Button type="submit">
          <template #btnLabel>افتتاح حساب</template>
        </Button>
      </div>
    </Form>
  </div>
</template>
