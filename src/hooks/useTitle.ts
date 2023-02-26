import { useState } from "react";

type StrippedTitle = {
  mode: "stripped";
};

type AdoptedTitle = {
  mode: "adopted";
  text: string;
};

type Title = AdoptedTitle | StrippedTitle;

type UseTitle = () => {
  title: Title;
  adopt: (text: string) => void;
  strip: () => void;
};

// TODO: useReducerの`reducer`を型で表現しましょう

export const useTitle: UseTitle = () => {
  // TODO: useReducerを使って、リファクタリングしましょう
  const [title, setTitle] = useState<Title>({ mode: "stripped" });
  const strip = () => {
    setTitle({ mode: "stripped" });
  };
  const adopt = (text: string) => {
    setTitle({ mode: "adopted", text });
  };

  return { title, strip, adopt };
};
