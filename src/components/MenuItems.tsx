import { MenuItemInterface } from '@/interfaces';
import Link from 'next/link';

export default function MenuItems(props: MenuItemInterface) {
  return (
    <li
      className='p-1 text-slate-900 rounded-md transition-color
      duration-300 ease-in-out hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent'
    >
      <Link href={props.url}>
      {props.label}
      </Link>
    </li>
  );
}
