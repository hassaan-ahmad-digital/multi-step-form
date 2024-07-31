import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface FormSliceType {
    currentStep: number
    // step 1
    fullName: string
    userName: string
    // step 2
    email: string
    phone: string
    address: string
    // step 3
    resume: File | null
}

const initialState: FormSliceType = {
    currentStep: 1,
    fullName: '',
    userName: '',
    email: '',
    phone: '',
    address: '',
    resume: null
}

export const SETTER_ACTION_TYPES: Record<keyof Omit<FormSliceType, 'currentStep' | 'resume'>, string> = {
    email: 'EMAIL',
    address: 'ADDRESS',
    fullName: 'FULLNAME',
    phone: 'PHONE',
    userName: 'USERNAME'
} as const

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        nextStep: (state) => {
            if(state.currentStep === 4) return
            state.currentStep += 1;
        },
        previousStep: (state) => {
            if(state.currentStep === 1) return
            state.currentStep -= 1;
        },
        setStringState: (state, action: PayloadAction<{ field: keyof Omit<FormSliceType, 'currentStep' | 'resume'>, value: string }>) => {
            state[action.payload.field] = action.payload.value;
        }
    },
});

export const { actions: { nextStep, previousStep, setStringState }, reducer: formReducer } = formSlice;

export const currentStepSelector = (state: RootState) => state.form.currentStep
export const userNameSelector = (state: RootState) => state.form.userName
export const fullnameSelector = (state: RootState) => state.form.fullName
export const addressSelector = (state: RootState) => state.form.address
export const emailSelector = (state: RootState) => state.form.email
export const phoneSelector = (state: RootState) => state.form.phone
export const resumeSelector = (state: RootState) => state.form.resume