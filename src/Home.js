import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import BackupIcon from '@mui/icons-material/Backup';
import "./App.css"
import MenuAppBar from './Navbar';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    let navigate = useNavigate();
    const [Image, setImage] = useState()
    const [File, setFile] = useState()
    // const [Result, setResult] = useState("")
    const [col, setcol] = useState(9)
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('Image',Image)
    }
    const inputChange=(e)=>{
        setImage(e.target.files[0])
    }
    // useEffect( () => {
    //     const user=localStorage.getItem("user")
    //     if(!user)navigate('/signup', { replace: true })
    // }, [])

    return (
        <>
            <MenuAppBar />
            <Container maxWidth={'xl'} sx={{ height: "90.8vh" }}>
                <Grid container columnSpacing={1} sx={{ height: "100%" }}>
                    <Grid item xs={7} sx={{ height: "100%" }}>
                        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} maxWidth={'lg'}>
                            <Box
                                height={"80%"}
                                width={"80%"}
                                my={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={4}
                                p={2}
                                borderRadius={3}
                                sx={{ border: '2px solid grey' }}
                            >
                                <Grid container
                                    direction="column"
                                    rowGap={2}
                                    sx={{ height: "100%", width: "100%" }}>
                                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                <DatePicker
                                                    label="Controlled picker"
                                                    value={value}
                                                    onChange={(newValue) => setValue(newValue)}
                                                />
                                            </LocalizationProvider>
                                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                        </Box>
                                    </Grid>
                                    <Divider sx={{ bgcolor: "gray", width: "100%" }} />
                                    <Grid item xs={col} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <Box
                                            height={"75%"}
                                            width={"75%"}
                                            my={4}
                                            display="flex"
                                            alignItems="center"
                                            gap={4}
                                            p={2}
                                            sx={{ borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                                        >
                                            <form className='input-form'
                                                onClick={() => document.querySelector('.input-filed').click()}
                                                onSubmit={handleSubmit}>
                                                <input type='file' accept='image/*' className='input-filed' hidden 
                                                onChange={inputChange}/>

                                                <Button variant="outlined" startIcon={<BackupIcon />} type='submit'>
                                                    Upload
                                                </Button>
                                            </form>
                                        </Box>
                                        <Box sx={{ border: '2px solid grey', width: "100%", height: "20%", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Typography >"Result"</Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Divider orientation='vertical' sx={{ width: "3px", bgcolor: "gray", height: "90%" }} />
                    </Grid>

                    <Grid item xs={4} sx={{ height: "100%", width: "100%" }}>
                        <Container maxWidth={'xl'} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Box
                                height={"90%"}
                                width={"100%"}
                                my={4}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={4}
                                p={2}
                                borderRadius={3}
                                sx={{ border: '2px solid grey' }}
                            >

                                <Grid
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    direction={"column"}
                                    sx={{ height: "100%", width: "100%", display: "flex" }}
                                >
                                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                        <Typography variant='h4' color={"#1475cf"}>
                                            How to Remedy
                                        </Typography>
                                    </Grid>
                                    <Divider sx={{ bgcolor: "gray", width: "100%" }} />
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexGrow: "1" }}>
                                        <Box
                                            height={"90%"}
                                            width={"100%"}
                                            my={4}
                                            p={2}
                                            borderRadius={3}
                                            sx={{ border: '2px solid grey' }}>
                                            <Typography overflow={"auto"} sx={{ height: "100%", width: "100%" }}
                                                className='remedy'> loreuogb3uol gtkrhgnowbg rgjnorbgd bgiurbfik d4 3jrgbfowbdolqd
                                            </Typography>
                                        </Box>
                                    </div>
                                </Grid>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home