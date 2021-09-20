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
    const [arrayLength, setArrayLength] = useState<number>(4);
    const [value, setValue] = useState<number>(4);
    const [arrayLengthError, setArrayLengthError] = useState<string>('');
    const [valueError, setValueError] = useState<string>('');
    const [isSorting, setIsSorting] = useState<boolean>(false);

    const createArray = (length: number, value: number) => {
        if (length < 2 || length > 20) {
            setArrayLengthError('Invalid value. 2-20');
            return;
        }

        if (value < length || value > 100) {
            setValueError(`Invalid value. ${arrayLength}-100`);
            return;
        }
        setArrayLengthError('');
        setValueError('');

        let randomnumbers = new Set<number>();

        while (randomnumbers.size < length) {
            randomnumbers.add(Math.floor(Math.random() * value) + 1);
        }

        setDataArray([...Array.from(randomnumbers)]);
    };

    const bubbleSort = async (data: number[]) => {
        setIsSorting(true);
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
        setIsSorting(false);
    };

    const handleArrayLengthChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArrayLength(e.target.valueAsNumber);
    };

    const handleValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.valueAsNumber);
    };

    useEffect(() => {
        createArray(arrayLength, value);
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
                <FormControl error={arrayLengthError === '' ? false : true} variant="standard">
                    <InputLabel htmlFor="arrayLength">Array Length</InputLabel>
                    <Input
                        id="arrayLength"
                        value={arrayLength}
                        onChange={handleArrayLengthChanged}
                        aria-describedby="arrayLength-error-text"
                        type='number'
                    />
                    {arrayLengthError === '' ? null : <FormHelperText id="range-error-text">{arrayLengthError}</FormHelperText>}
                </FormControl>
                <FormControl error={valueError === '' ? false : true} variant="standard" style={{ paddingLeft: '20px' }}>
                    <InputLabel htmlFor="value" style={{ paddingLeft: '20px' }}>Values Range</InputLabel>
                    <Input
                        id="value"
                        value={value}
                        onChange={handleValueChanged}
                        aria-describedby="value-error-text"
                        type='number'
                    />
                    { }
                    {valueError === '' ? null : <FormHelperText id="count-error-text">{valueError}</FormHelperText>}
                </FormControl>
            </Box>
            <Button
                variant="contained"
                disabled={isSorting} onClick={() => createArray(arrayLength, value)}

            >Create Array!</Button>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {dataArray.map((x) => (
                    <motion.div
                        key={x}
                        layout
                        transition={spring}
                        style={{
                            background: "#FF008C",
                            display: "inline-block",
                            margin: "0.2rem",
                            borderRadius: "10px",
                            width: "100px",
                            height: "100px",
                        }}
                    >
                        <div style={{
                            width: "50%",
                            paddingTop: '15px',
                            textAlign: 'center',
                            margin: "0 auto"
                        }}>
                            <Typography variant="h2" component="div">
                                {x}
                            </Typography>
                        </div>
                    </motion.div>
                ))}
            </Box>
            <Button variant="contained" disabled={isSorting} onClick={() => bubbleSort(dataArray)}>Sort!</Button>
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
