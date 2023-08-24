import { create } from 'zustand';

interface RentModalStore {
    isOpen: boolean;
    OnOpen: () => void;
    OnClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}));

export default useRentModal;