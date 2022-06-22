import { Button } from "libs/components/button";
import { Input } from "libs/components/input";
import { useGlobalStore } from "libs/store/global";

export default function FormDataPersonal () {
  const [formTemp, setFormTemp] = useGlobalStore(state => [state.formTemp, state.setFormTemp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTemp('step', 2)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <Input
          label="Nama Depan"
          required={true}
          onChange={e => setFormTemp('namaDepan', e.target.value)}
          value={formTemp?.namaDepan}
          />
          <Input
          label="Nama Belakang"
          required
          onChange={e => setFormTemp('namaBelakang', e.target.value)}
          value={formTemp?.namaBelakang}
          />
          <Input
          label="Email"
          required
          onChange={e => setFormTemp('email', e.target.value)}
          value={formTemp?.email}
          />
          <Input
          label="No. Telp"
          type="number"
          required
          onChange={e => setFormTemp('telp', e.target.value)}
          value={formTemp?.telp}
          />
        </div>
        <div className="space-y-4">
          <Input
          label="Tempat Lahir"
          required
          onChange={e => setFormTemp('tempatLahir', e.target.value)}
          value={formTemp?.tempatLahir}
          />
          <Input
          label="Tanggal Lahir"
          required
          onChange={e => setFormTemp('tanggalLahir', e.target.value)}
          value={formTemp?.tanggalLahir}
          />
          <Input
          label="Alamat"
          required
          onChange={e => setFormTemp('alamat', e.target.value)}
          value={formTemp?.domisili}
          />
          <Input
          label="Agama"
          required
          onChange={e => setFormTemp('agama', e.target.value)}
          value={formTemp?.agama}
          />

        </div>
      </div>

      <div className="ml-auto w-max">
        <Button text="Next" />
      </div>
    </form>
  )
}