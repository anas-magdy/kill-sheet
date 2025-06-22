'use client';
import { useState } from "react";
export default function KickData({ formData, updateFormData, nextStep, prevStep }) {
    const [data, setData] = useState({
        sidpp: formData.sidpp || '',
        sicp: formData.sicp || '',
        pitGain: formData.pitGain || '',
        tvd: formData.tvd || ''
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
            <h2>Kick Data</h2>

            <div>
                <label>SIDPP (psi):</label>
                <input type="number" name="sidpp" value={data.sidpp} onChange={handleChange} required />
            </div>

            <div>
                <label>SICP (psi):</label>
                <input type="number" name="sicp" value={data.sicp} onChange={handleChange} required />
            </div>

            <div>
                <label>PIT GAIN (barrels):</label>
                <input type="number" name="pitGain" value={data.pitGain} onChange={handleChange} required />
            </div>

            <div>
                <label>True Vertical Depth (TVD) (ft):</label>
                <input type="number" name="tvd" value={data.tvd} onChange={handleChange} required />
            </div>

            <div>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Calculate</button>
            </div>
        </form>
    );
}