import React from 'react';
import Helmet from 'react-helmet';
import MainMenu from '@/Shared/MainMenu';
import FlashMessages from '@/Shared/FlashMessages';
import Header from '@/Shared/Header';
import BottomHeader from '@/Shared/BottomHeader';

export default function Layout({ title, children }) {
  return (
    <div>
      <Helmet titleTemplate="%s | Ping CRM" title={title} />
      <div className="flex flex-col">
      <Header />
        <div className="flex flex-col h-screen">
          <div className="flex flex-grow overflow-hidden">
            {/* To reset scroll region (https://inertiajs.com/pages#scroll-regions) add `scroll-region="true"` to div below */}
            <div className="w-full md:p-2 md:flex-shrink-0 mx-auto md:w-2/5 md:justify-center">
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
