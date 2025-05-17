import { Card, CardBody } from "@heroui/card";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function AssistantMessage({ message }: { message: string }) {
  return (
    <Card className="shadow-none bg-default-50 font-sm w-full">
      <CardBody>
        <ReactMarkdown
          // @ts-ignore - ReactMarkdown component type issues
          components={{
            code: (props) => {
              // @ts-ignore - Destructuring properties that might not exist in type
              const { className, inline, children, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                // @ts-ignore - Known type issue with style
                <SyntaxHighlighter
                  // @ts-ignore - Known type issue with style
                  PreTag="div"
                  customStyle={{
                    borderRadius: "5px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  language={match[1]}
                  style={dracula as any}
                  wrapLines={true}
                  wrapLongLines={true}
                  {...rest}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-800 px-1 py-0.5 rounded text-sm"
                  {...rest}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {message}
        </ReactMarkdown>
      </CardBody>
    </Card>
  );
}
