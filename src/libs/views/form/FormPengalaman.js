import { Button } from "libs/components/button";
import { Input } from "libs/components/input";
import { useGlobalStore } from "libs/store/global";

export default function FormPengalaman () {
  const [formTemp, setFormTemp] = useGlobalStore(state => [state.formTemp, state.setFormTemp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTemp('step', 4);
  }

  const handleChange = (e, i) => {
    let array = formTemp?.pengalaman || [];
    array[i] = e.target.value;
    setFormTemp('pengalaman', array);
  }

  const handleAddInput = () => {
    let array = formTemp?.pengalaman || [''];
    array[array.length] = '';
    setFormTemp('pengalaman', array);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {formTemp?.pengalaman ? formTemp.pengalaman.map(
            (element,i) => (
              <Input
              key={i}
              label="Pengalaman Pekerjaan"
              onChange={e => handleChange(e,i)}
              value={formTemp.pengalaman[i]}
              />
              )
          ) : (
            <Input
            label="Pengalaman Pekerjaan"
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