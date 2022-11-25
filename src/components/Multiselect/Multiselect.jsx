import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';

const languages = [
    'English',
    'Polish',
    'Spanish'
]

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(item, language, theme) {
    return {
      fontWeight:
        language.indexOf(item) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Multiselect = () => {
    const [language, setLanguage] = React.useState([]);
    const theme = useTheme();
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setLanguage(
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  return (
    <div>
    <FormControl sx={{ m: 1, width: 744 }}>
      <InputLabel id="multiple-language-label">Languages</InputLabel>
      <Select
        labelId="multiple-language-label"
        id="multiple-language"
        multiple
        defaultValue={languages[0]}
        value={language}
        onChange={handleChange}
        input={<OutlinedInput label='Language' />}
        MenuProps={MenuProps}
      >
        {languages.map((item) => (
          <MenuItem
            key={item}
            value={item}
            style={getStyles(item, language, theme)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  )
}

export default Multiselect