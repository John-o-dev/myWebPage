import styles from './reposSection.module.css'
import { usePagination } from "@/src/hooks/usePagination";
import { ReposSectionProps } from "@/src/types/reposSection";
import Card from "../Card";
import Pagination from "@/src/components/Pagination";
import { ReposProps } from "@/src/types/repos";

export default function ReposSection({
  title,
  section,
  repos,
  itemsPerPage,
  openIndex,
  setOpenIndex,
  className,
  classComponent,
}: ReposSectionProps) {
  const {
    page,
    setPage,
    totalPages,
    totalItems,
    paginatedItems
  } = usePagination(
    repos,
    itemsPerPage
  );

  return (
    <section className={styles.repos}>

      <h3>{title}</h3>
      <ul className={styles.project_list}>
        {paginatedItems.map((repo, index) => (
          < Card
            key={index}
            index={index}
            section={section}
            repo={repo as ReposProps}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            className={className}
            classComponent={classComponent} />
        ))}
      </ul>

      {totalItems > itemsPerPage && (
          <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
          />
      )}
    </section>
  )
}
