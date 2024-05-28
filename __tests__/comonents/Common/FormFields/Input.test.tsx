import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '@/components/Common/FormFields'

describe('Input', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Input
        label='Test Label'
        helperText='Test Helper Text'
        error='Test Error'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders correctly', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('displays label correctly', () => {
    render(<Input label='Test Label' />)
    const labelElement = screen.getByText('Test Label')
    expect(labelElement).toBeInTheDocument()
  })

  it('displays helper text correctly', () => {
    render(<Input helperText='Test Helper Text' />)
    const helperTextElement = screen.getByText('Test Helper Text')
    expect(helperTextElement).toBeInTheDocument()
  })

  it('displays error message correctly', () => {
    render(<Input error='Test Error' />)
    const errorElement = screen.getByText('Test Error')
    expect(errorElement).toBeInTheDocument()
  })

  it('handles start adornment click correctly', () => {
    const handleClick = jest.fn()
    render(
      <Input startAdornment={{ adornment: 'Start', onClick: handleClick }} />
    )
    const startAdornmentElement = screen.getByLabelText('start-adornment btn')
    fireEvent.click(startAdornmentElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('handles end adornment click correctly', () => {
    const handleClick = jest.fn()
    render(<Input endAdornment={{ adornment: 'End', onClick: handleClick }} />)
    const endAdornmentElement = screen.getByLabelText('end-adornment btn')
    fireEvent.click(endAdornmentElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
