import React, { useState } from "react";
import styles from "./detailsCertificate.module.css";
import { Certificate } from "@/src/types/certificates";
import { LuArrowUp, LuArrowDown, LuCalendarCheck, LuTimer, LuChartLine, LuCodeXml, LuDownload } from "react-icons/lu";
import ButtonBox from "@/src/components/ButtonBox";

type DetailsCertificateProps = {
	onClick: () => void | null;
	certificate: Certificate;
}

export default function DetailsCertificate({ 
	onClick, 
	certificate 
}: DetailsCertificateProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageArea}>
				<img
					src={certificate.certificateInfo.imageUrl}
					alt={certificate.title}
					onClick={onClick} />
				<button
					className={`${styles.detailButton} ${expanded ? styles.detailButtonExpanded : ""}`}
					onClick={() => setExpanded(!expanded)}>
					{expanded ? <LuArrowUp className={styles.colorGray} /> : <LuArrowDown className={styles.colorGray} />}
					<span className={styles.detailText}>Ver Detalhes</span>
				</button>
			</div>

			{expanded && (
				<div className={styles.detailsCard}>
					<div className={styles.row}>
						<LuTimer className={styles.colorGray} />
						<div className={styles.label}><strong>Carga horária:</strong> {certificate.certificateInfo.duration}</div>
					</div>

					<div className={styles.row}>
						<LuCalendarCheck className={styles.colorGray} />
						<div className={styles.label}><strong>Data de conclusão:</strong> {certificate.certificateInfo.date}</div>
					</div>

					<div className={styles.row}>
						<LuChartLine className={styles.colorGray} />
						<div className={styles.label}><strong>Nível:</strong> {certificate.certificateInfo.level}</div>
					</div>

					<div className={styles.row}>
						<LuCodeXml className={styles.colorGray} />
						<div className={styles.label}><strong>Tecnologias abordadas:</strong>
							<div className={styles.techList}>{certificate.certificateInfo.technologies?.join(", ")}</div>
						</div>
					</div>

					<div className={styles.row}>
						<ButtonBox href={certificate.certificateInfo.docPDF} className={styles.downloadButton} download>
							Download PDF
						</ButtonBox>
					</div>
				</div>
			)}
		</div>
	);
}
