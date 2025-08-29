/* eslint-disable react/prop-types */

function Checkbox({form, setForm}) {

  function handleChange(event) {
    const inputValue = event.target.value
    setForm({ ...form, [inputValue]: !form[inputValue] })
  }
    return (
<ul>
                <li>
                    <label
                    ><input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onChange={handleChange}
                        checked={form.swimming}
                    />Swimming</label>
                </li>
                <li>
                    <label
                    ><input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing"
                    onChange={handleChange}
                    checked={form.bathing} />Bathing</label>
                </li>
                <li>
                    <label
                    ><input
                        name="spend-time"
                        type="checkbox"
                        value="chatting"
                        onChange={handleChange}
                        checked={form.chatting}
                    />Chatting</label>
                </li>
                <li>
                    <label
                    ><input 
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime"
                    onChange= {handleChange}
                    checked={form.noTime} />I don`t like to
                    spend time with it</label>
                </li>
                </ul>

    )
}

export default Checkbox