// Context
import useNewsEngineTool from "../Hooks/useNewsEngineTool"
// MaterialUI
import { FormControl, InputLabel, Box, Button, MenuItem, Select } from "@mui/material"

const CATEGORIES = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Business' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'health', label: 'Health' },
  { value: 'science', label: 'Science' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
]


function Form() {

  const { selectedValue, handleSelectChange } = useNewsEngineTool()


  return (
    <form>
      <FormControl fullWidth>
        <InputLabel></InputLabel>
        <Select
          label="category"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {CATEGORIES.map(category => {
            return (
              <MenuItem
                key={category.value} value={category.value}
              >
                {category.label}
              </MenuItem>
            )
          })}

        </Select>

        <Box sx={{ marginTop: 2 }}>
          <Button
            fullWidth variant="contained" color="primary"
          >
            Search news
          </Button>
        </Box>
      </FormControl>
    </form>
  )
}

export default Form