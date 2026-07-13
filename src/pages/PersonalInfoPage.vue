<script setup>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
</script>

<template>
  <div class="page">
    <h1 class="page__title">اطلاعات فردی</h1>
    <div class="divider"></div>
    <form class="page__form">
      <div class="page__form-row">
        <Input
          name="firstName"
          label="نام"
          placeHolder="نام فارسی"
          variant="personal"
          rules="required:نام"
        />
        <Input
          name="lastName"
          label="نام خانوادگی"
          placeHolder="نام خانوادگی بصورت کامل"
          variant="personal"
          rules="required:نام خانوادگی"
        />
        <Input
          name="postalCode"
          label="کدپستی"
          placeHolder="کدپستی 10 رقمی"
          variant="personal"
          rules="required:کدپستی|tenDigit"
        />
      </div>
      <Input
        as="textarea"
        name="address"
        label="محل سکونت"
        placeHolder="آدرس محل سکونت"
        variant="personal"
        rules="required:آدرس محل سکونت"
      />
      <div class="page__form-buttons">
        <Button variant="secondary">
          <template #btnLabel>قبلی</template>
        </Button>
        <Button type="submit">
          <template #btnLabel>ثبت و ادامه</template>
        </Button>
      </div>
    </form>
  </div>
</template>
