import { useEffect, useState } from "react";
import axios from "axios";
import QuestionBox from "../Components/QuestionBox";

export default function Questionscreen() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [correctanswer, getAnswer] = useState<string[]>([]);
  const [backendquestion, setBackendQuestion] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:3000/data");
        const data = response.data.questions;
        setBackendQuestion(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    if (backendquestion.length > 0 && backendquestion[index]) {
      const data = backendquestion[index];
      setQuestion(data.question);
      setOptions(data.options);
      getAnswer(data.correctAnswer);
      
    }
  }, [index, backendquestion]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onpress();
    }, 30 * 1000);

    return () => clearTimeout(timer);
  }, [index]);

  function onpress() {
    setIndex((prev) => prev + 1);
  }

 

  return (
    <>
     
        <QuestionBox question={question} options={options} correctoption={correctanswer} onpress={onpress} />
     
    </>
  );
}
