import { create } from 'zustand';

interface useRegisterModal {
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
}

const useRegisterModal = create<useRegisterModal>((set) => ({
    isOpen: false,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;