import Header from '@/src/components/layout/Header'
import Hero from '@/src/components/sections/Hero'
import QuietlyShaping from '@/src/components/sections/QuietlyShaping'
import EnduringWork from '@/src/components/sections/EnduringWork'
import Principles from '@/src/components/sections/Principles'
import BuildTogether from '@/src/components/sections/BuildTogether'
import Footer from '@/src/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuietlyShaping />
      <EnduringWork />
      <Principles />
      <BuildTogether />
      <Footer />
    </div>
  );
}
