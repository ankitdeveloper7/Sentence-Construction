import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { correctanswerAtom, useranswerAtom } from '../pages/store/atom';
import { useNavigate } from 'react-router-dom';
import QuitModal from '../modal/QuitModal';



interface Props {
  question: string;
  options: string[];
  correctoption:string[];
  onpress: () => void;
}

export default function QuestionBox({ question, options, correctoption, onpress }: Props) {
  const [timer, setTimer] = useState(30);
  const [currentquestion, setCurrentquestion] = useState<string[]>([]);
  const [blank, setBlank] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);
  const useranswer = useSetRecoilState(useranswerAtom)
 const correctanswer = useSetRecoilState(correctanswerAtom)
 const[length, setlength] = useState(11);
 const[ismodalopen, setModal] = useState(false);

//  spliting the question and setting all the value to their state 
  useEffect(() => {
    const data: string[] = question.split(" _____________ ");
    setCurrentquestion(data);
    setBlank(data.length - 1);
    setSelectedOptions([]);
    setAvailableOptions(options);
    setlength(length-1);
    setTimer(30);
  }, [question, options]);

  

// timer logic 
  useEffect(() => {
    if(timer==1){
        sendata();
    }
    if (timer === 0) {
      sendata();      
      return;
    }

    const timeout = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);


  function setAnswer(answer: string) {
    if (selectedOptions.length < blank) {
      setSelectedOptions((prev) => [...prev, answer]);
      setAvailableOptions((prev) => prev.filter((item) => item !== answer));
    }
  }

  function removeAnswer(index: number) {
    const removed = selectedOptions[index];
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
    setAvailableOptions((prev) => [...prev, removed]);
  }

//   combining the data 
  function sendata(){
   let actualanswer:string = "";
   let answer:string = "";
   for(let i=0; i<correctoption.length; i++){
   actualanswer =  actualanswer + currentquestion[i] + " " + selectedOptions[i];
   answer= answer + currentquestion[i] + " " + correctoption[i];
   };
   actualanswer = actualanswer + currentquestion[currentquestion.length-1]|| "";
   answer = answer + currentquestion[currentquestion.length-1]|| "";

 
  useranswer((prev)=> [...prev, actualanswer])
  correctanswer((prev)=>[...prev, answer])


    onpress();
  }

//   changing the page 
const navigate = useNavigate();
  function openfeedback(){
    sendata();
    navigate("/feedback");
  }

  function quitQuiz(){
setModal(true)
  }
  function handlelick(){
    setModal(false);
  }

  return (
    <div>   
    <div className="w-[975px] h-[450px] mt-[112px] ml-[196px] border-2 rounded-[24px] p-[40px] gap-[56px] bg-white">
      <div className="flex justify-between items-center mb-4">
        <div className="font-inter font-semibold text-[24px] leading-[26px] tracking-[0px] text-center space-y-[8px]">
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
        </div>
        <button className="text-red-500 font-medium hover:underline" onClick={quitQuiz}>Quit</button>
      </div>

      <div className="font-inter font-semibold text-[#7C8181] text-[20px] leading-[22px] tracking-[0px] text-center space-y-[8px]">
        Select the missing words in the correct order
      </div>

      <p className="my-6">
        {currentquestion.map((item: string, index: number) => (
          <React.Fragment key={index}>
            <span className='text-[24px] leading-[50px] font-medium'>{item}</span>
            {index < blank && (
              <button
                className={`${selectedOptions[index]?'m-1 border-2 rounded-lg p-1 px-3 cursor-pointer':''}`}
                onClick={() => removeAnswer(index)}
              >
                {selectedOptions[index] || " _____________ "}
              </button>
            )}
          </React.Fragment>
        ))}
      </p>

      <div className="pt-4 flex flex-wrap gap-2 justify-center">
        {availableOptions.map((item: string) => (
          <button
            key={item}
            className="border-2 rounded-lg p-1 px-3 cursor-pointer"
            onClick={() => setAnswer(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        {length==0?<button
          onClick={openfeedback}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Submit
        </button>: <button
          onClick={sendata}
          className="mt-4 px-4 py-2 bg-blue-500 text-white fixed right-3 rounded cursor-pointer"
        >
          Next
        </button>}
      </div>
    </div>
<QuitModal isModalOpen={ismodalopen} onClose={handlelick} />
    </div>
  );
}
