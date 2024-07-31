import { Button, Input, InputProps, Label } from '@/components/ui'
import { ToolTip } from '@/components/ToolTip'
import { useState } from 'react'

interface Props extends InputProps {
    label?: string
    id: string
    toolTip?: string
    errorMessage: string
}

const TooltipTrigger = () => {
    return (
        <button type='button' className='h-3 w-3 rounded-full cursor-pointer flex text-[0.7rem] justify-center items-center bg-gray-400 text-black'>
            i
        </button>
    )
}

export const TextField = ({ label, errorMessage, id, toolTip, ...rest }: Props) => {
    return (
        <div className='flex flex-col py-2'>
            <div className="flex mb-2 justify-start gap-2 items-center">
                {label &&
                    <>
                        <Label htmlFor={id}>{label} {rest.required && <span className='text-red-500'>*</span>}</Label>
                        {toolTip && (
                            <ToolTip trigger={<TooltipTrigger />} text={toolTip}/>
                        )}
                    </>
                }
            </div>
            <Input name={id} id={id} {...rest} />
            <p className='text-red-500'>{errorMessage}</p>
        </div>
    )
}
