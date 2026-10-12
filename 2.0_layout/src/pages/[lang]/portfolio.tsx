import Dock from "@/components/Dock/dock";
import Navbar from "@/components/Navbar/navbar";
import PortfolioSection from "@/components/PortfolioSection/portfolioSection";
import FooterSection from "@/components/Footer/footerSection";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <Dock />
      <PortfolioSection />
      <FooterSection />
    </>
  )
}