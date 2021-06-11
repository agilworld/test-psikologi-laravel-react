import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';

const Prakata = (props) => {
  const onStart = () => {
    props.setStep(2)
  }

  const onBack = () => {
    props.setStep(0)
  }

  return (
    <div>
      <p className="text-left mb-4">1. Test ini TIDAK ditujukan untuk mendiagnosis gangguan psikologis, namun untuk membantu mengenali gambaran dirimu saat ini</p>
      <p className="text-left mb-4">2. Apabila kamu mengalami gejala yang mengganggu, segeralah berkonsultasi ke psikolog/psikiater untuk mendapatkan penanganan yang tepat.</p>

      <Button onClick={onStart} width="w-full">Ya, Setuju</Button>
      <Button onClick={onBack} width="w-full">Ya, Tidak Setuju</Button>
    </div>
  );
};


export default Prakata;
