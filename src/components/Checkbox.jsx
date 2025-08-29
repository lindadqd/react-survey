/* eslint-disable react/prop-types */

function CheckBox({form, setForm}) {
    const options = ["swimmming", "bathing", "chatting", "no time to waste"];

   const handleChange = (event) => {
  const value = event.target.value;

  if (form.timeSpent.includes(value)) {
    setForm(prevForm => ({
      ...prevForm,
      timeSpent: prevForm.timeSpent.filter(item => item !== value)
    }));
  } else {
    setForm(prevForm => ({
      ...prevForm,
      timeSpent: [...prevForm.timeSpent, value]
    }));
  }
};


    return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value={option}
              checked={form.timeSpent.includes(option)}
              onChange={handleChange}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default CheckBox;