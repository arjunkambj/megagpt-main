import { Card, CardBody } from "@heroui/card";

export default function UserMessage({ message }: { message: string }) {
  return (
    <Card className="bg-default-100  px-2 shadow-none">
      <CardBody className="flex w-auto">
        <p>{message}</p>
      </CardBody>
    </Card>
  );
}
