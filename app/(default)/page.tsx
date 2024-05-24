export const metadata = {
  title: 'Scouter - Language Learning',
  description: 'Help you complete immersive language learning.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
