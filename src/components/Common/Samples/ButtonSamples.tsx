import Button from '@/components/Common/Button'

const ButtonSamples = () => {
  const onClick = () => {
    console.log('Button Clicked')
  }

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-6 rounded border border-primary-100 p-4'>
        <h2>Button Samples</h2>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Button loading>Primary Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button variant='tertiary'>Tertiary Button</Button>
          <Button variant='danger'>Danger Button</Button>
          <Button variant='success'>Success Button</Button>
        </div>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Button variant='primary' className=''>
            Primary Button
          </Button>
          <Button variant='secondary' className='!rounded-md'>
            Secondary Button
          </Button>
          <Button variant='tertiary' className='!rounded-lg'>
            Tertiary Button
          </Button>
          <Button variant='danger' className='!rounded-xl'>
            Danger Button
          </Button>
          <Button variant='success' className='!rounded-full'>
            Success Button
          </Button>
        </div>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Button onClick={onClick} disabled>
            Primary Button
          </Button>
          <Button variant='secondary' onClick={onClick} disabled>
            Secondary Button
          </Button>
          <Button variant='tertiary' onClick={onClick} disabled>
            Tertiary Button
          </Button>
          <Button variant='danger' onClick={onClick} disabled>
            Danger Button
          </Button>
          <Button variant='success' onClick={onClick} disabled>
            Success Button
          </Button>
        </div>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Button variant='primary' size='xs'>
            Primary Button
          </Button>
          <Button variant='secondary' size='sm'>
            Secondary Button
          </Button>
          <Button variant='tertiary' size='md'>
            Tertiary Button
          </Button>
          <Button variant='danger' size='lg'>
            Danger Button
          </Button>
          <Button variant='success' size='xl'>
            Success Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonSamples
