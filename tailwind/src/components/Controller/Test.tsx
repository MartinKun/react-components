import { useState } from "react";
import Controller from "./Controller";
import { OptionValues } from "./types";

const allOptions = [
  {
    value: "Option1",
    label: "Option1",
    id: "1",
  },
  {
    value: "Option2",
    label: "Option2",
    id: "2",
  },
  {
    value: "Option3",
    label: "Option3",
    id: "3",
  },
] as OptionValues[];

const initialSelectedOptions = [
  {
    value: "Option3",
    label: "Option3",
    id: "3",
  },
] as OptionValues[];

const Test = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionValues[]>(
    initialSelectedOptions
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-[400px]">
        <Controller
          allOptions={allOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
    </div>
  );
};

export default Test;
