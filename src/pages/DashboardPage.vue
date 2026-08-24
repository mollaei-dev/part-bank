<script setup>
import BaseCard from '@/components/dashboard/BaseCard.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import vector from '@/assets/images/icons/vector.png'
import arrowLeft from '@/assets/images/icons/arrowLeft.png'
import infoCircle from '@/assets/images/icons/infoCircle.png'
import BalanceCard from '@/components/dashboard/BalanceCard.vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'
import { ref, computed } from 'vue'

const userStore = useUserStore()
const toast = useToast()
const account = ref({})


onMounted(async () => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.get('/mock/db.json', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!userStore.currentUser) userStore.setCurrentUser(response.data.user)
    if (userStore.hasAccount) {
      account.value = response.data.accounts[0]
    }
  } catch (error) {
    if (!error.response) {
      toast.error('خطا در برقراری ارتباط با سرور')
    } else {
      toast.error('دریافت اطلاعات با خطا مواجه شد')
    }
  }
})
</script>
<template>
  <div class="dashboard">
    <Sidebar />
    <div class="dashboard__content">
      <div class="dashboard__cards">
        <BalanceCard />
        <BaseCard card-title="امتیاز حساب" btn-label="محاسبه امتیاز" :metaIcon="infoCircle">
          <template #content>
            <div class="card-content">
              <p class="card-content__row">
                <span class="card-content__amount">{{
                  Number(account?.score?.amount).toLocaleString('fa-IR') || 0
                }}</span>ریال
              </p>
              <p class="card-content__row">
                <span class="card-content__duration">{{
                  Number(account?.score?.durationMonth).toLocaleString('fa-IR') || 0
                }}</span>ماهه
              </p>
            </div>
          </template>
        </BaseCard>
        <BaseCard
          card-title="قسط پیش رو"
          btn-label="پرداخت"
          metaLabel="جزئیات"
          :metaIcon="vector"
          :btnIcon="arrowLeft"
        >
          <template #details>
            <div class="card-details">
              <p class="card-details__row">
                مبلغ قسط:
                <span class="card-details__amount">{{
                  Number(account?.nextInstallment?.amount).toLocaleString('fa-IR') || 0
                }}</span>
              </p>
              <p class="card-details__row">
                تاریخ سررسید:
                <span class="card-details__duration">{{
                  account?.nextInstallment?.dueDate
                    ? new Date(account?.nextInstallment?.dueDate).toLocaleDateString('fa-IR')
                    : '-'
                }}</span>
              </p>
            </div>
          </template>
        </BaseCard>
      </div>
      <div class="dashboard__transaction"></div>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.dashboard {
  @include flex(row, center, stretch);
  margin: 108px auto;
  border-radius: 12px;
  max-width: 1400px;
  width: 100%;
  background-color: #f7f8fa;
  padding: 0;
  gap: 16px;
  &__cards {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  &__content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    &--inactive {
      opacity: 0.09;
      pointer-events: none;
    }
  }
}
.card-content {
  @include flex(column, center, center);
  gap: 0;
  &__row {
    @include flex(row, center, center);
    gap: 4px;
    color: #8999b9;
    font-weight: 400;
    font-size: 14px;
  }
  &__amount {
    color: #4152a0;
    font-size: 40px;
    font-weight: 700;
  }
  &__duration {
    color: #4152a0;
    font-weight: 700;
    font-size: 18px;
  }
}
.card-details {
  @include flex(column, flex-start, normal);
  gap: 12px;
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__amount,
  &__duration {
    font-weight: 600;
    font-size: 14px;
    color: #3c4351;
  }
}
</style>
