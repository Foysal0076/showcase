import { cva } from 'class-variance-authority'
import clsx from 'clsx'

import { Spinner } from '@/components/Common/Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
}

const ButtonVariants = cva(
  'rounded-sm transition-all duration-200 text-nowrap focus:outline-none font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 text-neutral-0 focus:outline-primary-200 disabled:active:transform-none active:scale-[.9] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed disabled:bg-neutral-50',
        secondary:
          'bg-none text-neutral-900 hover:bg-primary-50 focus:ring-primary-100 border-2 border-primary-500 text-primary-500 focus:ring-4 focus:ring-primary-100 disabled:active:transform-none active:scale-[.9] disabled:cursor-not-allowed disabled:text-neutral-200  disabled:border-neutral-50 disabled:hover:bg-neutral-50 dark:text-primary-200 dark:border-primary-200 dark:hover:bg-neutral-800 dark:disabled:border-neutral-200 dark:disabled:text-neutral-200',
        tertiary:
          'bg-none hover:bg-primary-50 focus:ring-4 focus:ring-primary-100 focus:text-primary-500 disabled:active:transform-none active:scale-[.9] disabled:cursor-not-allowed disabled:text-neutral-200 disabled:hover:bg-neutral-50 dark:hover:bg-neutral-800 dark:focus:text-primary-100',
        danger:
          'bg-danger-500 hover:bg-danger-600 text-neutral-0 focus:ring-4 focus:ring-danger-100 disabled:active:transform-none active:scale-[.9] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed',
        success:
          'bg-success-500 hover:bg-success-600 text-neutral-0 focus:ring-4 focus:ring-success-100 disabled:active:transform-none active:scale-[.9] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed',
      },
      size: {
        xs: 'h-[1.75rem] text-xs px-4',
        sm: 'h-[2rem] text-sm px-6',
        md: 'h-[2.5rem] text-md px-8',
        lg: 'h-[3rem] text-md px-11',
        xl: 'h-[3.5rem] text-lg px-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `relative select-none`,
        `${ButtonVariants({ variant, size })}`,
        `${className}`
      )}
      disabled={loading}
      {...buttonProps}>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <Spinner variant='neutral' />
        </div>
      )}
      <div
        className={clsx(`visible`, {
          invisible: loading,
          'opacity-0': loading,
        })}>
        {children}
      </div>
    </button>
  )
}

export default Button
