import BubbleSort from "./sorting/bubble-sort";
import SelectionSort from "./sorting/selection-sort";
import InsertionSort from "./sorting/insertion-sort";
import MergeSort from "./sorting/merge-sort";
import QuickSort from "./sorting/quick-sort";

const topicRegistry = {
  "bubble-sort": BubbleSort,
  "selection-sort": SelectionSort,
  "insertion-sort": InsertionSort,
  "merge-sort": MergeSort,
  "quick-sort": QuickSort,
};

export const getTopicAssets = (slug) => {
  return topicRegistry[slug] || null;
};

export const getTopicContent = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.theory || null;
};

export const getCode = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.code || null;
};

export const getPractice = (slug) => {
  const assets = getTopicAssets(slug);
  return assets?.practice || [];
};
