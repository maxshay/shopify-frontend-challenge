const getResponse = async (prompt) => {
  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const response = await fetch(
    "https://api.openai.com/v1/engines/text-curie-001/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    }
  ).then((response) => response.json());

  if (response.error) {
    console.log(response.error);
    return [null, response.error.message];
  } else {
    return [response, null];
  }
};

class MyGPT3Api {
  completeResponse = (prompt) => getResponse(prompt);
}

const myGPT3Api = new MyGPT3Api();

export { myGPT3Api };
