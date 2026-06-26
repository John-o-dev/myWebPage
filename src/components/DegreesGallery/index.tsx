import React, { useMemo, useState } from 'react';
import styles from './degreesGallery.module.css';
import { skillType } from '@/src/types/certificates';

import mockCertificates from '@/src/lib/certificates';
import DetailCard from './DetailCard';

import { LuSearch } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export default function DegreesGallery() {
  const certificates = mockCertificates;
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(certificates[0]?.id ?? null);
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return certificates;

    const lowerSearch = search.toLowerCase();

    return certificates.filter(({ title, educationalInstitution, skills }) => {
      return (
        title.toLowerCase().includes(lowerSearch) ||
        educationalInstitution.toLowerCase().includes(lowerSearch) ||
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

  const selected = filtered.find((certificate) => certificate.id === selectedId) ?? filtered[0] ?? null;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Certificados</h2>
        <div className={styles.searchBox}>
          <LuSearch />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftPanel}>
          <div className={styles.listHeader}>
            <span className={styles.listTitle}>Galeria de certificados</span>
          </div>
          <div className={styles.itemsGrid}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>Nenhum certificado encontrado</div>
            ) : (
              filtered.map((certificate) => {
                return (
                  <div className={styles.itemCard} key={certificate.id}>
                    <div
                      className={styles.itemImage}
                      onClick={() => {
                        setSelectedId(certificate.id);
                        setExpanded(false);
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
        </div>


        <aside className={styles.detailCard}>
          <DetailCard certificate={selected} />
        </aside>

      </div>
    </section>
  );
}
