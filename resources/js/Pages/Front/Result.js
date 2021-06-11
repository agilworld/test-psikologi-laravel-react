import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';

const Result = (props) => {
  const imgUrl = 'https://www.ibunda.id/tespsikologi/assets/img/normal.png'
  const onDownload = () => {

  }

  const onHelp = () => {

  }

  const onBack = () => {
    props.setStep(0)
  }

  return (
    <div>

      <div className="col-md-12 mx-auto" style={{textAlign:"center"}}>
          <img src={imgUrl} class="img-thumbnail" style={{border:"none"}} />
      </div>

      <h4 className="question-intro-head font-semibold text-xl">Yuk Cek Hasilnya!</h4>
      <p className="font-normal mt-2 mb-5" style={{lineHeight:'1.3'}}>
        Kamu sudah berhasil mengisi Test Kesehatan Online by Ibunda.id - Konseling Dengan Psikolog. Hasilnya menunjukan.
      </p>

      <div className="rekomendasi-area"><h5 className="mb-2">Yay, Kamu Baik-baik Saja!</h5> <p>Berdasarkan hasil screening kesehatan mental, saat ini kondisimu tergolong stabil. Jaga terus kesehatan mental kamu ya. Untuk mempertahankan kondisi tersebut, kamu bisa baca artikel dan tips bunda di <a href="https://www.ibunda.id" target="_blank" rel="noopener">www.ibunda.id</a>.</p></div>

      <Button onClick={onDownload} width="w-full">Download</Button>

      <div className="flex mt-2">
          <div className="flex-2 pr-2">
              <Button onClick={onHelp} width="w-full">Cari Bantuan</Button>
          </div>

          <div className="flex-1">
            <Button onClick={onBack} width="w-full">Kembali ke Beranda</Button>
          </div>
        </div>
    </div>
  );
};


export default Result;
