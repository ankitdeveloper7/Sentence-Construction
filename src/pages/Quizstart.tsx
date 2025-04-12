
import { SlOptionsVertical } from "react-icons/sl";
import { CiMenuBurger } from "react-icons/ci";
import { BsCoin } from "react-icons/bs";

export default function Quizstart() {

    function handleclick(){
        {window.open("/question", "_self")}
    }
  return (
    <>
   <section className="min-h-screen flex flex-col">
  <header className="text-lg h-16 flex items-center justify-between px-4 border-b shadow-sm">
    <div className="flex-1 text-center font-semibold text-xl">Sentence Construction</div>
    <div className="absolute right-4">
      <SlOptionsVertical />
    </div>
  </header>
  <div className="flex-1 flex items-center justify-center">
    <div className="text-center">
      <CiMenuBurger className="w-[54.4px] h-[45px] text-[#7C8181] mx-auto mb-4" />

      <div className="font-inter font-semibold text-4xl leading-[46px] w-[627px] mx-auto">
        Sentence Construction
      </div>

      <div className="font-inter font-normal text-[20px] leading-[28px] tracking-[-0.01em] text-[#7C8181] w-[627px] mx-auto mt-2">
        Select the correct words to complete the sentence by arranging the provided options in the right order.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
        <div>
          <p className="font-inter font-medium text-[20px] text-[#2A2D2D]">Time Per Question</p>
          <p className="font-inter font-medium text-[18px] text-[#7C8181]">30 sec</p>
        </div>
        <div>
          <p className="font-inter font-medium text-[20px] text-[#2A2D2D]">Total Questions</p>
          <p className="font-inter font-medium text-[18px] text-[#7C8181]">10</p>
        </div>
        <div>
          <p className="font-inter font-medium text-[20px] text-[#2A2D2D]">Coins</p>
          <p><BsCoin className="inline-block text-yellow-400" /> 0</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4 justify-center">
        <button className="py-[10px] px-6 text-[#453FE1] rounded-lg border border-[#453FE1] cursor-pointer">Back</button>
        <button className="text-white bg-[#453FE1] py-[10px] px-6 rounded-lg cursor-pointer" onClick={handleclick}>Start</button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
