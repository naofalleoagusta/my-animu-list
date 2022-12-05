import { MetaTagsType } from "../types";

enum MetaPropsEnum {
  TITLE = "title",
  DESCRIPTION = "description",
  URL = "url",
  IMAGE = "image",
}

type GenerateMetaTagType = {
  [key in MetaPropsEnum]: string;
};

const generateMetaTag = (prop: GenerateMetaTagType): MetaTagsType => {
  const res: MetaTagsType = {};
  Object.keys(MetaPropsEnum).forEach((metaProp) => {
    const keyValue = MetaPropsEnum[metaProp as keyof typeof MetaPropsEnum];
    const keyMetaTag = keyValue as keyof GenerateMetaTagType;
    res[`og:${keyValue}`] = prop[keyMetaTag];
    res[`twitter:${keyValue}`] = prop[keyMetaTag];
  });
  return res;
};

export default generateMetaTag;
