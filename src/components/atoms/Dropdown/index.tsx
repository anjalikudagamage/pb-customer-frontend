import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { formControlStyle, selectStyle, placeholderStyle } from "./styles";

interface IDropdown {
  placeholder: string;
  disabledPlaceholder: string;
  names: string[];
}

const Dropdown: React.FC<IDropdown> = ({
  placeholder,
  disabledPlaceholder,
  names,
}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  function getStyles(name: string, personName: string, theme: Theme) {
    return {
      fontWeight:
        personName === name
          ? theme.typography.fontWeightMedium
          : theme.typography.fontWeightRegular,
    };
  }

  return (
    <FormControl sx={formControlStyle}>
      <Select
        displayEmpty
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected) {
            return <span style={placeholderStyle}>{placeholder}</span>;
          }

          return selected;
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 48 * 4.5 + 8,
              width: 250,
              scrollbarWidth: 'thin',
              scrollbarColor: '#888 #f1f1f1',
              '&::-webkit-scrollbar': {
                width: '12px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '10px',
              },
            },
          },
        }}
        inputProps={{ "aria-label": "Without label" }}
        sx={selectStyle}
        style={{ border: "none", outline: "none" }}
      >
        <MenuItem disabled value="">
          <span style={placeholderStyle}>{disabledPlaceholder}</span>
        </MenuItem>
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
