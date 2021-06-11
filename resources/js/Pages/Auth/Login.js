import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';

export default () => {
  const LogoUrl = 'https://www.ibunda.id/tespsikologi/assets/img/icon/ibunda.png';
  const { data, setData, errors, post, processing } = useForm({
    email: 'soekarno@indonesia.com',
    password: '12345678',
    remember: true
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-white">
      <Helmet title="Login" />
      <div className="w-full max-w-md">

        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-6">
            <div className="text-center mx-auto">
              <img src={LogoUrl} className="text-white mx-auto fill-current" />
            </div>
            <h1 className="text-lg font-bold text-center">User Administration</h1>

            <div className="w-24 mx-auto mt-6 border-b-2" />
            <TextInput
              className="mt-10"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            <TextInput
              className="mt-6"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            <label
              className="flex items-center mt-6 select-none"
              htmlFor="remember"
            >
              <input
                name="remember"
                id="remember"
                className="mr-1"
                type="checkbox"
                checked={data.remember}
                onChange={e => setData('remember', e.target.checked)}
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>

          <div className="items-center justify-between px-10 mb-6 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              loading={processing}
              type="submit"
              style={{display:"block"}}
              className="w-full text-center mx-auto btn-indigo"
            >
              Log In
            </LoadingButton>
          </div>

        </form>
      </div>
    </div>
  );
};
