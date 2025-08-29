import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const[dataFromForm, setDataFromForm] = useState([])

  const getDataFromForm = (data) => {
    setDataFromForm([...dataFromForm, data])
  }
  console.log(dataFromForm)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={dataFromForm}/>
      </section>
      <section className="survey__form">{<Form getDataFromForm= {getDataFromForm}/>}</section>
    </main>
  );
}

export default Survey;
