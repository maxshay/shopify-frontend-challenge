import React from "react";
import { Text } from "@mantine/core";
import ResponseItem from "./ResponseItem";

const HistoryList = ({ items }) => {
  if (!items || items.length < 1) return <Text>Nothing Yet</Text>;

  const list = items.map((item) => (
    <ResponseItem key={item.id} response={item} />
  ));

  return <>{list}</>;
};

export default HistoryList;
