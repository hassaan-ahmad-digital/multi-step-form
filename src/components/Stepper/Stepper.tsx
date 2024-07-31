import { currentStepSelector, nextStep, previousStep } from "@/store/slices";
import { useDispatch, useSelector } from "react-redux";
import { StepFour, StepOne, StepThree, StepTwo } from "./Steps";

export function Stepper() {

    const currentStep: number = useSelector(currentStepSelector);
    const dispatch = useDispatch()
    const next = () => dispatch(nextStep())
    const prev = () => dispatch(previousStep())

    const handlePreviousStepClick = () => {
        prev()
    }

    const handleNextStepClick = () => {
        next()
    }

    const handleSubmit = () => {
        //
    }

    return (
        <div className="h-auto bg-white w-full max-w-[40rem] px-3 py-2">
            {currentStep === 1 && <StepOne prev={prev} next={next} />}
            {currentStep === 2 && <StepTwo prev={prev} next={next} />}
            {currentStep === 3 && <StepThree prev={prev} next={next} />}
            {currentStep === 4 && <StepFour prev={prev} />}
        </div>
    )
}
