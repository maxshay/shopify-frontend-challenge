import { useContext } from "react";
import {
  Textarea,
  Button,
  Group,
  Box,
  Select,
  Text,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GTP3Context } from "../context/GPT3Context";
import { Link } from "react-router-dom";

const PromptForm = () => {
  const { sendPrompt, loading } = useContext(GTP3Context);
  const form = useForm({
    initialValues: {
      prompt: "",
      engine: "text-davinci-002",
    },

    validate: {
      prompt: (value) =>
        value.length < 256 ? null : "Character limit exceeded",
    },
  });

  return (
    <Box mt="sm">
      <form onSubmit={form.onSubmit((values) => sendPrompt(values))}>
        <Select
          label="Choose your engine"
          required
          placeholder="Pick one"
          data={[
            { value: "text-davinci-002", label: "Davinci 002" },
            { value: "text-curie-001", label: "Curie 001" },
            { value: "text-babbage-001", label: "Babbage 001" },
            { value: "text-ada-001", label: "Ada 001" },
          ]}
          {...form.getInputProps("engine")}
        />
        <Textarea
          placeholder="Ask GPT3 to finish something for you"
          required
          label="Enter Prompt"
          {...form.getInputProps("prompt")}
          minRows={4}
          mt="sm"
        />

        <Group position="right" mt="md">
          <Stack spacing="xs">
            <Button type="submit" loading={loading}>
              {loading === true ? "Submitting" : "Submit"}
            </Button>
            <Text size="sm">
              Need some inspo? <Link to="/dash/help">Click here</Link>
            </Text>
          </Stack>
        </Group>
      </form>
    </Box>
  );
};

export default PromptForm;
