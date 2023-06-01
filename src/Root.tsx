import { Outlet } from 'react-router-dom';
import { Sidenav } from '@/components/Sidenav';

function Root() {
   return (
      <>
         <Sidenav />
         <Outlet context={{ darkMode: true }} />
      </>
   );
}

export default Root;
