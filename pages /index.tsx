import Head from 'next/head'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustSection from '@/components/TrustSection'
import TechStack from '@/components/TechStack'
import Results from '@/components/Results'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anovas | Web & App Development, Designing & Branding Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-anovas-dark">
        <Hero />
        <Services />
        <TrustSection />
        <TechStack />
        <Results />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
