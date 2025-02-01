import { menuItems } from '@/constants';
import MenuItems from '@/components/MenuItems';

export default function Navbar() {
  return (
      <ul className='hidden lg:block'>
        {
          menuItems.map((item, index) => (
            <MenuItems
              key={index}
              url={item.url}
              label={item.label}
            />
          ))
        }
      </ul>
  );
}
