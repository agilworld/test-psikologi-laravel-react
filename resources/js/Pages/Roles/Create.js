import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import { findIndex, isEmpty, forEach, capitalize } from 'lodash';

const Create = () => {
  const { roles } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    name: '',
    functions:[]
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('roles.store'));
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
    console.log(a)
    return a

  }


  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        <InertiaLink
          href={route('roles')}
          className="text-green-600 hover:text-green-700"
        >
          Roles
        </InertiaLink>
        <span className="font-medium text-green-600"> /</span> Create
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
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              className="btn-indigo"
            >
              Create New Role
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Create Role" children={page} />;

export default Create;
