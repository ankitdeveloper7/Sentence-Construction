import { useRecoilValue } from "recoil"
import { correctanswerAtom, useranswerAtom } from "./store/atom"

export default function Feedback() {
const useranswer = useRecoilValue(useranswerAtom);
const correctanswer = useRecoilValue(correctanswerAtom);

console.log("this is useranswer from the feedback page", useranswer);
console.log("this is correct answer from the feedback page", correctanswer)
  return (
    <>
<p>this is feedback form</p>
    </>
  )
}
