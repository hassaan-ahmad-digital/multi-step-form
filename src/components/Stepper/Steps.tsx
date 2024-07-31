import { TextField } from "@/components/TextField";
import { Button } from "@/components/ui";
import { AppDispatch } from "@/store";
import { fullnameSelector, setStringState, SETTER_ACTION_TYPES, userNameSelector } from "@/store/slices";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

type StepProps = {
  next?: () => void
  prev?: () => void
}

export const StepOne: React.FC<StepProps> = ({ next }) => {
  const fullName = useSelector(fullnameSelector)
  const userName = useSelector(userNameSelector)

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (name: keyof typeof SETTER_ACTION_TYPES) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStringState({ field: name, value: e.target.value }))
  }

  return (
    <form onSubmit={() => next?.()} className="flex flex-col h-full">
      <div className="flex flex-1 flex-col">
        <TextField id="fullName" errorMessage="fullName not valid" required value={fullName} onChange={handleChange('fullName')} label="Full Name" toolTip="This is the full name" type="text" />
        <TextField id="userName" errorMessage="userName not valid" required value={userName} onChange={handleChange('userName')} label="Username" toolTip="This is the user name" type="text" />
      </div>
      <div className="flex justify-between items-center">
        <Button className="ml-auto" type="submit" >Next</Button>
      </div>
    </form>
  )
};

export const StepTwo: React.FC<StepProps> = ({ next, prev }) => {

  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (name: keyof typeof SETTER_ACTION_TYPES) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStringState({ field: name, value: e.target.value }))
  }

  function handleSubmit() {
    next?.()
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <TextField id="email" errorMessage="email not valid" required label="Email" toolTip="This is the email" type="email" />
        <TextField id="phone" errorMessage="phone not valid" required label="Phone" toolTip="This is the phone number" type="text" />
        <TextField id="address" errorMessage="address not valid" required label="Address" toolTip="This is the full address" type="text" />
      </div>
      <div className="flex justify-between items-center">
        <Button className="mr-auto" type="button" onClick={prev}>Previous</Button>
        <Button className="ml-auto" type="submit">Next</Button>
      </div>
    </form>
  )
};

export const StepThree: React.FC<StepProps> = ({ next, prev }) => (
  <form>
    <div className="flex flex-col">
      <TextField errorMessage="resume file not valid" id="resume" type="file" />
    </div>
    <div className="flex justify-between items-center">
      <Button className="mr-auto" type="button" onClick={prev}>Previous</Button>
      <Button className="ml-auto" type="submit">Next</Button>
    </div>
  </form>
);

export const StepFour: React.FC<StepProps> = () => (
  <>
  </>
);
