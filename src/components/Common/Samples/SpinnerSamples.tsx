import { Spinner } from '@/components/Common/Spinner'

const SpinnerSamples = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-6 rounded border border-primary-100 p-4'>
        <h2>Spinner Samples</h2>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Spinner variant='neutral' />
          <Spinner variant='primary' />
          <Spinner variant='secondary' />
          <Spinner variant='tertiary' />
          <Spinner variant='danger' />
          <Spinner variant='success' />
        </div>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <Spinner variant='neutral' size={12} />
          <Spinner variant='primary' size={16} />
          <Spinner variant='secondary' size={20} />
          <Spinner variant='tertiary' size={24} />
          <Spinner variant='danger' size={28} />
          <Spinner variant='success' size={32} />
        </div>
      </div>
    </div>
  )
}

export default SpinnerSamples
