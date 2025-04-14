import { useRecoilValue } from "recoil";
import { correctanswerAtom,useranswerAtom } from "./store/atom";
import { FaArrowLeft } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Answershowcase from "../Components/Answershowcase";
import { useEffect, useState } from "react";

export default function Feedback() {
  const useranswer: string[] = useRecoilValue(useranswerAtom);
  const correctanswer: string[] = useRecoilValue(correctanswerAtom);
  const[score, getScore] = useState(0);
  
  useEffect(()=>{
   for(let i=0; i<correctanswer.length; i++){
    if(useranswer[i]===correctanswer[i]){
      getScore(score+1)
    }
   }
   console.log("this is score value", score)
  },[useranswer,correctanswer])

  // const data:string ="this is dlajsd lfkajsd flaksdj flaksdjf laksdjf laksjdf laskjdf las";

  console.log("this is useranswer from the feedback page", useranswer);
  console.log("this is correct answer from the feedback page", correctanswer);

  return (
    <section className="min-h-screen flex flex-col">
      <header className="h-16 flex items-center justify-between px-4 border-b shadow-sm">
        <div>
          <FaArrowLeft />
        </div>
        <div className="flex-1 text-center font-semibold text-xl">
          Sentence Construction
        </div>
        <div className="absolute right-9">
          <SlOptionsVertical />
        </div>
      </header>

      <div className="flex-grow flex mt-6 items-center justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-2xl space-y-6">
          <div className="text-2xl font-semibold">{score}/10</div>
          <p className="text-gray-700">
            While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.
          </p>
          <button className="border border-[#453FE1] rounded px-4 py-2 text-[#453FE1] font-medium hover:bg-[#453FE1]/10 transition">
            Go to Dashboard
          </button>
        {useranswer.map((item, index) => (
  <Answershowcase
    key={index}
    useranswer={item}
    correctanswer={correctanswer[index]}
    index={index}
  />
))}
         
        </div>
      </div>
    </section>
  );
}
