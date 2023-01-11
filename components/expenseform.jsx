import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import structuredClone from '@ungap/structured-clone';
import { CURRENT_YEAR } from '../global';

export default function ExpenseForm({ setExpenseName, setAmount, setCategory, setMonth, setYear }) {
    const [_expenseName, _setExpenseName] = React.useState(" ");
    const [_amount, _setAmount] = React.useState(undefined);
    const [_category, _setCategory] = React.useState("Personal");
    const [_month, _setMonth] = React.useState("Jan");
    const [_year, _setYear] = React.useState(String(CURRENT_YEAR));
    const age = 10;
    const handleSubmit = () => {
        // TODO: perform error handling and checks
        let __expenseName = structuredClone(_expenseName);
        let __amount = structuredClone(_amount);
        let __category = structuredClone(_category);
        let __month = structuredClone(_month);
        let __year = structuredClone(_year);
        // Sets parent values
        setExpenseName(__expenseName);
        setAmount(__amount);
        setCategory(__category);
        setMonth(__month);
        setYear(__year);

        _setExpenseName(" ");
        _setAmount(0);

    }
    const handleExpenseChange = (e) => {
        _setExpenseName(e.target.value);
    }
    const handleAmountChange = (e) => {
        _setAmount(e.target.value);
    }
    const handleCategoryChange = (e) => {
        _setCategory(e.target.value);
    }
    const handleMonthChange = (e) => {
        _setMonth(e.target.value);
    }
    const handleYearChange = (e) => {
        _setYear(e.target.value);
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ flexWrap: 'wrap', padding: "5%" }}>
            <div>
                <FormControl sx={{ m: 1, width: '25ch' }}>
                    <InputLabel htmlFor="outlined-adornment-expense">Expense name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        label="Amount"
                        value={_expenseName}
                        onChange={handleExpenseChange}
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        value={_amount}
                        onChange={handleAmountChange}
                    />
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={_category}
                        label="Category"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={"Personal"}>Personal</MenuItem>
                        <MenuItem value={"Groceries"}>Groceries</MenuItem>
                        <MenuItem value={"Gas"}>Gas</MenuItem>
                        <MenuItem value={"Travel"}>Travel</MenuItem>
                        <MenuItem value={"Rent"}>Rent</MenuItem>
                        <MenuItem value={"Food"}>Food</MenuItem>
                        <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                    </Select>
                    <FormHelperText>Label</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Month</InputLabel>
                    <Select
                        value={_month}
                        onChange={handleMonthChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={"Jan"}>Jan</MenuItem>
                        <MenuItem value={"Feb"}>Feb</MenuItem>
                        <MenuItem value={"Mar"}>Mar</MenuItem>
                        <MenuItem value={"Apr"}>Apr</MenuItem>
                        <MenuItem value={"May"}>May</MenuItem>
                        <MenuItem value={"Jun"}>Jun</MenuItem>
                        <MenuItem value={"July"}>Jul</MenuItem>
                        <MenuItem value={"Aug"}>Aug</MenuItem>
                        <MenuItem value={"Sep"}>Sep</MenuItem>
                        <MenuItem value={"Oct"}>Oct</MenuItem>
                        <MenuItem value={"Nov"}>Nov</MenuItem>
                        <MenuItem value={"Dec"}>Dec</MenuItem>
                    </Select>
                    <FormHelperText>Month</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">Year</InputLabel>
                    <Select
                        value={_year}
                        onChange={handleYearChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={"2022"}>2022</MenuItem>
                        <MenuItem value={"2023"}>2023</MenuItem>
                    </Select>
                    <FormHelperText>Year</FormHelperText>
                </FormControl>
            </div>
            <Button color="success" variant="contained" startIcon={<AddRoundedIcon />} onClick={handleSubmit}>
                Add
            </Button>
        </Box >
    );
}