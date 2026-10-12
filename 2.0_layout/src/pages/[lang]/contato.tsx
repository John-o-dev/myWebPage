import Dock from "@/components/Dock/dock";
import Navbar from "@/components/Navbar/navbar";
import ContatoSection from "@/components/ContatoSection/contatoSection";
import FooterSection from "@/components/Footer/footerSection";

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <Dock />
      <ContatoSection />
      <FooterSection />
    </>
  )
}