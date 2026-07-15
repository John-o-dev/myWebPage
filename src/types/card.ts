import type { Dispatch, SetStateAction } from "react";
import { ReposProps } from "@/src/types/repos";

export type OpenIndex = {
    section: string;
    index: number;
};

export type CardProps = {
    index: number;
    section: string;
    repo: ReposProps;
    openIndex: OpenIndex | null;
    setOpenIndex: Dispatch<SetStateAction<OpenIndex | null>>;
    className: string;
    classComponent: string;
};