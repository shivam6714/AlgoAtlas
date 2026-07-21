import { getTopicContent } from "../../topics";

const MDXContent = ({ slug }) => {
  const Content = getTopicContent(slug);

  if (!Content) {
    return (
      <p>
        Content for <strong>{slug}</strong> is coming soon.
      </p>
    );
  }

  return <Content />;
};

export default MDXContent;