import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import SearchFilter from '@/Shared/SearchFilter';

const Index = () => {
  const { transactions } = usePage().props;
  const data = []
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Transactions</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Transaction ID</th>
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4" colSpan="2">
                Date Created
              </th>
            </tr>
          </thead>
          <tbody>

            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No transaction found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Index.layout = page => <Layout title="Finance" children={page} />;

export default Index;
