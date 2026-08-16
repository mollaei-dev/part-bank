import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
const delay = (ms) => new Promise((res) => setTimeout(res, ms))
const toast = useToast()
const demoUser = { firstName: 'محمدجواد', lastName: 'رحمانی نصب', idNumber: '0920125444' }

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || null)
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo')) || {})
  const hasAccount = ref(JSON.parse(localStorage.getItem('hasAccount')) || false)

  function setCurrentUser(user) {
    currentUser.value = user
    localStorage.setItem('currentUser', JSON.stringify(user))
  }
  function saveInfo(formData) {
    userInfo.value = {
      ...userInfo.value,
      firstName: formData.firstName,
      lastName: formData.lastName,
      postalCode: formData.postalCode,
      address: formData.address,
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
  }

  function saveCardImage(file, side) {
    const reader = new FileReader()
    reader.onload = () => {
      if (side === 'front') userInfo.value.frontCardImage = reader.result
      else userInfo.value.backCardImage = reader.result
      localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
    }
    reader.readAsDataURL(file)
  }
  function deleteCardImage(side) {
    if (side === 'front') userInfo.value.frontCardImage = null
    else userInfo.value.backCardImage = null
    localStorage.setItem('userInfo', JSON.stringify(userInfo.value))
  }
  function setHasAccount(status) {
    hasAccount.value = status
    localStorage.setItem('hasAccount', JSON.stringify(status))
  }
  async function activateDemoMode() {
    toast.error('خطا در برقراری ارتباط با سرور')
    localStorage.setItem('token', 'demoToken')
    setCurrentUser(demoUser)
    await delay(3000)
    toast.info('حالت دمو فعال شد')
    await delay(2000)
  }
  return {
    currentUser,
    userInfo,
    setCurrentUser,
    saveInfo,
    saveCardImage,
    deleteCardImage,
    activateDemoMode,
    setHasAccount,
  }
})
