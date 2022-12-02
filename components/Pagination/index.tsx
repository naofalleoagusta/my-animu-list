import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import MuiPagination, {
  PaginationProps as MuiPaginationProps,
} from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { z } from "zod";

import Button from "../ui_pallette/Button";
import InputField from "../ui_pallette/InputField";

import { StyleType } from "../../types";

const style: StyleType = {
  paginationContainer: {
    display: "flex",
    gap: "8px",
    alignItems: "initial",
    justifyContent: "center",
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

type Error = {
  error: boolean;
  message: string;
};

const Pagination = ({ count, onChange, page, id }: PaginationProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isSmall = useMediaQuery("(max-width:389px)");

  const [status, setStatus] = useState<Error>({
    error: false,
    message: "",
  });

  const clearError = () => {
    setStatus({
      error: false,
      message: "",
    });
  };

  const handleOnChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      try {
        const validator = z
          .number()
          .min(1)
          .max(count || 1);
        validator.parse(parseInt(event.target.value));
        clearError();
      } catch (error) {
        setStatus({
          error: true,
          message: `Input between 1 and ${count || 1}`,
        });
      }
    } else {
      clearError();
    }
    setValue(event.target.value);
  };

  const handleOnWheel = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };
  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const ignoredKeys = [",", ".", "+", "-", "e"];
    if (ignoredKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleOnClickButton = () => {
    if (onChange) {
      onChange("" as any, parseInt(value || "0"));
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
        <Box sx={style.inputContainer}>
          <InputField
            onChange={handleOnChangeTextField}
            onWheel={handleOnWheel}
            onKeyDown={handleOnKeyDown}
            value={value}
            id={id && `${id}-pagination-input`}
            sx={style.input}
            type="number"
            ref={inputRef}
            error={status.error}
            placeholder="Page Num"
          />
          <Button
            disabled={status.error || !value}
            onClick={handleOnClickButton}
          >
            Go
          </Button>
        </Box>
        {!!status.message && (
          <Typography variant="caption" sx={style.errorMsg}>
            {status.message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Pagination;
