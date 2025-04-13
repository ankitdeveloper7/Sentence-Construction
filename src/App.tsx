import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quizstart from "./pages/Quizstart";
import Questionscreen from './pages/Questionscreen';
import Feedback from './pages/Feedback';

export default function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Quizstart />} />
    <Route path="/question" element={<Questionscreen />} />
    <Route path="/feedback" element={<Feedback />} />
   </Routes>
   </BrowserRouter>
  </>
  )
}
