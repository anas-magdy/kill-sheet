'use client';
import { useState } from "react";
export default function FormationStrength({ formData, updateFormData, nextStep }) {
    const [data, setData] = useState({
        surfaceLeakOff: formData.surfaceLeakOff || '',
        mudWeightAtTest: formData.mudWeightAtTest || '',
        currentMudWeight: formData.currentMudWeight || '',
        shoeTvDepth: formData.shoeTvDepth || ''
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
            <h2>Formation Strength Data</h2>

            <div>
                <label>SURFACE LEAK-OFF PRESSURE (psi):</label>
                <input type="number" name="surfaceLeakOff" value={data.surfaceLeakOff} onChange={handleChange} required />
            </div>

            <div>
                <label>MUD WEIGHT AT TEST (ppg):</label>
                <input type="number" name="mudWeightAtTest" value={data.mudWeightAtTest} onChange={handleChange} required />
            </div>

            <div>
                <label>CURRENT MUD WEIGHT (ppg):</label>
                <input type="number" name="currentMudWeight" value={data.currentMudWeight} onChange={handleChange} required />
            </div>

            <div>
                <label>SHOE T.V. DEPTH (ft):</label>
                <input type="number" name="shoeTvDepth" value={data.shoeTvDepth} onChange={handleChange} required />
            </div>

            <button type="submit">Next</button>
        </form>
    );
}