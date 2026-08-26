<script setup>
import arrowLeft from '@/assets/images/icons/arrow-left.png'
import arrowRight from '@/assets/images/icons/arrow-right.png'

const props = defineProps(['transactions'])
</script>
<template>
  <table class="table">
    <thead class="table__head">
      <tr>
        <td class="table__head-title">نوع تراکنش</td>
        <td class="table__head-title">تاریخ و ساعت تراکنش</td>
        <td class="table__head-title">مبلغ تراکنش</td>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr class="table__row" v-for="item in transactions" :key="item.id">
        <td class="table__data table__data--type">
          <img :src="item.type === 'واریز' ? arrowLeft : arrowRight" />
          {{ item.type }}
        </td>
        <td class="table__data">
          {{ item.time.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]) + '\u00A0' }}
          {{ new Date(item.date).toLocaleDateString('fa-IR') }}
        </td>
        <td class="table__data">{{ item.amount.toLocaleString('fa-IR') }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
th,
td {
  font: inherit;
  background-color: inherit;
}
.table {
  width: 100%;
  height: 380px;
  border-spacing: 0 0;
  &__head {
    height: 60px;
    color: #ffffff;
    background-color: #4152a0;
    flex: 1;
    &-title {
      padding: 10px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      &:first-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
      &:last-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }
  }
  &__row {
    width: 100%;
    height: 61px;
    border-radius: 8px;
    text-align: center;
  }
  &__data {
    font-weight: 600;
    font-size: 16px;
    padding: 10px;
    text-align: center;
    color: #3c4351;
    &:first-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    &:last-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &--type {
      @include flex(row, center, center);
    }
  }
}
</style>
