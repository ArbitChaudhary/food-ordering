import { Box, Button, Card, Divider, Icon, IconButton, rgbToHex, TextField, Typography } from "@mui/material"
import bg from "../../assets/bg-1.jpg"
import Logo from "../../assets/Logo-1.png"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { SubmitHandler, useForm } from "react-hook-form";

type ILogin ={
    email : string,
    password : string
}

const Login = () => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm<ILogin>();

  const onSubmit:SubmitHandler<ILogin> = async(data) => {
    console.log(data)
  }

  return (
    <Box sx={{maxWidth : "1400px", height:'100vh', width:"100%", margin: "0 auto", backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", objectFit:"cover"}}>
      <Box sx={{backgroundColor:"rgb(0,0,0,0.60)", height:"100%", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Card sx={{backgroundColor:"rgb(0,0,0,0.70)", maxWidth:"800px", marginX:"auto", width:"100%", borderWidth:"1px", borderColor:"white", padding:3}}>
          <Box sx={{ display:"flex", gap:"30px"}}>
            <Box sx={{width:"calc(50% - 15px)"}}>
              <img src={Logo} alt="" className="h-10 w-20 object-cover"/>
              <Box sx={{}}>
                <Typography fontSize={35} fontWeight={600} color={"white"}> Get Your </Typography>
                <Typography fontSize={35} fontWeight={600} color={"white"}> Fevorite Food </Typography>
              </Box>
            </Box>
            <Box sx={{display:"flex", width:"calc(50% - 15px)"}}>
              <Box sx={{background:"white", padding:3, width:"100%", borderRadius:2}}>
                <Typography sx={{fontSize:25, fontWeight:600, color:"#404040", textAlign:"center"}}>Login</Typography>
                <form 
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-5 flex flex-col w-full gap-5"
                >
                  <TextField
                    required
                    label="Email"
                    type="email"
                    variant="outlined"
                    {...register("email", {required:"Email is required"})}
                  />
                  <Box sx={{display:"flex", flexDirection:"column"}}>
                    <TextField
                      required
                      label="Password"
                      type="password"
                      variant="outlined"
                    />
                    <Box sx={{display:"flex", justifyContent:"flex-end"}}>
                      <Typography sx={{fontSize:12, color:"#7B808E"}}>Forgot Password?</Typography>
                    </Box>
                  </Box>
                  <Button type="submit" variant="contained">Sign In</Button>
                  <Box sx={{marginTop:1}}>
                    <Box sx={{display:"flex", gap:"3px", alignItems:"center"}}>
                      <Divider sx={{width:"25%"}}/>
                      <Typography sx={{width:"50%", textAlign:"center", color:"gray"}}> or continuw with</Typography>
                      <Divider sx={{width:"25%"}}/>
                    </Box>
                  </Box>
                  <Box sx={{display:"flex", gap:2, justifyContent:"center", alignItems:"center"}}>
                    <IconButton sx={{boxShadow:"2px 2px 6px 1px lightgray"}}>
                      <GoogleIcon className="text-red-600"/>
                    </IconButton>
                    <IconButton sx={{boxShadow:"2px 2px 6px 1px lightgray"}}>
                      <FacebookIcon className="text-blue-600"/>
                    </IconButton>
                    <IconButton sx={{boxShadow:"2px 2px 6px 1px lightgray"}}>
                      <XIcon className="text-black"/>
                    </IconButton>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default Login