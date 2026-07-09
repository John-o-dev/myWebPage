import { useState } from "react";
import styles from "./imageComponent.module.css";
import { Certificate } from "@/src/types/certificates";
import { LuEyeOff } from "react-icons/lu";

type ImageComponentProps = {
  onClick?: () => void | null;
  className?: string;
  certificate: Certificate;
}

export default function ImageComponent({
  onClick,
  className,
  certificate
}: ImageComponentProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const hasImageError = imageErrors[certificate.id];

  return (
    <div className={styles.imageArea}>
      {!certificate.imageUrl || hasImageError ? (
        <LuEyeOff size={32} />
      ) : (
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className={className}
          onClick={onClick}
          onError={() =>
            setImageErrors(prev => ({
              ...prev,
              [certificate.id]: true,
            }))
          }
        />
      )}
    </div>
  )
}