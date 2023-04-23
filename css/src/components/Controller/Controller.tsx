import { useState } from "react";
import Select from "./Select";
import { OptionValues } from "./types";
import "./style.css";

interface Props {
  allOptions: OptionValues[];
  selectedOptions: OptionValues[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<OptionValues[]>>;
}

const Controller = ({
  allOptions,
  selectedOptions,
  setSelectedOptions,
}: Props) => {
  const [showSelect, setShowSelect] = useState(false);

  const removeItem = (option: OptionValues) => {
    const optionsModified = selectedOptions.filter(
      (item) => item.value !== option.value
    );
    setSelectedOptions(optionsModified);
  };

  const removeAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div className="controller">
      <div className="controller-field">
        {selectedOptions.length === 0 && (
          <span className="container">Options</span>
        )}
        <ul>
          {selectedOptions.length !== 0 &&
            selectedOptions.map((item) => (
              <li key={item.id} className="controller-option">
                <span>{item.value}</span>
                <img
                  onClick={() => {
                    removeItem(item);
                  }}
                  src="../../assets/icons/cross.svg"
                />
              </li>
            ))}
        </ul>
        <div className="controller-btns">
          {selectedOptions.length > 0 && (
            <div onClick={removeAll} className="controller-cross">
              <img src={"../../assets/icons/cross.svg"} />
            </div>
          )}
          {showSelect && selectedOptions.length !== allOptions.length && (
            <div
              onClick={() => {
                setShowSelect(false);
              }}
              className="controller-arrow up"
            >
              <img src="../../assets/icons/arrow-down.svg" />
            </div>
          )}
          {!showSelect && (
            <div
              onClick={() => {
                setShowSelect(true);
              }}
              className="controller-arrow down"
            >
              <img src="../../assets/icons/arrow-down.svg" />
            </div>
          )}
        </div>
      </div>
      {showSelect && selectedOptions.length !== allOptions.length && (
        <Select
          allOptions={allOptions}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  );
};

export default Controller;
