"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Frame, Fallback } from "./index.styles";
import type { TImageWithFallbackProps } from "./index.types";

const ImageWithFallback = ({ src, alt, sizes }: TImageWithFallbackProps) => {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const t = useTranslations("common");

  return (
    <Frame>
      {src && src !== failedSource ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          onError={() => setFailedSource(src)}
        />
      ) : (
        <Fallback
          role="img"
          aria-label={t("imageUnavailableFor", { name: alt })}
        >
          <ImageOff size={32} aria-hidden="true" focusable="false" />
          <span>{t("imageUnavailable")}</span>
        </Fallback>
      )}
    </Frame>
  );
};

export default ImageWithFallback;
