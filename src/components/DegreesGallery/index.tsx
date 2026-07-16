import React, { useEffect, useMemo, useState } from 'react';

import styles from './degreesGallery.module.css';

import DetailCard from './DetailCard';
import Pagination from '../Pagination';
import ImageComponent from '../ImageComponent';
import ModalFullScreen from './DetailCard/ModalFullScreen';
import SkillList from './SkillList';

import useTranslation from '@/src/hooks/useTranslation';

import { useIsMobile } from '@/src/utils/isMobile';
import { useIsDesktop } from '@/src/utils/isDesktop';

import { skillType } from '@/src/types/certificates';

import mockCertificates from '@/src/lib/certificates';

import { LuSearch } from "react-icons/lu";

export default function DegreesGallery() {
  const certificates = mockCertificates;
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(certificates[0]?.id ?? null);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const className = "degreesGallery";

  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  const itemsPerPage = isMobile || isDesktop ? 3 : 6;
  const start = (page - 1) * itemsPerPage;

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
      ...(skills.listSkill ?? []), // "Use skills.listSkill; se ele for null ou undefined, use um array vazio ([])."
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
  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  const selected = filtered.find((certificate) => certificate.id === selectedId) ?? filtered[0] ?? null;

  // if (isMobile === null) return null; return null - implementar um loader ou fallback

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
              // MOBILE
              isMobile ? (
                currentCertificates.map((certificate) => {
                  return (
                    <div className={styles.itemCard} key={certificate.id}>
                      <section>
                        <h3 className={styles.itemTitle}>
                          {certificate.title}
                        </h3>
                        <p className={styles.detailInstitutionName}>
                          {certificate.educationalInstitution}
                        </p>
                      </section>

                      <section
                        className={styles.containerImageDescription}
                        onClick={() => setIsOpen(true)}>
                        <div
                          className={styles.itemImage}
                          onClick={() => {
                            setSelectedId(certificate.id);
                          }}>
                          <ImageComponent
                            index={certificate.id}
                            imageUrl={certificate.imageUrl}
                            alt={certificate.title}
                            typeDefaultImage="component" />
                        </div>
                        <div className={styles.contentTexts}>
                          <p>{certificate.description}</p>
                        </div>
                      </section>

                      <SkillList skills={certificate.skills} />

                      <div
                        className={styles.moreInfoTitle}
                        onClick={() => setIsOpen(true)}>
                        <span className={styles.textWrapper}>Abrir Modal</span>
                      </div>

                      {isOpen && (
                        <ModalFullScreen
                          onClose={() => setIsOpen(false)}
                          certificate={certificate}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                // DESKTOP
                currentCertificates.map((certificate) => {
                  return (
                    <div className={styles.itemCard} key={certificate.id}>
                      <div
                        className={styles.itemImage}
                        onClick={() => {
                          setSelectedId(certificate.id);
                        }}>
                        <ImageComponent
                          index={certificate.id}
                          imageUrl={certificate.imageUrl}
                          alt={certificate.title}
                          typeDefaultImage="component" />
                      </div>
                      <h3 className={styles.itemTitle}>{certificate.title}</h3>
                    </div>
                  );
                })
              ))}
          </div>

        </div>

        {/* aside card */}
        {!isMobile && (
          <aside className={styles.detailCard}>
            {selected ? (
              <DetailCard certificate={selected} />
            ) : (
              <div className={styles.empty}>
                Nenhum certificado encontrado.
              </div>
            )}
          </aside>
        )}

      </div>

      {/* Paginação */}
      {(filtered.length !== 0) ?
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
        : ""
      }
    </section>
  );
}
