import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Pagination';

const Index = () => {
  const { customers } = usePage().props;
  const data = []

  const app = document.getElementById('app');
  const page = JSON.parse(app.dataset.page)

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      <div className="flex items-center justify-between mb-6">
        <h4 className={"font-bold text-xl"}>hello, {page.props.auth.user.name}</h4>
      </div>

    </div>
  );
};

Index.layout = page => <Layout title="Dashboard" children={page} />;

export default Index;
