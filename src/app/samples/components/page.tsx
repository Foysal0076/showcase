'use client'

import ButtonSamples from '@/components/Common/Samples/ButtonSamples'
import SpinnerSamples from '@/components/Common/Samples/SpinnerSamples'

const SampleComponentsPage = () => {
  return (
    <div className='container pt-8 md:pt-10'>
      <h1 className='mb-6'>Components</h1>
      <div className='flex flex-col gap-6'>
        <ButtonSamples />
        <SpinnerSamples />
      </div>
    </div>
  )
}

export default SampleComponentsPage
