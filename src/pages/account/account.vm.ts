export interface AccountVM {
    type: string,
    name: string;
}

export const createEmptyAccount = (): AccountVM => ({
    type: '',
    name: ''
});