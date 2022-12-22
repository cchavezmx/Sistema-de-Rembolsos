import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Selector = ({ data = [], label = '', ...propers }) => {
  if (!data.length) return null

  return (
    <FormControl>
        <InputLabel id={label}>
            {label}
        </InputLabel>
        <Select {...propers} variant="filled">
            {data.map((item, index) => (<MenuItem key={index} value={item}>{item}</MenuItem>)) }
        </Select>
    </FormControl>
  )
}

export default Selector
