import { useParams } from "react-router-dom";
import { allTopics } from "../../data/allTopics";

const Topic = () => {

  const { slug } = useParams();

  const topic = allTopics.find(
    (item) => item.slug === slug
  );

  if (!topic) {

    return <h2>Topic Not Found</h2>;

  }

  return (

    <div>

      <h1>{topic.title}</h1>

      <p>{topic.description}</p>

      <br />

      <strong>Difficulty:</strong> {topic.difficulty}

      <br />

      <strong>Estimated Time:</strong> {topic.estimatedTime}

    </div>

  );

};

export default Topic;