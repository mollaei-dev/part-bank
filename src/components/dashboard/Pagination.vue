<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
})
const emit = defineEmits(['changePage'])

const startPage = ref(1)
const visiblePages = computed(() => {
  const pages = []
  for (let i = 0; i < 3; i++) {
    const page = startPage.value + i
    if (page <= props.totalPages) {
      pages.push(page)
    }
  }
  return pages
})

function goBack() {
  if (props.currentPage > 1) {
    emit('changePage', props.currentPage - 1)
    if (props.currentPage - 1 < startPage.value) {
      startPage.value--
    }
  }
}
function goNext() {
  if (props.currentPage < props.totalPages) {
    emit('changePage', props.currentPage + 1)
    if (props.currentPage + 1 > startPage.value + 2) {
      startPage.value++
    }
  }
}
</script>
<template>
  <div class="pagination">
    <button @click="goBack()" class="pagination__btn">
      <img src="@/assets/images/icons/vectorRight.png" />
    </button>
    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--active': props.currentPage === page }"
      v-for="page in visiblePages"
      :key="page"
      @click="emit('changePage', page)"
    >
      {{ page.toLocaleString('fa-IR') }}
    </button>
    <button @click="goNext()" class="pagination__btn">
      <img src="@/assets/images/icons/vectorLeft.png" />
    </button>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/variables' as *;

.pagination {
  width: 100%;
  height: 40px;
  @include flex(row, center, center);
  gap: 8px;
  opacity: 1;
  margin-top: 10px;
  &__btn {
    color: $text-secondary-color;
    background-color: $background-secondary-color;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    border: none;
    padding: 4px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    &--active {
      background-color: $primary-color;
      color: #ffffff;
    }
  }
}
</style>
