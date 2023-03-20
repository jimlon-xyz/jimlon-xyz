import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        token: null,
        user: null
    })
})
