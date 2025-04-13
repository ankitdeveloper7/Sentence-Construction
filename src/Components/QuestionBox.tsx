import React, { useEffect, useState } from 'react';

interface Props {
  question: string;
  options: string[];
  onpress: () => void;
}

export default function QuestionBox({ question, options, onpress }: Props) {
  const [timer, setTimer] = useState(30);
  const [currentquestion, setCurrentquestion] = useState<string[]>([]);
  const [blank, setBlank] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [availableOptions, setAvailableOptions] = useState<string[]>([]);

  useEffect(() => {
    const data: string[] = question.split(" _____________ ");
    setCurrentquestion(data);
    setBlank(data.length - 1);
    setSelectedOptions([]);
    setAvailableOptions(options);
    setTimer(30);
  }, [question, options]);

  useEffect(() => {
    if (timer === 0) {
      onpress();
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

  return (
    <div className="p-4 mt-8 border rounded shadow-md max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
        </div>
        <button className="text-red-500 font-medium hover:underline">Quit</button>
      </div>

      <div className="mb-4 text-lg font-medium flex justify-center">
        Select the missing words in the correct order
      </div>

      <p className="mb-4">
        {currentquestion.map((item: string, index: number) => (
          <React.Fragment key={index}>
            <span>{item}</span>
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
        <button
          onClick={onpress}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
