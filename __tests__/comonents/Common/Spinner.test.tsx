import { Spinner } from '@/components/Common/Spinner'
import { render, screen } from '@testing-library/react'

describe('Spinner', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Spinner />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with default props', () => {
    render(<Spinner />)
    const spinner = document.querySelector('svg')
    expect(spinner).toHaveClass('animate-spin text-neutral-100')
    expect(spinner).toHaveAttribute('width', '24')
    expect(spinner).toHaveAttribute('height', '24')
  })

  it('renders with custom size', () => {
    render(<Spinner size={50} />)
    const spinner = document.querySelector('svg')
    expect(spinner).toHaveAttribute('width', '50')
    expect(spinner).toHaveAttribute('height', '50')
  })

  it('renders with custom variant', () => {
    render(<Spinner variant='danger' />)
    const spinner = document.querySelector('svg')
    const path = spinner?.querySelectorAll('path')[1]
    expect(path).toHaveClass('text-danger-500')
  })
})
