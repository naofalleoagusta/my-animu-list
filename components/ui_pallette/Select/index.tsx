import { useMediaQuery } from "@mui/material";
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

const HEIGHT = {
  small: "26px",
  medium: "32px",
};

const Select = ({
  options,
  placeholder,
  value,
  isMulti,
  onChange,
}: SelectProps) => {
  const isSmall = useMediaQuery("(max-width:389px)");
  return (
    <ReactSelect
      options={options}
      isMulti={isMulti}
      styles={{
        control: (baseStyles, _) => ({
          ...baseStyles,
          border: "1px solid grey",
          width: isSmall ? "60px" : "80px",
          height: isSmall ? HEIGHT.small : HEIGHT.medium,
          minHeight: isSmall ? HEIGHT.small : HEIGHT.medium,
        }),
        indicatorsContainer: (provided, _) => ({
          ...provided,
          height: isSmall ? HEIGHT.small : HEIGHT.medium,
        }),
        valueContainer: (provided, _) => ({
          ...provided,
          height: isSmall ? HEIGHT.small : HEIGHT.medium,
          padding: "0px 6px",
        }),
        input: (provided, _) => ({
          ...provided,
          height: isSmall ? HEIGHT.small : HEIGHT.medium,
          padding: "0",
          margin: "0",
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
