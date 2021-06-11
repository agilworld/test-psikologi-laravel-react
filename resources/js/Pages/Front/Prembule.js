import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';

const Prembule = (props) => {
  const logoUrl = "https://www.ibunda.id/tespsikologi/assets/img/landing/mhst.png"
  const onStart = () => {
    props.setStep(1)
  }

  return (
    <div>
      <img src={logoUrl} className="mx-4" />
      <h1 className="head-intro text-3xl font-bold">Mental Health Test</h1>
      <p className="text-description mt-3">
      Mental Health Test membantu kamu mengetahui keyakinan dirimu dalam menghadapi situasi untuk berhasil mencapai hasil yang kamu inginkan.
      </p>
      <Button onClick={onStart} width={"w-full"}>Mulai</Button>
    </div>
  );
};


export default Prembule;
