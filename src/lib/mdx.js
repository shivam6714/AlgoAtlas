import { getTopicAssets } from "../topics";

export const getTopicContent = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.theory || null;
};
