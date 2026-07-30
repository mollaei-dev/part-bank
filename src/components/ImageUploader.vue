<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed, ref } from 'vue'

const props = defineProps(['side'])
const fileInput = ref(null)

const userStore = useUserStore()
const errorMessage = ref('')

const priviewUrl = computed(() =>
  props.side === 'front' ? userStore.userInfo.frontCardImage : userStore.userInfo.backCardImage,
)

function clickFileInput() {
  fileInput.value.click()
}

function processFile(file) {
  errorMessage.value = ''
  if (!file) {
    showError(`تصویر ${props.side === 'front' ? 'روی' : 'پشت'} کارت ملی الزامی است`)
    return
  }
  if (!file.type.startsWith('image/')) {
    showError('فقط فایل تصویری مجاز است')
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    showError('حجم عکس نباید بیشتر از ۵ مگابایت باشد')
    return
  }
  userStore.saveCardImage(file, props.side)
}

let errorTimer = null
function showError(message) {
  if (errorTimer) clearTimeout(errorTimer)
  errorMessage.value = message
  errorTimer = setTimeout(() => {
    errorMessage.value = ''
  }, 2000)
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
      <img />
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<style lang="scss">
.upload {
  width: 320px;
  height: 232px;
  background-color: #f9fafb;
  border-radius: 12px;
  &__dropzone {
    position: relative;
    text-align: center;
    width: 100%;
    height: 180px;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
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
  }
  &__priview {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
}
</style>
