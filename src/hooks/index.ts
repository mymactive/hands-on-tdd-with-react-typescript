type DetachedTag = {
  mode: "detached";
};

type AttachedTag = {
  mode: "attached";
  name: string;
};

type Tag = DetachedTag | AttachedTag;

type UseTag = () => {
  tag: Tag;
  attach: (name: string) => void;
  detach: () => void;
};
