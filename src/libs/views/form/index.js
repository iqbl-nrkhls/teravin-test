import Stepper from "libs/components/stepper";
import { useGlobalStore } from "libs/store/global";

import FormDataPersonal from "./FormDataPersonal";
import FormKeahlian from "./FormKeahlian";
import FormPengalaman from "./FormPengalaman";
import FormRiwayatPendidikan from "./FormRiwayatPendidikan";

export default function FormView () {
  const formTemp = useGlobalStore(state => state.formTemp)

  return (
    <div className="p-4">
      <section className="bg-white p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Form Submission</h1>

        <Stepper
          steps={['Data Personal', 'Riwayat Pendidikan', 'Pengalaman Kerja', 'Keahlian']}
          currentStepNumber={formTemp?.step || 1}
        />

        {!formTemp?.step && <FormDataPersonal />}
        {formTemp?.step === 2 && <FormRiwayatPendidikan />}
        {formTemp?.step === 3 && <FormPengalaman />}
        {formTemp?.step === 4 && <FormKeahlian />}
      </section>
    </div>
  )
}