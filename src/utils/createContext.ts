import { TContext } from "types";

export const createContext = (
    count: number | null,
    next: string | null,
    previous: string | null
  ): TContext => ({
    next: next === null ? null : Number(new URL(next).searchParams.get('page')),
    previous:
      previous === null
        ? null
        : Number(new URL(previous).searchParams.get('page')),
    count: count,
  });