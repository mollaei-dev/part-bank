<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref, watch } from 'vue'
import ActionMenu from './ActionMenu.vue'
import editIcon from '@/assets/images/icons/edit.png'
import deleteIcon from '@/assets/images/icons/trash.png'

const props = defineProps(['side', 'isRequired'])
const fileInput = ref(null)

const userStore = useUserStore()
const errorMessage = ref('')
const isDragging = ref(false)
const isMenuOpen = ref(false)
const menuItems = [
  { icon: editIcon, label: 'ویرایش', action: 'edit-image' },
  { icon: deleteIcon, label: 'حذف', action: 'delete-image', danger: true },
]
function closeActionMenu() {
  isMenuOpen.value = false
}
const priviewUrl = computed(() =>
  props.side === 'front' ? userStore.userInfo.frontCardImage : userStore.userInfo.backCardImage,
)
watch(
  () => props.isRequired,
  (newValue) => {
    if (newValue && props.side === 'front') showError('تصویر روی کارت ملی الزامی است')
    if (newValue && props.side === 'back') showError('تصویر پشت کارت ملی الزامی است')
  },
)

function clickFileInput() {
  fileInput.value.click()
}

function processFile(file) {
  errorMessage.value = ''

  if (!file.type.startsWith('image/')) {
    showError('فقط فایل تصویری مجاز است')
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    showError('حجم عکس نباید بیشتر از ۵ مگابایت باشد')
    return
  }
  userStore.saveCardImage(file, props.side)
  isDragging.value = false
}

let errorTimer = null
function showError(message) {
  if (errorTimer) clearTimeout(errorTimer)
  errorMessage.value = message
  errorTimer = setTimeout(() => {
    errorMessage.value = ''
  }, 2000)
}

function handleMenuAction(action) {
  if (action === 'edit-image') {
    fileInput.value.click()
    isMenuOpen.value = false
  } else if (action === 'delete-image') {
    userStore.deleteCardImage(props.side)
    priviewUrl.value = null
    isMenuOpen.value = false
  }
}
</script>
<template>
  <div class="upload">
    <div
      @click="clickFileInput()"
      @dragover.prevent="isDragging = true"
      @drop.prevent="processFile($event.dataTransfer.files[0])"
      @dragleave="isDragging = false"
      class="upload__dropzone"
      :class="{ 'upload__dropzone--dragging': isDragging }"
    >
      <svg class="upload__dropzone-border">
        <rect class="upload__dropzone-border-rect"></rect>
      </svg>
      <input type="file" ref="fileInput" @change="processFile($event.target.files[0])" hidden />

      <img v-if="priviewUrl" class="upload__priview" :src="priviewUrl" />
      <div v-else class="upload__placeholder">
        <img class="upload__icon" src="@/assets/images/icons/upload.png" alt="upload" />
        <p class="upload__text">
          ? تصویر را بکشید و اینجا رها کنید <br />
          یا <span>کلیک کنید</span>.
        </p>
      </div>
    </div>
    <div class="upload__footer">
      <p class="upload__label">
        {{ side === 'front' ? 'تصویر روی کارت ملی' : 'تصویر پشت کارت ملی' }}
      </p>
      <img
        class="upload__menu-icon"
        @click="isMenuOpen = !isMenuOpen"
        v-click-outside="closeActionMenu"
        :hidden="!priviewUrl"
        src="@/assets/images/icons/more.png"
        alt="menu"
      />
      <ActionMenu
        :menuItems="menuItems"
        @select="handleMenuAction"
        class="upload__menu"
        :class="{ 'upload__menu--isopen': isMenuOpen }"
      />
    </div>
    <p v-if="errorMessage" class="upload__error">{{ errorMessage }}</p>
  </div>
</template>
<style lang="scss">
@use '@/styles/mixins' as *;
.upload {
  position: relative;
  width: 320px;
  height: 232px;
  background-color: #f9fafb;
  border-radius: 12px;
  &__dropzone {
    position: relative;
    width: 100%;
    height: 180px;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    @include flex(column, center, center);

    &-border {
      display: block;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: visible;
      &-rect {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: #e2edff;
        stroke-width: 1px;
        stroke-dasharray: 7 7;
        clip-path: inset(0 round 12px 12px 0 0);
      }
    }
    &--dragging {
      .upload__dropzone-border-rect {
        stroke: #1976d2;
      }
    }
  }
  &__priview {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__placeholder {
    @include flex(column, center, center);
    gap: 8px;
  }
  &__icon {
    width: 68px;
    height: 50px;
  }
  &__text {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #8999b9;
    span {
      color: #4152a0;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
    height: 52px;
  }
  &__label {
    font-weight: 400;
    font-size: 14px;
    color: #3c4351;
  }
  &__menu {
    &-icon {
      cursor: pointer;
    }
  }
  &__menu {
    position: absolute;
    bottom: 12px;
    left: 16px;
    width: 93px;
    height: auto;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease-in;
    &--isopen {
      opacity: 1;
      pointer-events: auto;
    }
    &-icon {
      cursor: pointer;
    }
  }
  &__error {
    color: #eb482b;
    font-weight: 400;
    font-size: 12px;
    padding: 0 8px;
    margin-top: 10px;
  }
}
</style>
