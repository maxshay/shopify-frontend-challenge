import styles from "../styles/ClipboardPaper.module.scss";
import { Paper, Text, Box } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const ClipboardPaper = ({ suggestion }) => {
  const clipboard = useClipboard({ timeout: 500 });
  return (
    <Box
      sx={() => ({
        cursor: "pointer",
      })}
      onClick={() => clipboard.copy(suggestion)}
    >
      <Paper shadow="xs" p="md" mt="md" style={{ position: "relative" }}>
        <pre
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <Text>{suggestion}</Text>
        </pre>
        {clipboard.copied ? (
          <div className={styles.Overlay}>
            <Text>Copied!</Text>
          </div>
        ) : null}
      </Paper>
    </Box>
  );
};

export default ClipboardPaper;
