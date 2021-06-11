import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton';
import DeleteButton from '@/Shared/DeleteButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import { findIndex, isEmpty, forEach, capitalize } from 'lodash';

const Edit = () => {
  const { role, roles } = usePage().props;
  const { data, setData, errors, put, processing } = useForm({
    name: role.name,
    functions:role.functions,
    _method: 'PUT'
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route('roles.update', role.id));
  }

  const onCheck = (id) => {
    let ac = findIndex( data.functions, (d)=>id==d)

    let dt = data.functions
    if( ac > -1 ) {
      dt.splice(ac, 1)
      setData('functions',dt)
    } else {
      dt.push(id)
      setData('functions', dt)
    }


  }

  const iteratee = () => {
    let a = []
    forEach(roles, (value,id) => {
      a.push({name:id,options:value})
    } )

    return a

  }

  function destroy() {
    if (confirm('Are you sure you want to delete this user?')) {
      Inertia.delete(route('roles.destroy', role.id));
    }
  }

  console.log(role)

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <InertiaLink
          href={route('roles')}
          className="text-green-600 hover:text-green-700"
        >
          Roles
        </InertiaLink>
        <span className="font-medium text-green-600"> /</span> Edit
      </h1>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap p-8 -mb-8 -mr-6">
            <TextInput
              className="w-full pb-4 pr-6 lg:w-1/2"
              label="Name"
              name="name"
              errors={errors.name}
              value={data.name}
              onChange={e => setData('name', e.target.value)}
            />
          </div>
          <div className="pb-8 pl-7">
          <h5 className="font-semibold text-xl" >Select capabilities:</h5>
            {!isEmpty(iteratee()) && iteratee().map((opts)=><div key={opts.name} className="flex p-3">
                <h4 className="font-semibold mt-2 text-md w-56">{opts.name}</h4>
                {opts.options.map(opt=><div key={opt.id} className="p-2">
                  <label htmlFor={`check-${opt.id}`} className="flex items-center space-x-2">
                    <input type="checkbox" id={`check-${opt.id}`} checked={data.functions.includes(opt.id)} onChange={()=>onCheck(opt.id)} value={opt.id} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none" />
                    <span className="text-gray-700 font-medium">{capitalize(opt.cap)}</span>
                  </label>
                </div>)}

            </div>)}
          </div>
          <div className="flex items-center justify-between px-8 py-4 bg-gray-100 border-t border-gray-200">
            {role.hide == "0" && <DeleteButton onDelete={destroy}>Delete Role</DeleteButton>}
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-indigo"
            >
              Update Role
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Edit.layout = page => <Layout title="Edit Role" children={page} />;

export default Edit;
