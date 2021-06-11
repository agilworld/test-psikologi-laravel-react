import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import TrashedMessage from '@/Shared/TrashedMessage';

const Edit = () => {
  const { user, roles } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    password: user.password || '',
    owner: user.owner ? '1' : '0' || '0',
    role_id:user.role_id || null,

    // NOTE: When working with Laravel PUT/PATCH requests and FormData
    // you SHOULD send POST request and fake the PUT request like this.
    _method: 'PUT'
  });

  console.log(user)

  function handleSubmit(e) {
    e.preventDefault();
    post(route('users.update', user.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this user?')) {
      Inertia.delete(route('users.destroy', user.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this user?')) {
      Inertia.put(route('users.restore', user.id));
    }
  }

  return (
    <div>
      <Helmet title={`${data.first_name} ${data.last_name}`} />
      <div className="flex justify-start max-w-lg mb-8">
        <h1 className="text-3xl font-bold">
          <InertiaLink
            href={route('users')}
            className="text-green-600 hover:text-green-700"
          >
            Users
          </InertiaLink>
          <span className="mx-2 font-medium text-green-600">/</span>
          {data.first_name} {data.last_name}
        </h1>

      </div>
      {user.deleted_at && (
        <TrashedMessage onRestore={restore}>
          This user has been deleted.
        </TrashedMessage>
      )}
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-8 -mb-8 -mr-6">
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="First Name"
              name="first_name"
              errors={errors.first_name}
              value={data.first_name}
              onChange={e => setData('first_name', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Last Name"
              name="last_name"
              errors={errors.last_name}
              value={data.last_name}
              onChange={e => setData('last_name', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <SelectInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Owner"
              name="owner"
              errors={errors.owner}
              value={data.owner}
              onChange={e => setData('owner', e.target.value)}
            >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </SelectInput>

            <SelectInput
              className="w-full pb-8 pr-6 lg:w-1/2"
              label="Role"
              name="role_id"
              errors={errors.role_id}
              value={data.role_id}
              onChange={e => setData('role_id', e.target.value)}
            >
              {roles.map(role=><option value={role.id}>{role.name}</option>)}
            </SelectInput>

          </div>
          <div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
            {!user.deleted_at && (
              <DeleteButton onDelete={destroy}>Delete User</DeleteButton>
            )}
            <LoadingButton
              loading={processing}
              type="submit"
              className="ml-auto btn-indigo"
            >
              Update User
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Edit.layout = page => <Layout children={page} />;

export default Edit;
