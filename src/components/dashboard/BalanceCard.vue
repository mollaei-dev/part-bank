<script setup>
import { computed, ref } from 'vue'
import ActionMenu from '@/components/ActionMenu.vue'
import editIcon from '@/assets/images/icons/convert-card.png'
import deleteIcon from '@/assets/images/icons/dalete-accountn.png'

const props = defineProps(['cardBalance', 'cardNumber'])
const emit = defineEmits(['deleteAccount'])
const isMenuOpen = ref(false)
const menuItems = [
  { icon: editIcon, label: 'تغییر حساب متصل', action: 'edit-account', disabled: true },
  { icon: deleteIcon, label: 'حذف حساب بانکی', action: 'delete-account', danger: true },
]

const cardParts = computed(() => {
  return props.cardNumber.match(/.{4}/g) || []
})
const formatToPersian = (str) => {
  return str.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
}

function closeActionMenu() {
  isMenuOpen.value = false
}
function handleMenuAction(action) {
  if (action === 'delete-account') {
    emit('deleteAccount')
  }
}
</script>
<template>
  <div class="balance-card">
    <div class="balance-card__header">
      <img
        @click="isMenuOpen = !isMenuOpen"
        class="balance-card__icon"
        v-click-outside="closeActionMenu"
        src="@/assets/images/icons/more-card.png"
        alt="گزینه ها"
      />
      <ActionMenu
        @select="handleMenuAction"
        :menuItems="menuItems"
        class="balance-card__menu"
        :class="{ 'balance-card__menu--isopen': isMenuOpen }"
      />
      <div class="balance-card__amount">
        <h4 class="balance-card__label">موجودی کل</h4>
        <div class="balance-card__amount--value">
          {{ Number(cardBalance ?? 0).toLocaleString('fa-IR') }}
        </div>
      </div>
    </div>
    <div class="balance-card__number">
      <span v-for="(value, index) in cardParts" :key="index">
        {{ formatToPersian(value) }}
      </span>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.balance-card {
  position: relative;
  width: 456px;
  min-width: 320px;
  max-width: 456px;
  height: 260px;
  border-radius: 12px;
  color: #ffffff;
  padding: 36px;
  padding-bottom: 32px;
  @include flex(column, space-between, stretch);
  background:
    url('@/assets/images/noise.png') repeat,
    url('@/assets/images/pattern.png') repeat,
    linear-gradient(112deg, #4152a0, #d0c9c1);
  &__header {
    width: 100%;
    @include flex(row, space-between, flex-start);
  }
  &__icon {
    cursor: pointer;
  }
  &__menu {
    position: absolute;
    top: 72px;
    right: 36px;
    width: 187px;
    height: 88px;
    opacity: 0;
    transition: opacity 300ms ease-in;
    &--isopen {
      opacity: 1;
    }
  }
  &__amount {
    @include flex(column, flex-start, stretch);
    text-align: left;
    &--value {
      font-weight: 600;
      font-size: 40px;
    }
  }
  &__label {
    font-weight: 600;
    font-size: 16px;
  }

  &__number {
    @include flex(row, center, center);
    font-weight: 400;
    font-size: 36px;
    gap: 16px;
  }
}
// Responsive
@media only screen and (max-width: 1440px) {
  .balance-card {
    height: 240px;
    &__amount--value {
      font-size: 36px;
    }
    &__number {
      font-size: 32px;
      gap: 12px;
    }
  }
}
@media only screen and (max-width: 1200px) {
  .balance-card {
    flex: 0;
    flex-basis: 320px;
    height: 220px;
    &__amount--value {
      font-size: 32px;
    }
    &__number {
      font-size: 28px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .balance-card {
    flex-basis: 350px;
  }
}
@media only screen and (max-width: 576px) {
  .balance-card {
    flex-basis: 320px;
    height: 180px;
    &__amount--value {
      font-size: 24px;
    }
    &__number {
      font-size: 24px;
    }
  }
}
</style>
