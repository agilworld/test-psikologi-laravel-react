import React, {useState,useEffect} from 'react';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import { isEmpty, set } from 'lodash';

const Prompt = (props) => {
  const { data, setData, errors, hasErrors, post, processing } = useForm({
    email: '',
    first_name:'',
  });
  const [submit, setSubmit] = useState(false)

  useEffect(()=>{
    if( submit ) {
      if( ! hasErrors ) {
        props.setStep(5)
      }
    }
  },[submit])

  function handleSubmit(e) {
    e.preventDefault();
    post(route('front.store'));
    setTimeout(()=>{
      setSubmit(true)
    },2000)
  }

  const onBack = () => {
    props.setStep(0)
  }

  return (
    <div>
      <h6 className="sub-head font-semibold text-lg mt-4">Email</h6>
      <p className="text-left mb-4">Isi dengan email aktif yang kamu gunakan</p>

      <form onSubmit={handleSubmit}>

        <TextInput
            className="w-full"
            placeholder="Nama Anda"
            name="first_name"
            errors={errors.first_name}
            value={data.first_name}
            onChange={e => setData("first_name", e.target.value)}
          />

        <TextInput
            className="w-full"
            placeholder="Ketik Alamat Email"
            name="email"
            errors={errors.email}
            value={data.email}
            onChange={e => setData("email", e.target.value)}
          />

        <div className="grid grid-cols-6 gap-4">
          <div class="col-start-1 col-end-3">
              <Button onClick={onBack} width="w-full">Kembali</Button>
          </div>

          <div class="col-end-7 col-span-2">
              <LoadingButton className={`bg-green-600 mt-4 w-full text-white text-center p-4 mx-auto font-semibold
              hover:border-solid
              hover:border-2
              hover:border-green-600
              hover:text-black
              hover:bg-transparent`} loading={processing}
              type="submit">Lanjut</LoadingButton>
          </div>
        </div>
      </form>

    </div>
  );
};


export default Prompt;
