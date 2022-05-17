import { useContext } from "react";
import { Title, Group, Button } from "@mantine/core";
import { GTP3Context } from "../context/GPT3Context";
import HistoryList from "../components/HistoryList";

const HistoryView = () => {
  const { history, clearHistory } = useContext(GTP3Context);
  return (
    <>
      <Group position="apart">
        <Title>Your History</Title>
        <Button variant="outline" onClick={clearHistory} compact>
          clear history
        </Button>
      </Group>
      <HistoryList items={history} />
    </>
  );
};

export default HistoryView;
