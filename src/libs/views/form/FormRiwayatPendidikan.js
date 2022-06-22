import { Button } from "libs/components/button";
import { Input } from "libs/components/input";
import { useGlobalStore } from "libs/store/global";

export default function FormRiwayatPendidikan () {
  const [formTemp, setFormTemp] = useGlobalStore(state => [state.formTemp, state.setFormTemp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTemp('step', 3);
  }

  const handleChange = (e, i) => {
    let array = formTemp?.pendidikan || [];
    array[i] = e.target.value;
    setFormTemp('pendidikan', array);
  }

  const handleAddInput = () => {
    let array = formTemp?.pendidikan || [''];
    array[array.length] = '';
    setFormTemp('pendidikan', array);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {formTemp?.pendidikan ? formTemp.pendidikan.map(
            (element,i) => (
              <Input
              key={i}
              label="Instansi/Pendidikan"
              onChange={e => handleChange(e,i)}
              value={formTemp.pendidikan[i]}
              />
              )
          ) : (
            <Input
            label="Instansi/Pendidikan"
            required
            onChange={e => handleChange(e, 0)}
            />
          )}
        </div>
        <div className="space-y-4">
          <button
          className="bg-white w-full h-full min-h-[200px]"
          type="button"
          onClick={handleAddInput}>
            <i className="fas fa-plus text-3xl" />
          </button>
        </div>
      </div>

      <div className="ml-auto w-max">
        <Button text="Next" />
      </div>
    </form>
  )
}