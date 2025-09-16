import { create } from 'zustand';

export const useApplyToJobStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
}));
