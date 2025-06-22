'use client';
import { useState } from 'react';
import FormationStrength from '../components/FormationStrength';
import PumpData from '../components/PumpData';
import VolumeData from '../components/VolumeData';
import KickData from '../components/KickData';
import Results from '../components/Results';
import PressureChart from '../components/PressureChart';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="container">
      <h1>Surface BOP Vertical Well Kill Sheet Calculator</h1>

      {step === 1 && <FormationStrength formData={formData} updateFormData={updateFormData} nextStep={() => setStep(2)} />}
      {step === 2 && <PumpData formData={formData} updateFormData={updateFormData} nextStep={() => setStep(3)} prevStep={() => setStep(1)} />}
      {step === 3 && <VolumeData formData={formData} updateFormData={updateFormData} nextStep={() => setStep(4)} prevStep={() => setStep(2)} />}
      {step === 4 && <KickData formData={formData} updateFormData={updateFormData} nextStep={() => setStep(5)} prevStep={() => setStep(3)} />}
      {step === 5 && <Results formData={formData} prevStep={() => setStep(4)} />}

      {step === 5 && <PressureChart formData={formData} />}
    </div>
  );
}