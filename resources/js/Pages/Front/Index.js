import React, {useState} from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import LayoutFront from '@/Shared/LayoutFront';
import Prembule from "./Prembule"
import Prakata from "./Prakata"
import Tut from "./Tut"
import Question from "./Question"
import Prompt from "./Prompt"
import Result from "./Result"

const Index = () => {
  const [step, setStep] = useState(0)
  const render = () => {
    switch (step) {
      case 0:
        return <Prembule step={step} setStep={setStep} />
        break;
      case 1:
        return <Prakata step={step} setStep={setStep} />
        break;
      case 2:
        return <Tut step={step} setStep={setStep} />
        break;
      case 3:
        return <Question step={step} setStep={setStep} />
        break;
      case 4:
        return <Prompt step={step} setStep={setStep} />
        break;
      case 5:
        return <Result step={step} setStep={setStep} />
        break;
      default:
        break;
    }
  }

  return (
    <div className="my-5">
      {render()}
    </div>
  );
};

Index.layout = page => <LayoutFront title="Test Kesehatan Online by Ibunda.id" children={page} />;

export default Index;
