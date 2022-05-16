import { Box, Title } from "@mantine/core";
import PromptForm from "../components/PromptForm";
import DisplayResponse from "../components/DisplayResponse";

const SearchView = () => {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Title>Search</Title>
      <PromptForm />
      <Title order={2}>Response</Title>
      <DisplayResponse />
    </Box>
  );
};

export default SearchView;
