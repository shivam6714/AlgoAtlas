import { getTopicAssets } from "../topics";

export const getCode = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.code || null;
};
