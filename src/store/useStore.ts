import { create } from 'zustand';

interface State {}

const useStore = create<State>((set) => ({}));

export default useStore;
