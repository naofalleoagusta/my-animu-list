import { MetaTagsType } from "../types";

type GenerateMetaTagType = {
  description: string;
  url: string;
  image: string;
};

const metaProps = ["url", "description", "image"];

const generateMetaTag = (prop: GenerateMetaTagType): MetaTagsType => {
  const res: MetaTagsType = {};
  metaProps.forEach((metaProp) => {
    res[`og:${metaProp}`] = prop[metaProp as keyof GenerateMetaTagType];
    res[`twitter:${metaProp}`] = prop[metaProp as keyof GenerateMetaTagType];
  });
  return res;
};

export default generateMetaTag;
