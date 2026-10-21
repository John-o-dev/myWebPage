import { useState } from "react";
import Image from "next/image";
import type { CertView } from "@/utils/certificates";
import styles from "./certificateImage.module.css";

/**
 * Mostra a imagem do certificado (`imagemUrl`). Se estiver vazia ou falhar ao carregar,
 * desenha um certificado ilustrativo com o nome do curso e da instituição.
 * Precisa estar dentro de um elemento com as variáveis --h1/--h2 (já definidas no card e na gaveta).
 */
export default function CertificateArt({ v }: { v: CertView }) {
  const [failed, setFailed] = useState(false);

  if (v.image && !failed) {
    return (
      <div className={styles.img_wrap}>
        <Image
          src={v.image}
          alt={`Certificado: ${v.title} (${v.inst})`}
          fill
          sizes="(max-width: 720px) 100vw, 420px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={styles.paper} role="img" aria-label={`Certificado: ${v.title} (${v.inst})`}>
      <span className={styles.p_seal}>{v.mono}</span>
      <span className={styles.p_kick}>CERTIFICADO DE CONCLUSÃO</span>
      <span className={styles.p_title}>{v.title}</span>
      <i className={styles.p_line} />
      <i className={`${styles.p_line} ${styles.s}`} />
      <span className={styles.p_sign}>{v.inst}</span>
      <i className={styles.paper_shine} />
    </div>
  );
}
