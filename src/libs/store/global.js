import create from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalStore = create(
  persist(
    (set) => ({
      // for mobile menu toggle
      showMenuMobile: false,
      setShowMenuMobile: (value) => set({ showMenuMobile: value }),

      // for temp form data
      formTemp: null,
      setFormTemp: (key, value) => set(state => ({ formTemp: { ...state.formTemp,  [key]: value} })),
      clearFormTemp: () => set(({ formTemp: null })),

      // store global form
      forms: [],
      addForm: (form) => set(state => ({ forms: [...state.forms, form] }))
    }),
    {
      name: 'global'
    }
  )
)