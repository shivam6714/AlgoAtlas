import BubbleSort from "./sorting/bubble-sort";
import SelectionSort from "./sorting/selection-sort";

const topicRegistry = {
  "bubble-sort": BubbleSort,
  "selection-sort": SelectionSort,
};

export const getTopicAssets = (slug) => {
  return topicRegistry[slug] || null;
};
