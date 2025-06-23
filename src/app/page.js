'use client';
import { useState } from 'react';
import { calculateResults } from '../utils/calculation';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Image from 'next/image';
Chart.register(...registerables);

export default function Home() {
  const [formData, setFormData] = useState({});

  // Unified handler for all inputs
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Live calculation
  let results = null;
  try {
    results = calculateResults(formData);
  } catch (e) {
    results = null;
  }

  // Chart data
  let chartData = null;
  if (results) {
    chartData = {
      labels: ['0', '25', '50', '75', '100'],
      datasets: [
        {
          label: 'Drill Pipe Pressure',
          data: [results.icp, results.icp * 0.75, results.icp * 0.5, results.icp * 0.25, results.fcp],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  }

  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <div className='flex jusify-center items-center'>
        <Image src={'/logo.jpeg'}
          width={100}
          height={100}
          alt='PetroBarrel'
        ></Image>
        <h1 className='text-2xl font-bold'>Surface BOP Vertical Well Kill Sheet Calculator</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 40px 1fr',
        gap: 40,
        alignItems: 'flex-start',
        borderRadius: 12,
        background: '#f3f4f6',
        padding: 24,
        boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
      }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <section style={{ background: '#fff', borderRadius: 10, padding: 20, boxShadow: '0 1px 6px #e5e7eb', marginBottom: 10 }}>
              <h2 style={{ marginBottom: 16, fontSize: 20 }}>Formation Strength Data</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <label style={{ fontWeight: 500 }}>SURFACE LEAK-OFF PRESSURE (psi):
                  <input type="number" name="surfaceLeakOff" value={formData.surfaceLeakOff || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>MUD WEIGHT AT TEST (ppg):
                  <input type="number" name="mudWeightAtTest" value={formData.mudWeightAtTest || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>CURRENT MUD WEIGHT (ppg):
                  <input type="number" name="currentMudWeight" value={formData.currentMudWeight || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>SHOE T.V. DEPTH (ft):
                  <input type="number" name="shoeTvDepth" value={formData.shoeTvDepth || ''} onChange={handleInputChange} step={.001} />
                </label>
              </div>
            </section>
            <section style={{ background: '#fff', borderRadius: 10, padding: 20, boxShadow: '0 1px 6px #e5e7eb', marginBottom: 10 }}>
              <h2 style={{ marginBottom: 16, fontSize: 20 }}>Pump Data</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <label style={{ fontWeight: 500 }}>PUMP NO. 1 DISPLACEMENT (bbls/stroke):
                  <input type="number" name="pump1Displacement" value={formData.pump1Displacement || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>PUMP NO. 2 DISPLACEMENT (bbls/stroke):
                  <input type="number" name="pump2Displacement" value={formData.pump2Displacement || ''} onChange={handleInputChange} step={.001} />
                </label>
                <h3 style={{ margin: '12px 0 4px' }}>Slow Pump Rate Data:</h3>
                <label style={{ fontWeight: 500 }}>PUMP NO. 1 SPM 1:
                  <input type="number" name="pump1SPM1" value={formData.pump1SPM1 || ''} onChange={handleInputChange} />
                </label>
                <label style={{ fontWeight: 500 }}>PUMP NO. 1 SPM 2:
                  <input type="number" name="pump1SPM2" value={formData.pump1SPM2 || ''} onChange={handleInputChange} />
                </label>
                <label style={{ fontWeight: 500 }}>PUMP NO. 2 SPM 1:
                  <input type="number" name="pump2SPM1" value={formData.pump2SPM1 || ''} onChange={handleInputChange} />
                </label>
                <label style={{ fontWeight: 500 }}>PUMP NO. 2 SPM 2:
                  <input type="number" name="pump2SPM2" value={formData.pump2SPM2 || ''} onChange={handleInputChange} />
                </label>
              </div>
            </section>
            <section style={{ background: '#fff', borderRadius: 10, padding: 20, boxShadow: '0 1px 6px #e5e7eb', marginBottom: 10 }}>
              <h2 style={{ marginBottom: 16, fontSize: 20 }}>Pre-recorded Volume Data</h2>
              <h3 style={{ margin: '12px 0 4px' }}>Drill String Volume</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <label style={{ fontWeight: 500 }}>Drill Pipe Length (ft):
                  <input type="number" name="drillPipeLength" value={formData.drillPipeLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>Drill Pipe Capacity (bbls/ft):
                  <input type="number" name="drillPipeCapacity" value={formData.drillPipeCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>HWDP Length (ft):
                  <input type="number" name="hwdpLength" value={formData.hwdpLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>HWDP Capacity (bbls/ft):
                  <input type="number" name="hwdpCapacity" value={formData.hwdpCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>Drill Collars Length (ft):
                  <input type="number" name="drillCollarsLength" value={formData.drillCollarsLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>Drill Collars Capacity (bbls/ft):
                  <input type="number" name="drillCollarsCapacity" value={formData.drillCollarsCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DC Open Hole Length (ft):
                  <input type="number" name="dcOpenHoleLength" value={formData.dcOpenHoleLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DC Open Hole Capacity (bbls/ft):
                  <input type="number" name="dcOpenHoleCapacity" value={formData.dcOpenHoleCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DP/HWDP Open Hole Length (ft):
                  <input type="number" name="dpHwdpOpenHoleLength" value={formData.dpHwdpOpenHoleLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DP/HWDP Open Hole Capacity (bbls/ft):
                  <input type="number" name="dpHwdpOpenHoleCapacity" value={formData.dpHwdpOpenHoleCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DP Casing Length (ft):
                  <input type="number" name="dpCasingLength" value={formData.dpCasingLength || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>DP Casing Capacity (bbls/ft):
                  <input type="number" name="dpCasingCapacity" value={formData.dpCasingCapacity || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>Active Surface Volume (bbls):
                  <input type="number" name="activeSurfaceVolume" value={formData.activeSurfaceVolume || ''} onChange={handleInputChange} step={.001} />
                </label>
              </div>
            </section>
            <section style={{ background: '#fff', borderRadius: 10, padding: 20, boxShadow: '0 1px 6px #e5e7eb', marginBottom: 10 }}>
              <h2 style={{ marginBottom: 16, fontSize: 20 }}>Kick Data</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <label style={{ fontWeight: 500 }}>SIDPP (psi):
                  <input type="number" name="sidpp" value={formData.sidpp || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>SICP (psi):
                  <input type="number" name="sicp" value={formData.sicp || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>PIT GAIN (barrels):
                  <input type="number" name="pitGain" value={formData.pitGain || ''} onChange={handleInputChange} step={.001} />
                </label>
                <label style={{ fontWeight: 500 }}>True Vertical Depth (TVD) (ft):
                  <input type="number" name="tvd" value={formData.tvd || ''} onChange={handleInputChange} step={.001} />
                </label>
              </div>
            </section>
          </div>
        </div>
        <div style={{ height: '100%', width: 2, background: '#e5e7eb', borderRadius: 2, margin: '0 10px' }}></div>
        <div>
          <section style={{ background: '#fff', borderRadius: 10, padding: 24, boxShadow: '0 1px 8px #e5e7eb', marginBottom: 32 }}>
            <h2 style={{ marginBottom: 16, fontSize: 20 }}>Calculation Results</h2>
            {results ? (
              <>
                <div style={{ marginBottom: 18 }}>
                  <h3 style={{ marginBottom: 6 }}>Formation Strength</h3>
                  <p>Maximum Allowable Mud Weight: {results.maxMudWeight.toFixed(2)} ppg</p>
                  <p>Initial MAASP: {results.initialMaasp.toFixed(2)} psi</p>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <h3 style={{ marginBottom: 6 }}>Kill Mud Calculations</h3>
                  <p>Kill Mud Weight: {results.killMudWeight.toFixed(2)} ppg</p>
                  <p>Initial Circulating Pressure (ICP): {results.icp.toFixed(2)} psi</p>
                  <p>Final Circulating Pressure (FCP): {results.fcp.toFixed(2)} psi</p>
                </div>
                <div>
                  <h3 style={{ marginBottom: 6 }}>Volume Calculations</h3>
                  <p>Drill String Volume: {results.drillStringVolume.toFixed(2)} bbls</p>
                  <p>Open Hole Volume: {results.openHoleVolume.toFixed(2)} bbls</p>
                  <p>Total Annulus Volume: {results.totalAnnulusVolume.toFixed(2)} bbls</p>
                  <p>Total Well System Volume: {results.totalWellSystemVolume.toFixed(2)} bbls</p>
                </div>
              </>
            ) : (
              <p style={{ color: '#888' }}>يرجى إدخال جميع البيانات المطلوبة لعرض النتائج.</p>
            )}
          </section>
          <section style={{ background: '#fff', borderRadius: 10, padding: 24, boxShadow: '0 1px 8px #e5e7eb' }}>
            <h2 style={{ marginBottom: 16, fontSize: 20 }}>Pressure Chart</h2>
            {results && chartData ? (
              <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
                <Line data={chartData} />
              </div>
            ) : (
              <p style={{ color: '#888' }}>يرجى إدخال جميع البيانات المطلوبة لعرض الرسم البياني.</p>
            )}
          </section>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
          .container > div > div[style*='height: 100%'] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}