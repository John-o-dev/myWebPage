import { useState } from "react";
import styles from "./imageComponent.module.css";
import { Certificate } from "@/src/types/certificates";
import { LuEyeOff } from "react-icons/lu";

type ImageComponentProps = {
  index: number;
  imageUrl: string;
  alt: string;
  onClick?: () => void | null;
  className?: string;
  typeDefaultImage?: string;
}

export default function ImageComponent({
  index,
  imageUrl,
  alt,
  onClick,
  className,
  typeDefaultImage
}: ImageComponentProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  // const hasImageError = imageErrors[certificate.id];
  const hasImageError = (imageIdentifier: number) => {
    return !!imageErrors[imageIdentifier];
  }

  return (
    <div className={styles.imageArea}>
      {!imageUrl || hasImageError(index) ? (
        typeDefaultImage === "component" ? (
          <LuEyeOff size={32} />
        ) : (
          <img
            src="/img/default-image-broke.png"
            alt="Error Image"
            className={className}
            loading="lazy"
            onClick={onClick}
          />
        )
      ) : (
        <img
          src={imageUrl}
          alt={alt}
          className={className}
          loading="lazy"
          onClick={onClick}
          onError={() =>
            setImageErrors(prev => ({
              ...prev,
              [index]: true,
            }))
          }
        />
      )}
    </div>
  )
}