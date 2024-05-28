'use client'

import { Input } from '@/components/Common/FormFields/Input'
import { EyeHideIcon, EyeShowIcon } from '@/components/Common/Icons'

const FormFieldSamples = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-6 rounded border border-primary-100 p-4'>
        <h2>Input Field</h2>
        <Input label='Text Input' placeholder='Placeholder text' />
        <Input
          label='Text Input Disabled'
          placeholder='Placeholder text'
          disabled
        />
        <Input
          label='Required Text Input'
          required
          helperText='This is label helper text'
          placeholder='Placeholder text'
        />
        <Input
          label='Required Error Text Input'
          required
          error='This is an error message'
          placeholder='Placeholder text'
        />
        <Input
          label='Required Error Text Input Horizontal'
          required
          error='This is an error message'
          placeholder='Placeholder text'
          layout='horizontal'
          helperText='This is label helper text'
        />
        <Input
          type='text'
          label='Required Error Text Input'
          required
          placeholder='********'
          startAdornment={{
            adornment: <EyeHideIcon />,
            onClick: () => {},
            className:
              'text-neutral-500 hover:text-neutral-700 transition-colors duration-300',
          }}
        />
        <Input
          type='password'
          label='Required Error Text Input'
          required
          placeholder='********'
          endAdornment={{
            adornment: <EyeShowIcon />,
            onClick: () => {},
            className:
              'text-neutral-500 hover:text-neutral-700 transition-colors duration-300',
          }}
        />
      </div>
    </div>
  )
}

export default FormFieldSamples
