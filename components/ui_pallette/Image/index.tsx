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

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const Image = ({ src, alt, style, width, height }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{
        height: "auto",
        width: "100%",
        objectFit: "cover",
        ...style,
      }}
      blurDataURL={rgbDataURL(220, 220, 220)}
      quality={100}
      placeholder="blur"
    />
  );
};

export default Image;
