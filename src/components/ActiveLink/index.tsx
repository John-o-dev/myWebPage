import { useRouter } from 'next/router';
import Link from 'next/link';

type ActiveLinkProps = {
  href: string;
  activeClassName: string;
  classNameComponent: string;
  title: string;
};

export function ActiveLink({
  href,
  activeClassName,
  classNameComponent,
  title
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const childClassName = classNameComponent ?? '';
  const newClassName = `${childClassName} ${activeClassName ?? ''}`;
  const className = asPath === href ? newClassName.trim() : childClassName;

  return <Link href={href} className={className}>{title}</Link>;
}
