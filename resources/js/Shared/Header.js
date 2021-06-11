import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import MainMenu from '@/Shared/MainMenu';

export default () => {
  const LogoUrl = 'https://www.ibunda.id/tespsikologi/assets/img/icon/ibunda.png';

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="w-100 shadow-md">
      <div className="flex justify-between py-4 md:flex-shrink-0 mx-auto md:w-2/5">
        <InertiaLink className="mt-1" onClick={()=>window.location.reload()}>
          <img src={LogoUrl} className="text-white fill-current" width="120" height="28" />
        </InertiaLink>
        <div className="relative">
          <div className="mt-3">
            <InertiaLink className="mt-2" href="/login">
              Login
            </InertiaLink>
          </div>


        </div>
      </div>

    </div>
  );
};
