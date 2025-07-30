import styles from './tooltip.module.css'

type TooltipProps = {
  children: React.ReactNode;
  visible?: boolean;
};

export default function Tooltip({ children, visible }: TooltipProps) {
  return (
    <div
    className={`${styles.tooltip} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
}
