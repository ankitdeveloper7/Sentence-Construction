import { atom } from "recoil";

export const useranswerAtom = atom<string[]>({
    key:"useranswerAtom",
    default:[]
});

export const correctanswerAtom = atom<string[]>({
    key:"correctanswerAtom",
    default:[]
});

