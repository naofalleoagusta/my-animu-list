import { ReactNode } from "react";
import ReactSelect, {
  SingleValue,
  ActionMeta,
  OptionsOrGroups,
  MultiValue,
} from "react-select";

type SelectProps = {
  options: OptionsOrGroups<string, any>;
  placeholder?: ReactNode;
  value: string;
  isMulti?: boolean;
  onChange?: (
    newValue: MultiValue<string> | SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => void;
};

const Select = ({
  options,
  placeholder,
  value,
  isMulti,
  onChange,
}: SelectProps) => {
  return (
    <ReactSelect
      options={options}
      isMulti={isMulti}
      styles={{
        control: (baseStyles, _) => ({
          ...baseStyles,
          border: "1px solid grey",
          width: "80px",
          height: "32px",
          minHeight: "32px",
        }),
        indicatorsContainer: (provided, _) => ({
          ...provided,
          height: "32px",
        }),
        valueContainer: (provided, _) => ({
          ...provided,
          height: "32px",
          padding: "0 6px",
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
        NoOptionsMessage: () => (
          <p style={{ textAlign: "center", padding: 4, margin: 0 }}>👻</p>
        ),
      }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Select;
