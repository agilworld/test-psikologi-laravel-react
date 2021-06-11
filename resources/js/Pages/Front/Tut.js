

import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';

const Tut = (props) => {
  const onStart = () => {
    props.setStep(3)
  }

  const onBack = () => {
    props.setStep(1)
  }

  return (
    <div>
      <p className="text-center question-intro-description">Jawab pertanyaan berikut berdasarkan  <strong>seberapa sering</strong> kamu mengalami situasi tersebut dalam kurun waktu <strong>4 minggu</strong> terakhir. <br /> <strong>Pilih jawaban yang paling menggambarkan diri kamu,</strong> karena <span style={{color: '#ff0000'}}><strong>tidak ada jawaban yang benar dan salah</strong></span>
      </p>
      <div className="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-3">
            <Button onClick={onBack} width="w-full">Kembali</Button>
        </div>
        <div class="col-end-7 col-span-2">
            <Button onClick={onStart} width="w-full">Lanjut</Button>
        </div>
      </div>

    </div>
  );
};


export default Tut;
