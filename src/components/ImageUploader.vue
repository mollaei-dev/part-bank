<script setup></script>
<template>
  <div class="upload">
    <div class="upload__dropzone">
      <img class="upload__icon" src="@/assets/images/icons/upload.png" />
      <p class="upload__text">
        تصویر را بکشید و اینجا رها کنید یا <br />
        <span>کلیک کنید.</span>
      </p>
    </div>
    <div class="upload__footer">
      <p class="upload__label">تصویر روی کارت ملی</p>
      <img />
    </div>
  </div>
</template>
<style lang="scss">
.upload {
  width: 320px;
  height: 232px;
  background-color: #f9fafb;
  border-radius: 12px;
  &__dropzone {
    text-align: center;
    width: 100%;
    height: 180px;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
  }
  &__icon {
    width: 68px;
    height: 50px;
  }
  &__text {
    white-space: pre-wrap;
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
