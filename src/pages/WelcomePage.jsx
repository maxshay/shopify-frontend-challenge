import React from "react";
import { Link } from "react-router-dom";
import { Group, Title, Text, Box, Button, Anchor } from "@mantine/core";

const WelcomePage = () => {
  return (
    <Group position="center">
      <Box sx={() => ({ textAlign: "center" })} mt="lg">
        <Title>Welcome</Title>
        <Text mt="sm">
          This site was created with{" "}
          <Anchor href="https://reactjs.org/" target="_blank">
            React.js
          </Anchor>
          , and{" "}
          <Anchor href="https://mantine.dev/" target="_blank">
            Mantine.dev
          </Anchor>{" "}
          handled all the styling ❤️
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          component={Link}
          to="/dash"
          mt="xl"
        >
          Continue to Dashboard
        </Button>
      </Box>
    </Group>
  );
};

export default WelcomePage;
