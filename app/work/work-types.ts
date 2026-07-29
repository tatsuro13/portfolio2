export type WorkItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  stack: string[];
};

export type FeaturedWork = WorkItem & {
  label: string;
  proof: string;
};
