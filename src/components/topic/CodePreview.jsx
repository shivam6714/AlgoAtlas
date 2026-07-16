import Card from "../ui/Card";
import Button from "../ui/Button";
import { Copy } from "lucide-react";

const sampleCode = `void bubbleSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`;

const CodePreview = () => {
  return (
    <Card className="code-preview">
      <div className="code-preview__header">
        <span className="code-language">C++</span>

        <Button
          variant="ghost"
          icon={<Copy size={16} />}
        >
          Copy
        </Button>
      </div>

      <pre>
        <code>{sampleCode}</code>
      </pre>
    </Card>
  );
};

export default CodePreview;