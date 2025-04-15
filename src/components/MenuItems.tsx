import { MenuItemInterface } from '@/interfaces';
import Link from 'next/link';

export default function MenuItems(props: MenuItemInterface) {
  return (
    <li
      className='p-1 text-zinc-200 rounded-md transition-color
      duration-300 ease-in-out hover:text-zinc-400'
    >
      <Link href={props.url}>
      {props.label}
      </Link>
    </li>
  );
}
