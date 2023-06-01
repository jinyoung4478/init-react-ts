import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, IconButton, Typography } from '@material-tailwind/react';

export function Sidenav() {
   return (
      <aside
         className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}>
         <div className={`relative border-b`}>
            <Link to="/" className="flex items-center gap-4 py-6 px-8">
               <Typography variant="h6" color={'white'}>
                  123
               </Typography>
            </Link>
         </div>
      </aside>
   );
}
