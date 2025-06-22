'use client';
import { calculateResults } from '../utils/calculation';

export default function Results({ formData, prevStep }) {
    const results = calculateResults(formData);

    return (
        <div>
            <h2>Calculation Results</h2>

            <div>
                <h3>Formation Strength</h3>
                <p>Maximum Allowable Mud Weight: {results.maxMudWeight.toFixed(2)} ppg</p>
                <p>Initial MAASP: {results.initialMaasp.toFixed(2)} psi</p>
            </div>

            <div>
                <h3>Kill Mud Calculations</h3>
                <p>Kill Mud Weight: {results.killMudWeight.toFixed(2)} ppg</p>
                <p>Initial Circulating Pressure (ICP): {results.icp.toFixed(2)} psi</p>
                <p>Final Circulating Pressure (FCP): {results.fcp.toFixed(2)} psi</p>
            </div>

            <div>
                <h3>Volume Calculations</h3>
                <p>Drill String Volume: {results.drillStringVolume.toFixed(2)} bbls</p>
                <p>Open Hole Volume: {results.openHoleVolume.toFixed(2)} bbls</p>
                <p>Total Annulus Volume: {results.totalAnnulusVolume.toFixed(2)} bbls</p>
                <p>Total Well System Volume: {results.totalWellSystemVolume.toFixed(2)} bbls</p>
            </div>

            <button type="button" onClick={prevStep}>Back</button>
        </div>
    );
}