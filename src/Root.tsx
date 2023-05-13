import { Outlet } from 'react-router-dom';

function Root() {
   return (
      <>
         <Outlet context={{ darkMode: true }} />
      </>
   );
}

export default Root;
