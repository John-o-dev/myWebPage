import { getTechIcon } from '../DegreesGallery/DetailCard/GetTechIcon';

export default function WhatsAppButton() {
  const { Icon, found } = getTechIcon("whatsapp");
  const telefone = "5511915967787";

  const mensagem =
    "Olá! Encontrei seu portfólio e gostaria de conversar sobre um projeto.";

  const whatsappUrl =
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      id="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <Icon size={16} />
    </a>
  );
}