import { useContext } from "react";
import { Paper, Text } from "@mantine/core";
import { GTP3Context } from "../context/GPT3Context";
import ResponseItem from "./ResponseItem";

const DisplayResponse = () => {
  const { responses, loading, error } = useContext(GTP3Context);

  if (loading) return <div></div>;

  if (error)
    return (
      <Paper shadow="xs" p="md" mt="md">
        <Text size="sm">🛑 Error: {error}</Text>
      </Paper>
    );
  if (!responses || responses?.length < 1)
    return (
      <Paper shadow="xs" p="md" mt="md">
        <Text>No Prompts</Text>
      </Paper>
    );

  return (
    <>
      {responses.map((r) => (
        <ResponseItem key={r.id} response={r} />
      ))}
    </>
  );
};

export default DisplayResponse;
