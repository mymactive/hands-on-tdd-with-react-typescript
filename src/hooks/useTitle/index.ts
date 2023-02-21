import { useReducer } from "react";

type StripedTitle = {
  mode: "striped";
};

type AdoptedTitle = {
  mode: "adopted";
  text: string;
};

type Title = AdoptedTitle | StripedTitle;

type UseTitle = () => {
  title: Title;
  adopt: (text: string) => void;
  strip: () => void;
};

type AdoptAction = { type: "adopt"; text: string };
type StripAction = { type: "strip" };
type Action = AdoptAction | StripAction;
type AdoptInReducer = (text: string) => AdoptedTitle;
type StripInReducer = () => StripedTitle;
type Reducer = (title: Title, action: Action) => Title;

const attachInReducer: AdoptInReducer = (text) => ({
  mode: "adopted",
  text,
});
const detachInReducer: StripInReducer = () => ({ mode: "striped" });
const reducer: Reducer = (_, action) => {
  switch (action.type) {
    case "adopt":
      return attachInReducer(action.text);
    case "strip":
      return detachInReducer();
    default:
      throw new Error("invalid action");
  }
};

export const useTitle: UseTitle = () => {
  const [title, dispatch] = useReducer(reducer, { mode: "striped" });

  const attach = (text: string) => dispatch({ type: "adopt", text });

  const detach = () => dispatch({ type: "strip" });

  return { title: title, adopt: attach, strip: detach };
};
