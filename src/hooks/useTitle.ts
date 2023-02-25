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

export const useTitle: UseTitle = () => {
  const [title, setTitle] = useState<Title>({ mode: "stripped" });
  // TODO: 一息で実装しましょう
  const strip = () => {};
  const adopt = (text: string) => {
    setTitle({ mode: "adopted", text });
  };

  return { title, strip, adopt };
};
