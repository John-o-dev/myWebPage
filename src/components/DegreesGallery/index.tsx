import React, { useEffect, useMemo, useState } from 'react';
import styles from './degreesGallery.module.css';
import { skillType } from '@/src/types/certificates';

import mockCertificates from '@/src/lib/certificates';
import DetailCard from './DetailCard';

import { LuSearch } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import Pagination from '../Pagination';
import useTranslation from '@/src/hooks/useTranslation';

export default function DegreesGallery() {
  const certificates = mockCertificates;
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(certificates[0]?.id ?? null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const start = (page - 1) * itemsPerPage;

  const { t } = useTranslation();
  const className = "degreesGallery";
  const classComponent = "";

  const filtered = useMemo(() => {

    if (!search) return certificates;

    const lowerSearch = search.toLowerCase();

    return certificates.filter(({ title, educationalInstitution, skills }) => {
      return (
        title.toLowerCase().includes(lowerSearch)
        ||
        educationalInstitution.toLowerCase().includes(lowerSearch)
        ||
        getSkills(skills).some((skill) =>
          skill.toLowerCase().includes(lowerSearch)
        )
      );
    });
  }, [certificates, search]);

  function getSkills(skills: skillType): string[] {
    if (Array.isArray(skills)) {
      return skills;
    }

    return [
      ...(skills.technical ?? []), // "Use skills.technical; se ele for null ou undefined, use um array vazio ([])."
      ...(skills.technologies ?? []), // "Use skills.technologies; se ele for null ou undefined, use um array vazio ([])."
      ...(skills.behavioral ?? []), // "Use skills.behavioral; se ele for null ou undefined, use um array vazio ([])."
    ];
  }

  const currentCertificates =
    filtered.slice(
      start,
      start + itemsPerPage
    );

  const totalPages = Math.ceil(
    filtered.length / itemsPerPage
  );

  const selected = filtered.find((certificate) => certificate.id === selectedId) ?? filtered[0] ?? null;

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <section className={styles.container}>

      {/* header section*/}
      <div className={styles.header}>
        <h2 className={styles.title}>{t(className, `title`)}</h2>
        <div className={styles.searchBox}>
          <LuSearch />
          <input
            className={styles.searchInput}
            type="text"
            placeholder={t(className, `input_search`)}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* main content section */}
      <div className={styles.contentGrid}>
        <div className={styles.leftPanel}>

          {/* título */}
          <div className={styles.listHeader}>
            <span className={styles.listTitle}>{t(className, `title_header`)}</span>
          </div>

          {/* div que faz map e retorna todos os certificados */}
          <div className={styles.itemsGrid}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>{t(className, `_div_empty`)}</div>
            ) : (
              currentCertificates.map((certificate) => {
                return (
                  <div className={styles.itemCard} key={certificate.id}>
                    <div
                      className={styles.itemImage}
                      onClick={() => {
                        setSelectedId(certificate.id);
                      }}>
                      {certificate.imageUrl ? (
                        <img src={certificate.imageUrl} alt={certificate.title} />
                      ) : <LuEyeOff />}
                    </div>
                    <p className={styles.itemTitle}>{certificate.title}</p>
                  </div>
                );
              })
            )}
          </div>

          {(filtered.length !== 0) ?
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
            : ""
          }

        </div>

        {/* aside card */}
        <aside className={styles.detailCard}>
          {selected ? (
            <DetailCard certificate={selected} />
          ) : (
            <div className={styles.empty}>
              Nenhum certificado encontrado.
            </div>
          )}
        </aside>

      </div>
    </section>
  );
}
