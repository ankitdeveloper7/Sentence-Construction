import { useEffect, useState } from "react"

export default function Questionscreen() {
    const[question, setquestion] = useState([]);
    const[blank, setBlank] = useState(0);
    const[answerset, setanswer] = useState<(string | null)[]>([]);
  
    type Sentence = {
      question:string,
      option:string[],
      answer:string[]
    }
  
    const data:Sentence = {
      "question":"Soham and mohan is_______to market_______they will__________to buy some________for their family.",
      "option": ["going", "and","have", "fruits"],
      "answer":["going", "and", "have", "fruits"]
    }
  
    useEffect(()=>{
      function setthequestion(){
        const part:any = data.question.split("______");
        setquestion(part);
        setBlank(question.length -1);
      }
      setthequestion();
    },[data])
  
  
    function onpress(answer:string){
     answerset.push(answer)
    }
  
    function onpress2(){
      answerset.pop()
    }
  
   
    
  
    return (
      <>
       <p className="text-gray-600">{question.map((item, index)=>
        (
         <>
         <p className="inline-block"> {item} </p>
         {index < blank && <button className={`p-1 cursor-pointer relative ${ answerset[index]? 'border rounded p-2 m-1 absolute top-2' : 'grey '}`} onClick={onpress2}>
          {answerset[index] || "______"}
         </button> }
         </>
  
        ))}</p>
      
       {data.option.map((item)=>(
         <div className="p-2 inline-block ">
        <button className="p-1 border cursor-pointer" onClick={() => onpress(item)}>{item}</button>
        </div>
       ))}
  
       
      </>
    )
}
