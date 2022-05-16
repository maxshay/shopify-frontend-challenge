import React from "react";
import { Paper, Grid, Text } from "@mantine/core";

const ResponseItem = ({ response }) => {
  return (
    <Paper shadow="xs" p="md" mt="md">
      <Grid>
        <Grid.Col span={3}>
          <Text weight={700}>Prompt:</Text>
        </Grid.Col>
        <Grid.Col span={9}>
          <Text>{response.prompt}</Text>
        </Grid.Col>
      </Grid>
      <div
        style={{ borderBottom: "1px solid #c3c3c3", margin: "1rem 0" }}
      ></div>
      <Grid>
        <Grid.Col span={3}>
          <Text>Response:</Text>
        </Grid.Col>

        <Grid.Col span={9}>
          <pre
            style={{
              marginTop: 0,
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <Text>{response.response.trim()}</Text>
          </pre>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default ResponseItem;
