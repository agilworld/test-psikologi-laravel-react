import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';

export default ({ className }) => {
  const app = document.getElementById('app');
  const page = JSON.parse(app.dataset.page)

  const hasCap = (menu, cap) => {
    if( page.props.auth.user.owner ) return true
    if( page.props.auth.roles.includes(`${menu}-${cap}`) ) {
      return true
    }
    return false
  }
  return (
    <div className={className}>
       <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />

        {hasCap('users', 'read') && <MainMenuItem text="Users" link="users" icon="users" />}
        {hasCap('roles', 'read') && <MainMenuItem text="Roles" link="roles" icon="users" />}
        {hasCap('customers', 'read') && <MainMenuItem text="Customers" link="customers" icon="customers" />}
        {hasCap('finance', 'read') && <MainMenuItem text="Finance" link="finances" icon="dollars" />}
        {hasCap('trnsaction', 'read') && <MainMenuItem text="Transactions" link="transactions" icon="dollars" />}

        <MainMenuItem text="Logout" link="logout" icon="logout" />
    </div>
  );
};
