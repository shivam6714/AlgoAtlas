import { getTopicAssets } from "../topics";

export const getPractice = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.practice || [];
};
