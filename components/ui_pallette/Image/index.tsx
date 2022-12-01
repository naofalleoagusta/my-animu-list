import { CSSProperties } from "react";
import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  blurDataURL?: string;
};

const Image = ({ src, alt, style, width, height, blurDataURL }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      loading="lazy"
      style={{
        height: "auto",
        width: "100%",
        objectFit: "cover",
        ...style,
      }}
      blurDataURL={blurDataURL}
      quality={100}
      placeholder="blur"
    />
  );
};

export default Image;
