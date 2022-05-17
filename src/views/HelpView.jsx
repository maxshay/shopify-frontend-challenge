import React from "react";
import { Title } from "@mantine/core";

import ClipboardPaper from "../components/ClipboardPaper";
const suggestions = [
  "Write a tagline for an ice cream shop.",
  "Brainstorm some ideas combining VR and fitness:",
  "Translate this into French, Spanish and Japanese:\n\nWhat rooms do you have available?",
  'Classify the sentiment in these tweets:\n\n1. "I can\'t stand homework"\n2. "This sucks. I\'m bored 😠"\n3. "I can\'t wait for Halloween!!!"\n4. "My cat is adorable ❤️❤️"\n5. "I hate chocolate"\n\nTweet sentiment ratings:',
  "Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nStar Wars:",
];

const HelpView = () => {
  return (
    <>
      <Title order={3}>
        You can click on any one of these suggested texts to copy them to your
        clipboard
      </Title>
      <Title order={5}>Then paste them into the text prompt</Title>
      {suggestions.map((s, i) => (
        <ClipboardPaper key={i} suggestion={s} />
      ))}
    </>
  );
};

export default HelpView;
