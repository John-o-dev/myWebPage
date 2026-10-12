import Dock from "@/components/Dock/dock";
import Navbar from "@/components/Navbar/navbar";
import PerfilSection from "@/components/PerfilSection/perfilSection";
import FooterSection from "@/components/Footer/footerSection";

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <Dock />
      <PerfilSection />
      <FooterSection />
    </>
  )
}