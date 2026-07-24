import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactContent } from '@/components/contact/ContactContent'
import { CTASection } from '@/components/marketing/CTASection'

export const metadata: Metadata = {
  title: 'Digital Contact — Get in touch with our team',
  description:
    'Contact Digital to learn how our platform helps teams automate workflows and improve operational visibility.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
      <CTASection />
    </>
  )
}
