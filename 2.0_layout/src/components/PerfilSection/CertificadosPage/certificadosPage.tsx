import CertificatesSection from "./CertificatesSection/certificatesSection";
import { certificates } from "@/lib/certificates";

export default function CertificadosPage() {
  return <CertificatesSection certificates={certificates} />;
}

// Como a lista é estática, não precisa de getStaticProps.
// Para usar só a seção dentro de outra página: <CertificatesSection id="certificados" showTimeline={false} />