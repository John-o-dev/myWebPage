import React, { useState } from "react";
import styles from "./detailsCertificate.module.css";
import { Certificate } from "@/src/types/certificates";
import { LuArrowUp, LuArrowDown, LuCalendarCheck, LuTimer, LuTrendingUp, LuCode } from "react-icons/lu";
import ButtonBox from "@/src/components/ButtonBox";
import useTranslation from "@/src/hooks/useTranslation";
import ImageComponent from "../../ImageComponent";

type DetailsCertificateProps = {
	onClick?: () => void | null;
	certificate: Certificate;
}

export default function DetailsCertificate({
	onClick,
	certificate
}: DetailsCertificateProps) {
	const [expanded, setExpanded] = useState(false);
	const { t } = useTranslation();
	const className = "degreesGallery";
	const classComponent = "details_certificate";

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageArea}>
				
				<ImageComponent onClick={onClick} certificate={certificate} />

				<button
					className={`${styles.detailButton} ${expanded ? styles.detailButtonExpanded : ""}`}
					onClick={() => setExpanded(!expanded)}>
					{expanded ? <LuArrowUp className={styles.colorGray} /> : <LuArrowDown className={styles.colorGray} />}
					<span className={styles.detailText}>{t(className, `${classComponent}_expand`)}</span>
				</button>
			</div>

			{expanded && (
				<div className={styles.detailsCard}>

					{certificate.certificateInfo.duration && (
						<div className={styles.row}>
							<LuTimer className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_duration`)}</strong> 
								{ certificate.certificateInfo.duration }
							</div>
						</div>
					)}

					{certificate.certificateInfo.date && (
						<div className={styles.row}>
							<LuCalendarCheck className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_date`)}</strong> 
								{ certificate.certificateInfo.date }
							</div>
						</div>
					)}

					{certificate.certificateInfo.level && (
						<div className={styles.row}>
							<LuTrendingUp className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_level`)}</strong> 
								{ certificate.certificateInfo.level }
							</div>
						</div>
					)}

					{certificate.certificateInfo.technologies?.length > 0 && (
						<div className={styles.row}>
							<LuCode className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_tech`)}</strong> 
								<div className={styles.techList}>
									{ certificate.certificateInfo.technologies?.join(", ") }
								</div>
							</div>
						</div>
					)}

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
