import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300
};

export default (() => {
    const [dataArray, setDataArray] = useState<number[]>([]);
    const [range, setRange] = useState<number>(4);
    const [count, setCount] = useState<number>(4);
    const [rangeError, setRangeError] = useState<string>('');
    const [countError, setCountError] = useState<string>('');

    const createArray = (range: number, count: number) => {
        let nums = new Set<number>();
        while (nums.size < count) {
            nums.add(Math.floor(Math.random() * (range + 1)));
        }
        setDataArray([...Array.from(nums)]);
    };

    const bubbleSort = async (data: number[]) => {
        for (var i = 0; i < data.length; i++) {
            for (var j = data.length - 1; j > i; j--) {
                if (data[j] < data[j - 1]) {
                    let tmp = data[j];
                    data[j] = data[j - 1];
                    data[j - 1] = tmp;
                    setDataArray([...data]);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }
        }
    };

    const handleRangeChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rangeInput = e.target.valueAsNumber;
        if (rangeInput >= 2 && rangeInput <= 100) {
            setRange(rangeInput);
            setRangeError('');
        }
        else {
            setRangeError('Invalid value. 2-20')
        }
    };

    const handleCountChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        let countInput = e.target.valueAsNumber;
        if (countInput >= 0 && countInput <= 100 && countInput >= range) {
            setCount(countInput);
            setCountError('');
        }
        else {
            setCountError(`Invalid value. ${range}-100`)
        }
    };

    useEffect(() => {
        createArray(range, count);
    }, []);

    return (
        <>
            <Typography variant="h3" component="div">
                Bubble Sort
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 5
                }}
            >
                <FormControl error={rangeError === '' ? false : true} variant="standard">
                    <InputLabel htmlFor="range">Range</InputLabel>
                    <Input
                        id="range"
                        value={range}
                        onChange={handleRangeChanged}
                        aria-describedby="range-error-text"
                        type='number'
                    />
                    {rangeError === '' ? null : <FormHelperText id="range-error-text">{rangeError}</FormHelperText>}
                </FormControl>
                <FormControl error={countError === '' ? false : true} variant="standard" style={{ paddingLeft: '20px' }}>
                    <InputLabel htmlFor="count" style={{ paddingLeft: '20px' }}>Count</InputLabel>
                    <Input
                        id="count"
                        value={count}
                        onChange={handleCountChanged}
                        aria-describedby="count-error-text"
                        type='number'
                    />
                    { }
                    {countError === '' ? null : <FormHelperText id="count-error-text">{countError}</FormHelperText>}
                </FormControl>
            </Box>
            <Button variant="contained" onClick={() => createArray(range, count)}>Create Array!</Button>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {dataArray.map((d) => (
                    <motion.div
                        key={d}
                        layout
                        transition={spring}
                        style={{
                            background: "#FF008C",
                            display: "inline-block",
                            margin: "0.2rem",
                            borderRadius: "10px",
                            width: "100px",
                            height: "100px"
                        }}
                    >
                        <div style={{ width: "50%", paddingTop: '20px', textAlign: 'center', margin: "0 auto" }}>
                            <h2>{d}</h2>
                        </div>
                    </motion.div>
                ))}
            </Box>
            <Button variant="contained" onClick={() => bubbleSort(dataArray)}>Sort!</Button>
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    // getAriaValueText={(val) => `${val}°`}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
            </Box>
        </>
    );
}) as React.FC;
