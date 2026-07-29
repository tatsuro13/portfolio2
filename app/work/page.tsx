import type { Metadata } from "next";

import { client } from "@/libs/microcms";
import WorkShowcase from "./WorkShowcase";
import type { FeaturedWork, WorkItem } from "./work-types";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected work across B2B SaaS product engineering, TypeScript development, product design, and applied AI automation.",
  alternates: {
    canonical: "/work",
  },
};

export const revalidate = 3600;

const featuredDefinitions = [
  {
    id: "dlws0xqu58s8",
    label: "Applied AI · Project Lead",
    proof: "JPY 8.4M annual recurring cost reduction",
  },
  {
    id: "ifgicon3zy",
    label: "B2B SaaS · Product Engineering",
    proof: "Website creation and publishing workflow",
  },
  {
    id: "tu70w49zg",
    label: "B2B SaaS · Full-stack Engineering",
    proof: "Booking and customer-management workflow",
  },
] as const;

const getWorkPosts = async (): Promise<WorkItem[]> => {
  const data = await client.get<{ contents: WorkItem[] }>({
    endpoint: "works",
    queries: {
      fields: "id,title,description,thumbnail,stack",
      limit: 100,
      orders: "-publishedAt",
    },
  });

  return data.contents;
};

const getFeaturedWorks = (works: WorkItem[]): FeaturedWork[] => {
  return featuredDefinitions.flatMap((definition) => {
    const work = works.find((item) => item.id === definition.id);

    return work ? [{ ...work, ...definition }] : [];
  });
};

const WorkPage = async () => {
  const works = await getWorkPosts();
  const featuredWorks = getFeaturedWorks(works);

  return <WorkShowcase works={works} featuredWorks={featuredWorks} />;
};

export default WorkPage;
