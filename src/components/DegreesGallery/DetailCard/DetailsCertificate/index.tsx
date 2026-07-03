import React, { useState } from "react";
import Image from "next/image";
import styles from "./detailsCertificate.module.css";
import { Certificate } from "@/src/types/certificates";
import { LuArrowUp, LuArrowDown, LuCalendarCheck, LuTimer, LuChartLine, LuCodeXml, LuEyeOff, LuDownload } from "react-icons/lu";
import ButtonBox from "@/src/components/ButtonBox";
import useTranslation from "@/src/hooks/useTranslation";

type DetailsCertificateProps = {
	onClick: () => void | null;
	certificate: Certificate;
}

export default function DetailsCertificate({
	onClick,
	certificate
}: DetailsCertificateProps) {
	const [expanded, setExpanded] = useState(false);
	const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
	const hasImageError = imageErrors[certificate.id];
	const { t } = useTranslation();
	const className = "degreesGallery";
	const classComponent = "details_certificate";

	return (
		<div className={styles.wrapper}>
			<div className={styles.imageArea}>
				{!certificate.imageUrl || hasImageError ? (
					<LuEyeOff size={32} />
				) : (
					<Image
						src={certificate.imageUrl}
						alt={certificate.title}
						width={320}
						height={200}
						onClick={onClick}
						onError={() =>
							setImageErrors(prev => ({
								...prev,
								[certificate.id]: true,
							}))
						}
					/>
				)}
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
								{certificate.certificateInfo.duration}
							</div>
						</div>
					)}

					{certificate.certificateInfo.date && (
						<div className={styles.row}>
							<LuCalendarCheck className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_date`)}</strong>
								{certificate.certificateInfo.date}
							</div>
						</div>
					)}

					{certificate.certificateInfo.level && (
						<div className={styles.row}>
							<LuChartLine className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_level`)}</strong>
								{certificate.certificateInfo.level}
							</div>
						</div>
					)}

					{certificate.certificateInfo.technologies?.length > 0 && (
						<div className={styles.row}>
							<LuCodeXml className={styles.colorGray} />
							<div className={styles.label}>
								<strong>{t(className, `${classComponent}_tech`)}</strong>
								<div className={styles.techList}>
									{certificate.certificateInfo.technologies?.join(", ")}
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
