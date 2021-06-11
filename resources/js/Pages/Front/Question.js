

import React, {useState} from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Button from '@/Shared/Button';
import ButtonInvert from '@/Shared/ButtonInvert';
import StepWizard from '@/Shared/StepWizard';
import { findIndex } from 'lodash';

const Question = (props) => {
  const { qas } = usePage().props;
  const [qaNumber, setQaNumber] = useState(0)
  const [res, setRes] = useState([])

  const onStart = () => {
    props.setStep(3)
  }

  const onBack = () => {
    let da = res
    if( qaNumber == 0 ) {
      props.setStep(3)
    } else {
      let indx = findIndex(da, {id:qaNumber-1})
      if( indx > -1 ) {
        da.splice(indx, 1)
        setRes(prev=>[...da])
      }
      setQaNumber((prev)=>prev-1)

    }
  }

  const onAnswer = (answer) => {
    setRes(prev=>[...prev, {id:qaNumber, a:answer}])
    if( qas.length-1 == qaNumber ) {
      props.setStep(4)
      return
    }
    setQaNumber(qaNumber+1)
  }

  console.log(qas)

  return (
    <div>
      <StepWizard number={qas.length+1} numberActives={qaNumber+1} />
      <h6 className="sub-head font-semibold text-lg mt-4">Pertanyaan</h6>
      <div>
          <h5 htmlFor="id_input" className="question-head-bold text-xl">
            <span dangerouslySetInnerHTML={{__html: qas[qaNumber].q}} />
          </h5>
          <div>
            {qas[qaNumber].o.map((a,ind)=><ButtonInvert key={ind} onClick={()=>onAnswer(a)} width="w-full">{a}</ButtonInvert>)}
          </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div class="col-start-1 col-end-3">
            <Button onClick={onBack} width="w-full">Kembali</Button>
        </div>

      </div>

    </div>
  );
};


export default Question;
