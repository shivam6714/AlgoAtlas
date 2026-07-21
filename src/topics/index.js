import BubbleSort from "./sorting/bubble-sort";

const topicRegistry = {
  "bubble-sort": BubbleSort,
};

export const getTopicAssets = (slug) => {
  return topicRegistry[slug] || null;
};
