import MuiPagination, {
  PaginationProps as MuiPaginationProps,
} from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ActionMeta } from "react-select";

import Select from "../Select";

import { StyleType } from "../../../types";

const style: StyleType = {
  paginationContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "initial",
    justifyContent: "flex-end",
    padding: "8px",
    flexWrap: {
      xs: "wrap",
      sm: "nowrap",
    },
  },
  pagination: {
    width: "fit-content",
  },
  input: {
    width: "80px",
  },
  inputContainer: {
    display: "flex",
    columnGap: "6px",
    alignItems: "base",
  },
  errorMsg: {
    color: "error.main",
    fontSize: "12px",
  },
};

type PaginationProps = Pick<
  MuiPaginationProps,
  "count" | "onChange" | "page"
> & {
  id?: string;
};

const Pagination = ({ count, onChange, page }: PaginationProps) => {
  const isSmall = useMediaQuery("(max-width:389px)");

  const handleOnChange = (newValue: any, _: ActionMeta<string>) => {
    if (onChange) {
      onChange("" as any, parseInt(newValue.label));
    }
  };

  return (
    <Box sx={style.paginationContainer}>
      <MuiPagination
        count={count}
        page={page}
        variant="outlined"
        shape="rounded"
        sx={style.pagination}
        onChange={onChange}
        color="primary"
        size={isSmall ? "small" : "medium"}
      />
      <Box>
        <Select
          options={[...Array(count)].map((_, idx) => ({
            value: `${idx + 1}`,
            label: `${idx + 1}`,
          }))}
          placeholder={`${page || 1}`}
          value={`${page || 1}`}
          onChange={handleOnChange}
          label="Pagination Select"
        />
      </Box>
    </Box>
  );
};

export default Pagination;
