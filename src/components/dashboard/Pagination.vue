<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  totalPages: { type: Number, required: true },
  currentPage: { type: Number, required: true },
})
const emit = defineEmits(['changePage'])



function goBack() {
  if (props.currentPage > 1) emit('changePage', props.currentPage - 1)
}
function goNext() {
  if (props.currentPage < props.totalPages) emit('changePage', props.currentPage + 1)
}
</script>
<template>
  <div class="pagination">
    <button @click="goBack()" class="pagination__btn">
      <img src="@/assets/images/icons/vectorRight.png" />
    </button>
    <!-- <button
      class="pagination__btn"
      :class="{ 'pagination__btn--active': props.currentPage === page }"
      v-for="page in totalPages"
      :key="page"
      @click="emit('changePage', page)"
    >
      {{ page.toLocaleString('fa-IR') }}
    </button> -->
    <button
      class="pagination__btn"
      :class="{ 'pagination__btn--active': props.currentPage === page }"
      v-for="page in 3"
      :key="page"
      @click="emit('changePage', page)"
    >
      {{ page.toLocaleString('fa-IR') }}
    </button> 
    <!-- <button
      class="pagination__btn"
      :class="{ 'pagination__btn--active': props.currentPage === page }">
    
    </button> -->
    <button @click="goNext()" class="pagination__btn">
      <img src="@/assets/images/icons/vectorLeft.png" />
    </button>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;

.pagination {
  width: 100%;
  height: 40px;
  @include flex(row, center, center);
  gap: 8px;
  opacity: 1;
  margin-top: 10px;
  &__btn {
    color: #8999b9;
    background-color: #f9fafb;
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
      background-color: #4152a0;
      color: #ffffff;
    }
  }
}
</style>
