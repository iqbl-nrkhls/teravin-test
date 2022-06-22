import { Button } from "libs/components/button";
import { Input } from "libs/components/input";
import { useGlobalStore } from "libs/store/global";

import { useNavigate } from "react-router-dom";

export default function FormKeahlian () {
  let navigate = useNavigate();

  const [formTemp, setFormTemp] = useGlobalStore(state => [state.formTemp, state.setFormTemp]);
  const addForm = useGlobalStore(state => state.addForm);
  const clearFormTemp = useGlobalStore(state => state.clearFormTemp);

  const handleSubmit = (e) => {
    e.preventDefault();
    addForm(formTemp);
    clearFormTemp();

    navigate('/list')
  }

  const handleChange = (e, i) => {
    let array = formTemp?.keahlian || [];
    array[i] = e.target.value;
    setFormTemp('keahlian', array);
  }

  const handleAddInput = () => {
    let array = formTemp?.keahlian || [''];
    array[array.length] = '';
    setFormTemp('keahlian', array);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 p-6 mb-4 space-y-4">
        {formTemp?.keahlian ? formTemp.keahlian.map(
          (element,i) => (
            <Input
            key={i}
            onChange={e => handleChange(e,i)}
            placeholder="masukan keahlian"
            value={formTemp.keahlian[i]}
            />
            )
        ) : (
          <Input
          required
          onChange={e => handleChange(e, 0)}
          placeholder="masukan keahlian"
          />
        )}
        <button
        className="bg-white w-full h-full min-h-[200px]"
        type="button"
        onClick={handleAddInput}>
          <i className="fas fa-plus text-3xl" />
        </button>
      </div>

      <div className="ml-auto w-max">
        <Button text="Submit" />
      </div>
    </form>
  )
}