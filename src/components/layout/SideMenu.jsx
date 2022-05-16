import { Link } from "react-router-dom";
import { Button, Stack, Title, Box } from "@mantine/core";

const Nav = () => {
  return (
    <Stack spacing="sm">
      <Box>
        <Stack spacing="xs">
          <Title order={6}>Links</Title>
          <Button variant="light" component={Link} to="/dash/search">
            Search
          </Button>
          <Button variant="light" component={Link} to="/dash/history">
            History
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Nav;
