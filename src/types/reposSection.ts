import { ReposProps } from "./repos";

export type ReposSectionProps = {
    title: string;
    section: string;
    repos: ReposProps[];
    itemsPerPage: number;

    openIndex: {
        section: string;
        index: number;
    } | null;

    setOpenIndex: React.Dispatch<
        React.SetStateAction<{
            section: string;
            index: number;
        } | null>
    >;

    className: string;
    classComponent: string;
};
