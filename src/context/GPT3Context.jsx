import { createContext, useState, useEffect } from "react";
import { myGPT3Api } from "../utils/api";
const GTP3Context = createContext();

const localStorageKey = `gpt3_response_history`;
const isBrowser = typeof window !== `undefined`;
const defaultItems = [];

function GTP3ContextProvider(props) {
  const [response, setResponse] = useState();
  const [history, setHistory] = useState(defaultItems);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const clearHistory = () => {
    setHistory([]);
    localStorage.setItem(localStorageKey, JSON.stringify([]));
  };

  const updateHistory = (item) => {
    //local storage
    const itemsString = localStorage.getItem(localStorageKey);
    const items = JSON.parse(itemsString);
    if (items === null) {
      localStorage.setItem(localStorageKey, JSON.stringify([item]));
    } else {
      items.push(item);
      localStorage.setItem(localStorageKey, JSON.stringify(items));
    }

    //state
    setHistory((before) => {
      const temp = [...before];
      temp.push(item);
      return temp;
    });
  };

  const sendPrompt = async (values) => {
    setLoading(true);
    const [data, error] = await myGPT3Api.completeResponse(values.prompt);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      const newValue = {
        id: data.id,
        prompt: values.prompt,
        response: data.choices[0].text,
      };
      setResponse(newValue);
      updateHistory(newValue);
      // saveToHistory
      setLoading(false);
    }
  };
  useEffect(() => {
    const existingItems = isBrowser
      ? localStorage.getItem(localStorageKey)
      : null;

    if (existingItems && existingItems !== `null`) {
      setHistory(JSON.parse(existingItems));
    }
  }, []);

  const values = {
    response,
    sendPrompt,
    loading,
    history,
    clearHistory,
    error,
  };

  return (
    <GTP3Context.Provider value={values}>{props.children}</GTP3Context.Provider>
  );
}

export { GTP3Context, GTP3ContextProvider };
