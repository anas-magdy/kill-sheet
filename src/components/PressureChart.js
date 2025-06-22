'use client';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function PressureChart({ formData }) {
    // حساب بيانات الرسم البياني بناءً على البيانات المدخلة
    const data = {
        labels: ['0', '25', '50', '75', '100'],
        datasets: [
            {
                label: 'Drill Pipe Pressure',
                data: [formData.icp, formData.icp * 0.75, formData.icp * 0.5, formData.icp * 0.25, formData.fcp],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return (
        <div style={{ width: '80%', margin: '20px auto' }}>
            <h3>Pressure Chart</h3>
            <Line data={data} />
        </div>
    );
}