import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || null)
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo')) || {})

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

  return { currentUser, userInfo, setCurrentUser, saveInfo }
})
