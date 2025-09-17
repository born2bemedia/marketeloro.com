import { create } from 'zustand';

export const useRequestDialogStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
  packageName: string;
  setPackageName: (value: string) => void;
  isShowSubtitle: boolean;
  setIsShowSubtitle: (value: boolean) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
  packageName: 'Test',
  setPackageName: (value: string) => set({ packageName: value }),
  isShowSubtitle: false,
  setIsShowSubtitle: (value: boolean) => set({ isShowSubtitle: value }),
}));
