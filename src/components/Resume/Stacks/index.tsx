import styles from './stacks.module.css'
import RenderIcons from '../RenderIcons';
import { iconsProps } from '@/src/types/icons';

type StacksProps = {
  icons: iconsProps[];
  symbol: string;
  title: string;
}

export default function Stacks({icons, symbol, title}: StacksProps) {

    return (
        <section className={styles.timeline}>

            <div className={styles.title_wrapper}>
                <span className="material-symbols-outlined">{symbol}</span>
                <h3>{title}</h3>
            </div>

            <ol className={styles.timeline_list}>
                {icons.map((icon, index) => (
                    <li className={styles.degree_timeline_item} key={index}>
                        <RenderIcons icon={icon} />
                    </li>
                ))}
            </ol>
        </section>
    )
}

// icons.symbol = auto_stories
// icons.h3 = Aprendizados em Andamento
