import { useContext } from "react";
import { Paper, Text } from "@mantine/core";
import { GTP3Context } from "../context/GPT3Context";
import ResponseItem from "./ResponseItem";

const DisplayResponse = () => {
  const { response, loading } = useContext(GTP3Context);

  if (loading) return <div></div>;

  if (!response)
    return (
      <Paper shadow="xs" p="md" mt="md">
        <Text>No Prompts</Text>
      </Paper>
    );

  return <ResponseItem response={response} />;
};

export default DisplayResponse;
