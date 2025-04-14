import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

interface Props {
    useranswer: string;
    correctanswer:string;
    index:number
  }
  
  export default function Answershowcase({ useranswer, correctanswer, index }: Props) {
    const [response, setResponse] = useState(true);
   
   
  
    useEffect(() => {
      const isCorrect = useranswer === correctanswer;
      setResponse(isCorrect);
    }, [useranswer, correctanswer]);
    
   
    
  
    return (
      <div className="w-full max-w-[700px] rounded-lg shadow-lg flex flex-col gap-4 bg-white">
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-[#616464] text-sm font-medium">Prompt</div>
            <div className="font-medium text-sm">{index + 1}/10</div>
          </div>
          <div className="text-left text-[#333]">{correctanswer}</div>
        </div>
  
        <div className="w-full bg-[#F6F9F9] text-left rounded-md p-4">
          <div className="font-medium text-[#333] mb-1">Your response: <span className={`${response?'text-green-500':'text-red-500'}`}>{String(response)}</span> </div>
          <div className="text-[#616464] break-words">{useranswer}</div>
        </div>
      </div>
    );
  }
  