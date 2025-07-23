import { useState } from 'react'
import styles from './styles.module.css'
import Tooltip from '../../Tooltip'
import { iconsProps } from '@/src/types/icons';

type Props = {
    icon: iconsProps;
};

export default function RenderIcons({ icon }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
        className={styles.skills_icons}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
            <img src={icon.src} alt={icon.alt} />
            <Tooltip visible={hovered}>{icon.label}</Tooltip>
        </div>
    )
}
