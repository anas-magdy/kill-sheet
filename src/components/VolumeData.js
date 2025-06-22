'use client';
import { useState } from "react";
export default function VolumeData({ formData, updateFormData, nextStep, prevStep }) {
    const [data, setData] = useState({
        drillPipeLength: formData.drillPipeLength || '',
        drillPipeCapacity: formData.drillPipeCapacity || '',
        hwdpLength: formData.hwdpLength || '',
        hwdpCapacity: formData.hwdpCapacity || '',
        drillCollarsLength: formData.drillCollarsLength || '',
        drillCollarsCapacity: formData.drillCollarsCapacity || '',
        dcOpenHoleLength: formData.dcOpenHoleLength || '',
        dcOpenHoleCapacity: formData.dcOpenHoleCapacity || '',
        dpHwdpOpenHoleLength: formData.dpHwdpOpenHoleLength || '',
        dpHwdpOpenHoleCapacity: formData.dpHwdpOpenHoleCapacity || '',
        dpCasingLength: formData.dpCasingLength || '',
        dpCasingCapacity: formData.dpCasingCapacity || '',
        activeSurfaceVolume: formData.activeSurfaceVolume || ''
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
            <h2>Pre-recorded Volume Data</h2>

            <h3>Drill String Volume</h3>
            <div>
                <label>Drill Pipe Length (ft):</label>
                <input type="number" name="drillPipeLength" value={data.drillPipeLength} onChange={handleChange} required />
            </div>

            <div>
                <label>Drill Pipe Capacity (bbls/ft):</label>
                <input type="number" name="drillPipeCapacity" value={data.drillPipeCapacity} onChange={handleChange} required />
            </div>

            {/* باقي حقول الحجم حسب الحاجة */}

            <div>
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}