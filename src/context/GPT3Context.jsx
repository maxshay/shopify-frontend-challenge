import { createContext, useState, useEffect } from "react";
import { myGPT3Api } from "../utils/api";
const GTP3Context = createContext();

const localStorageKey = `gpt3_response_history`;
const isBrowser = typeof window !== `undefined`;
const defaultItems = [];

function GTP3ContextProvider(props) {
  const [responses, setResponses] = useState([]);
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
      localStorage.setItem(localStorageKey, JSON.stringify([...item]));
    } else {
      items.push(...item);
      localStorage.setItem(localStorageKey, JSON.stringify(items));
    }

    //state
    setHistory((before) => {
      const temp = [...before];
      temp.push(...item);
      return temp;
    });
  };

  const sendPrompt = async (values) => {
    setResponses([]);
    setLoading(true);
    const [data, error] = await myGPT3Api.completeResponse(values.prompt);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      const newValues = [];
      data.choices.forEach((choice) => {
        newValues.push({
          id: `${data.id}${Math.floor(Math.random() * 100000)}`,
          prompt: values.prompt,
          response: choice.text,
        });
      });

      setResponses((currentResponses) => {
        const temp = [...currentResponses];
        temp.push(...newValues);
        return temp;
      });
      updateHistory(newValues);
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
    responses,
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
