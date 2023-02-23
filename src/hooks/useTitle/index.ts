import { useReducer } from "react";

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

type AdoptAction = { type: "adopt"; text: string };
type StripAction = { type: "strip" };
type Action = AdoptAction | StripAction;
type AdoptInReducer = (text: string) => AdoptedTitle;
type StripInReducer = () => StrippedTitle;
type Reducer = (title: Title, action: Action) => Title;

const adoptInReducer: AdoptInReducer = (text) => ({
  mode: "adopted",
  text,
});
const stripInReducer: StripInReducer = () => ({ mode: "stripped" });
const reducer: Reducer = (_, action) => {
  switch (action.type) {
    case "adopt":
      return adoptInReducer(action.text);
    case "strip":
      return stripInReducer();
    default:
      throw new Error("invalid action");
  }
};

export const useTitle: UseTitle = () => {
  const [title, dispatch] = useReducer(reducer, { mode: "stripped" });

  const attach = (text: string) => dispatch({ type: "adopt", text });

  const detach = () => dispatch({ type: "strip" });

  return { title: title, adopt: attach, strip: detach };
};
