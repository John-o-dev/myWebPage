import { useState } from 'react'
import styles from './styles.module.css'
import Tooltip from '../../Tooltip'
import { iconsProps } from '@/src/types/icons';
import { getTechIcon } from '../../DegreesGallery/DetailCard/GetTechIcon'

type Props = {
    icon: iconsProps;
};

export default function RenderIcons({ icon }: Props) {
    const [hovered, setHovered] = useState(false);
    const { Icon, found } = getTechIcon(icon.iconName);

    return (
        <div
            className={styles.skills_icons}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Icon
                size={32}
                color={found ? undefined : "#000000"}
            />
            <Tooltip visible={hovered}>{icon.label}</Tooltip>
        </div>
    )
}
