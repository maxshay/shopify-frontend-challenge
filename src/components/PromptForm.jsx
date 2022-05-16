import { useContext } from "react";
import { Textarea, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { GTP3Context } from "../context/GPT3Context";

const PromptForm = () => {
  const { sendPrompt, loading } = useContext(GTP3Context);
  const form = useForm({
    initialValues: {
      prompt: "",
    },

    validate: {
      prompt: (value) =>
        value.length < 256 ? null : "Character limit exceeded",
    },
  });

  return (
    <Box mt="sm">
      <form onSubmit={form.onSubmit((values) => sendPrompt(values))}>
        <Textarea
          placeholder="Ask GPT3 to finish something for you"
          required
          label="Enter Prompt"
          {...form.getInputProps("prompt")}
          minRows={4}
        />

        <Group position="right" mt="md">
          <Button type="submit" loading={loading}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default PromptForm;
