import { TagType } from "./Tag.type";

export type ProjectType = {
  title: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tags?: TagType[];
};
