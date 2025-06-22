'use client';
import { useState } from "react";
export default function PumpData({ formData, updateFormData, nextStep, prevStep }) {
    const [data, setData] = useState({
        pump1Displacement: formData.pump1Displacement || '',
        pump2Displacement: formData.pump2Displacement || '',
        pump1SPM1: formData.pump1SPM1 || '',
        pump1SPM2: formData.pump1SPM2 || '',
        pump2SPM1: formData.pump2SPM1 || '',
        pump2SPM2: formData.pump2SPM2 || ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData(data);
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Pump Data</h2>

            <div>
                <label>PUMP NO. 1 DISPLACEMENT (bbls/stroke):</label>
                <input type="number" name="pump1Displacement" value={data.pump1Displacement} onChange={handleChange} required />
            </div>

            <div>
                <label>PUMP NO. 2 DISPLACEMENT (bbls/stroke):</label>
                <input type="number" name="pump2Displacement" value={data.pump2Displacement} onChange={handleChange} required />
            </div>

            <h3>Slow Pump Rate Data:</h3>

            <div>
                <label>PUMP NO. 1 SPM 1:</label>
                <input type="number" name="pump1SPM1" value={data.pump1SPM1} onChange={handleChange} required />
            </div>

            <div>
                <label>PUMP NO. 1 SPM 2:</label>
                <input type="number" name="pump1SPM2" value={data.pump1SPM2} onChange={handleChange} required />
            </div>

            <div>
                <label>PUMP NO. 2 SPM 1:</label>
                <input type="number" name="pump2SPM1" value={data.pump2SPM1} onChange={handleChange} required />
            </div>

            <div>
                <label>PUMP NO. 2 SPM 2:</label>
                <input type="number" name="pump2SPM2" value={data.pump2SPM2} onChange={handleChange} required />
            </div>

            <div>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}