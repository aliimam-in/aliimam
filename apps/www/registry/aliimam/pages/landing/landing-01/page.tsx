import { BentoSection } from "@/registry/aliimam/pages/landing/landing-01/components/bento-section"
import CTASection from "@/registry/aliimam/pages/landing/landing-01/components/cta-section"
import DocumentationSection from "@/registry/aliimam/pages/landing/landing-01/components/documentation-section"
import FAQSection from "@/registry/aliimam/pages/landing/landing-01/components/faq-section"
import { FeatureCards } from "@/registry/aliimam/pages/landing/landing-01/components/feature-cards"
import FooterSection from "@/registry/aliimam/pages/landing/landing-01/components/footer-section"
import { Header } from "@/registry/aliimam/pages/landing/landing-01/components/header"
import { HeroSection } from "@/registry/aliimam/pages/landing/landing-01/components/hero-section"
import { LogoSection } from "@/registry/aliimam/pages/landing/landing-01/components/logo-section"
import PricingSection from "@/registry/aliimam/pages/landing/landing-01/components/pricing-section"
import TestimonialsSection from "@/registry/aliimam/pages/landing/landing-01/components/testimonials-section"

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center justify-start">
        <div className="relative flex min-h-screen w-full max-w-7xl flex-col items-start justify-start">
          <div className="bg-muted absolute top-0 left-4 z-0 h-full w-px sm:left-6 md:left-8 lg:left-0"></div>

          <div className="bg-muted absolute top-0 right-4 z-0 h-full w-px sm:right-6 md:right-8 lg:right-0"></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden border-x sm:gap-6 md:gap-8">
            <Header />
            <HeroSection />
            <FeatureCards />
            <LogoSection />
            <BentoSection />
            <DocumentationSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <CTASection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
