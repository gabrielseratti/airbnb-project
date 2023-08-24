import { create } from 'zustand';

interface LoginModalStore {
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}));

export default useLoginModal;