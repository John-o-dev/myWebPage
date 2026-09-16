import { useEffect, useState } from "react";
import styles from "./imageComponent.module.css";
import Image from 'next/image'
import { LuEyeOff } from "react-icons/lu";

type ImageComponentProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void | null;
  className?: string;
  classNameError?: string;
  typeDefaultImage?: string;
}

export default function ImageComponent({
  imageUrl,
  alt,
  onClick,
  className,
  classNameError,
  typeDefaultImage
}: ImageComponentProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = !imageUrl || hasError;

  useEffect(() => {
    setHasError(false);
  }, [imageUrl]);

  return (
    <div
      className={`
      ${showFallback ? classNameError ?? "" : className ?? ""}
      ${styles.imageArea}`}
      onClick={onClick}>
      {showFallback ? (
        typeDefaultImage === "component" ? (
          <LuEyeOff size={32} />
        ) : (
          <Image
            src="/img/default-image-broke.png"
            width={500}
            height={500}
            alt="Error Image"
            loading="lazy"
          />
        )
      ) : (
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={alt}
          loading="lazy"
          onError={() =>
            setHasError(true)
          }
        />
      )}
    </ div>
  )
}
