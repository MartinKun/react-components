import { OptionValues } from "./types";
import "./style.css";

interface Props {
  allOptions: OptionValues[];
  selectedOptions: OptionValues[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<OptionValues[]>>;
}

const Select = ({ allOptions, selectedOptions, setSelectedOptions }: Props) => {
  const addOption = (option: OptionValues) => {
    const optionsModified = [...selectedOptions, option];
    setSelectedOptions(optionsModified);
  };

  return (
    <ul className="controller-select">
      {allOptions
        .filter(
          (item) =>
            !selectedOptions.some(
              (selectedItem) => selectedItem.value === item.value
            )
        )
        .map((item) => (
          <li
            key={item.id}
            onClick={() => {
              addOption(item);
            }}
          >
            {item.value}
          </li>
        ))}
    </ul>
  );
};

export default Select;
