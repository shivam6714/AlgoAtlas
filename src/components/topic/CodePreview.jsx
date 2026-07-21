import Card from "../ui/Card";
import IconButton from "../ui/IconButton";
import { Copy } from "lucide-react";

const CodePreview = ({ code }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.cpp);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <Card className="code-preview">
      <div className="code-preview__header">
        <span className="code-language">C++</span>

        <IconButton
          icon={<Copy size={16} />}
          onClick={handleCopy}
        >
          Copy
        </IconButton>
      </div>

      <pre>
        <code>{code.cpp}</code>
      </pre>
    </Card>
  );
};

export default CodePreview;