import { sortingTopics } from "./sorting";

export const topicsByCategory = {
  sorting: sortingTopics,
};

const allTopics = Object.values(topicsByCategory).flat();

export const getTopicBySlug = (slug) => {
  return allTopics.find((topic) => topic.slug === slug) || null;
};