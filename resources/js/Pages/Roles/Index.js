import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import Icon from '@/Shared/Icon';
import SearchFilter from '@/Shared/SearchFilter';
import Pagination from '@/Shared/Pagination';
import { isEmpty, capitalize } from "lodash"

const Index = () => {
  const { roles } = usePage().props;
  const {
    data,
    meta: { links }
  } = roles;
  console.log(data)
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Roles</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
        <InertiaLink
          className="btn-indigo focus:outline-none"
          href={route('roles.create')}
        >
          <span>Create</span>
          <span className="hidden md:inline"> Role</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Name</th>
              <th className="px-6 pt-5 pb-4">Function</th>

            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, functions, hide, deleted_at }) => {
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t">
                    {hide=="1" ? <span className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">{name}</span>:<InertiaLink
                      href={route('roles.edit', id)}
                      className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                    >
                      {name}
                    </InertiaLink>}
                  </td>
                  <td className="border-t">
                    {hide=="1" && "All Capabilites"}
                    {!isEmpty(functions) && functions.map((fuc,idx)=><span>{fuc.menu} <strong>{capitalize(fuc.capability)}</strong>{functions.length-1>idx?", ":""}</span>
                    )}
                  </td>

                  <td className="w-px border-t">
                    {hide=="0" && <InertiaLink
                      tabIndex="-1"
                      href={route('roles.edit', id)}
                      className="flex items-center px-4 focus:outline-none"
                    >
                      <Icon
                        name="cheveron-right"
                        className="block w-6 h-6 text-gray-400 fill-current"
                      />
                    </InertiaLink>}
                  </td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No roles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination links={links} />
    </div>
  );
};

Index.layout = page => <Layout title="Roles" children={page} />;

export default Index;
