export function calculateResults(formData) {
    // حساب قوة التكوين
    const maxMudWeight = parseFloat(formData.mudWeightAtTest) + (parseFloat(formData.surfaceLeakOff) / (parseFloat(formData.shoeTvDepth) * 0.052));

    const initialMaasp = (maxMudWeight - parseFloat(formData.currentMudWeight)) *
        parseFloat(formData.shoeTvDepth) * 0.052;

    // حساب Kill Mud Weight
    const killMudWeight = parseFloat(formData.currentMudWeight) +
        (parseFloat(formData.sidpp) / (parseFloat(formData.tvd) * 0.052));

    // حساب الضغوط
    const dynamicPressureLoss = 500; // مثال - يجب حسابها بناءً على بيانات المضخة
    const icp = dynamicPressureLoss + parseFloat(formData.sidpp);
    const fcp = (killMudWeight / parseFloat(formData.currentMudWeight)) * dynamicPressureLoss;

    // حساب الأحجام
    const drillStringVolume =
        (parseFloat(formData.drillPipeLength) * parseFloat(formData.drillPipeCapacity)) +
        (parseFloat(formData.hwdpLength) * parseFloat(formData.hwdpCapacity)) +
        (parseFloat(formData.drillCollarsLength) * parseFloat(formData.drillCollarsCapacity));

    const openHoleVolume =
        (parseFloat(formData.dcOpenHoleLength) * parseFloat(formData.dcOpenHoleCapacity)) +
        (parseFloat(formData.dpHwdpOpenHoleLength) * parseFloat(formData.dpHwdpOpenHoleCapacity));

    const totalAnnulusVolume = openHoleVolume +
        (parseFloat(formData.dpCasingLength) * parseFloat(formData.dpCasingCapacity));

    const totalWellSystemVolume = drillStringVolume + totalAnnulusVolume;

    return {
        maxMudWeight,
        initialMaasp,
        killMudWeight,
        icp,
        fcp,
        drillStringVolume,
        openHoleVolume,
        totalAnnulusVolume,
        totalWellSystemVolume
    };
  }