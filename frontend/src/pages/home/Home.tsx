import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, ListItem, Stack, Typography } from "@mui/material"
import Banner from "../../assets/bg-1.jpg"
import Burger from "../../assets/Burger.png"
import Pizza from "../../assets/Pizza.png"
import Biryani from "../../assets/Chicken Biryani.jpg"
import Link from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image1 from "../../assets/downtown.jpg";
import Image2 from "../../assets/nandos.jpg";
import Speciality from "../../components/modules/speciality/Speciality"

const Home = () => {
    return(
        <div className="max-w-[1400px] mx-auto overflow-hidden">
            <Box sx={{width:"100vw", height:"90vh", overflow:"hidden"}}>
                <img src={Banner} alt="" className="w-[100%] h-[100%] object-cover"/>
            </Box>
            <Box sx={{marginTop:7,marginBottom:3, maxWidth:"1150px", marginX :"auto"}}>
                <Typography sx={{textTransform:"uppercase", fontWeight:600, color:"	#FFBF00", textAlign:"center"}}>Top Foods</Typography>
                <Typography sx={{fontSize:40, fontWeight:900, textTransform:"capitalize", textAlign:"center"}}>Our Categories</Typography>
                <Grid container spacing={2} marginTop={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                            <Box sx={{width:"100%", maxHeight:"150px", overflow:"hidden"}}>
                                <img src={Burger} alt="" className="h-36 w-full object-contain" />
                            </Box>
                            <Box sx={{padding:2}}>
                                <Typography sx={{fontSize:20, fontWeight:600}}>Burger</Typography>
                                <Typography sx={{fontSize:14, color:"gray"}}>14 Restaurants Products</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                            <Box sx={{width:"100%", maxHeight:"150px", overflow:"hidden"}}>
                                <img src={Pizza} alt="" className="h-36 w-full object-contain" />
                            </Box>
                            <Typography sx={{fontSize:20, fontWeight:600}}>Burger</Typography>
                            <Typography sx={{fontSize:14, color:"gray"}}>14 Restaurants Products</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                            <Box sx={{width:"100%", maxHeight:"200px", overflow:"hidden"}}>
                                <img src={Burger} alt="" className="h-36 w-full object-contain" />
                            </Box>
                            <Typography sx={{fontSize:20, fontWeight:600}}>Burger</Typography>
                            <Typography sx={{fontSize:14, color:"gray"}}>14 Restaurants Products</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                            <Box sx={{width:"100%", maxHeight:"200px", overflow:"hidden"}}>
                                <img src={Pizza} alt="" className="h-36 w-full object-contain" />
                            </Box>
                            <Typography sx={{fontSize:20, fontWeight:600}}>Burger</Typography>
                            <Typography sx={{fontSize:14, color:"gray"}}>14 Restaurants Products</Typography>
                        </Box>
                    </Grid>
                    <Box sx={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
                        <Button variant="contained" sx={{bgcolor:"#FEBE10", borderRadius:20, ":hover":{bgcolor:"#FEBE10"}}}>Find More</Button>
                    </Box>
                </Grid>
                <Box sx={{marginY:7}}>
                    <Speciality />
                </Box>
                <Box sx={{marginY:7}}>
                    <Typography sx={{textTransform:"uppercase", fontWeight:600, color:"	#FFBF00", textAlign:"center"}}>Top restaurants</Typography>
                    <Typography sx={{fontSize:40, fontWeight:900, textTransform:"capitalize", textAlign:"center"}}>Popular Restaurants</Typography>
                    <Grid container spacing={3} marginTop={5}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia 
                                    component={"img"}
                                    sx={{height:{xs:"140px", sm:"170px", md:"210px"}}}
                                    image={Image2}
                                    alt="Res"
                                />
                                <CardContent sx={{display:"flex", flexDirection:"column", gap:2}}>
                                    <Typography sx={{fontSize:22, fontWeight:600, textTransform:"capitalize"}}>
                                        Organic tasty food
                                    </Typography>
                                    <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Sea Food</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Steaks</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Shakes</Typography>
                                    </Stack>
                                    <Divider />
                                    <Box sx={{display:"flex", flexDirection:"row", gap:1}}>
                                        <Box sx={{height:"40px", width:"40px"}}>
                                            <img src={Image1} alt="" className="h-full w-full object-cover"/>
                                        </Box>
                                        <Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <AccessTimeIcon sx={{fontSize:14, color:"green"}}/>
                                                <Typography sx={{fontSize:14, color:"#C70039"}}>12:01 am - 11:59 pm</Typography>
                                            </Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <LocationOnIcon sx={{fontSize:14, color:"gray"}}/>
                                                <Typography sx={{fontSize:14, color:"gray"}}>Kathmandu, Nepal</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia 
                                    component={"img"}
                                    sx={{height:{xs:"140px", sm:"170px", md:"210px"}}}
                                    image={Biryani}
                                    alt="Res"
                                />
                                <CardContent sx={{display:"flex", flexDirection:"column", gap:2}}>
                                    <Typography sx={{fontSize:22, fontWeight:600, textTransform:"capitalize"}}>
                                        Organic tasty food
                                    </Typography>
                                    <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Sea Food</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Steaks</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Shakes</Typography>
                                    </Stack>
                                    <Divider />
                                    <Box sx={{display:"flex", flexDirection:"row", gap:1}}>
                                        <Box sx={{height:"40px", width:"40px"}}>
                                            <img src={Image2} alt="" className="h-full w-full object-cover"/>
                                        </Box>
                                        <Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <AccessTimeIcon sx={{fontSize:14, color:"green"}}/>
                                                <Typography sx={{fontSize:14, color:"#C70039"}}>12:01 am - 11:59 pm</Typography>
                                            </Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <LocationOnIcon sx={{fontSize:14, color:"gray"}}/>
                                                <Typography sx={{fontSize:14, color:"gray"}}>Kathmandu, Nepal</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia 
                                    component={"img"}
                                    sx={{height:{xs:"140px", sm:"170px", md:"210px"}}}
                                    image={Image1}
                                    alt="Res"
                                />
                                <CardContent sx={{display:"flex", flexDirection:"column", gap:2}}>
                                    <Typography sx={{fontSize:22, fontWeight:600, textTransform:"capitalize"}}>
                                        Organic tasty food
                                    </Typography>
                                    <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Sea Food</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Steaks</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Shakes</Typography>
                                    </Stack>
                                    <Divider />
                                    <Box sx={{display:"flex", flexDirection:"row", gap:1}}>
                                        <Box sx={{height:"40px", width:"40px"}}>
                                            <img src={Burger} alt="" className="h-full w-full object-cover"/>
                                        </Box>
                                        <Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <AccessTimeIcon sx={{fontSize:14, color:"green"}}/>
                                                <Typography sx={{fontSize:14, color:"#C70039"}}>12:01 am - 11:59 pm</Typography>
                                            </Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <LocationOnIcon sx={{fontSize:14, color:"gray"}}/>
                                                <Typography sx={{fontSize:14, color:"gray"}}>Kathmandu, Nepal</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia 
                                    component={"img"}
                                    sx={{height:{xs:"140px", sm:"170px", md:"210px"}}}
                                    image={Image2}
                                    alt="Res"
                                />
                                <CardContent sx={{display:"flex", flexDirection:"column", gap:2}}>
                                    <Typography sx={{fontSize:22, fontWeight:600, textTransform:"capitalize"}}>
                                        Organic tasty food
                                    </Typography>
                                    <Stack spacing={1} direction={"row"} useFlexGap flexWrap={"wrap"}>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Sea Food</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Steaks</Typography>
                                        <Typography sx={{bgcolor:"#C0C0C025", borderRadius:1, paddingX:1, paddingY:"4px", fontSize:14}}>Shakes</Typography>
                                    </Stack>
                                    <Divider />
                                    <Box sx={{display:"flex", flexDirection:"row", gap:1}}>
                                        <Box sx={{height:"40px", width:"40px"}}>
                                            <img src={Image2} alt="" className="h-full w-full object-cover"/>
                                        </Box>
                                        <Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <AccessTimeIcon sx={{fontSize:14, color:"green"}}/>
                                                <Typography sx={{fontSize:14, color:"#C70039"}}>12:01 am - 11:59 pm</Typography>
                                            </Box>
                                            <Box sx={{display:"flex", flexDirection:"row", gap:1, alignItems:"center"}}>
                                                <LocationOnIcon sx={{fontSize:14, color:"gray"}}/>
                                                <Typography sx={{fontSize:14, color:"gray"}}>Kathmandu, Nepal</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Box sx={{display:"flex", justifyContent:"flex-end", width:"100%", marginTop:2}}>
                            <Button variant="contained" sx={{borderRadius:20}}>Find More</Button>
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop:7}}>
                    <Typography sx={{textTransform:"uppercase", fontWeight:600, color:"	#FFBF00", textAlign:"center"}}>Today's special</Typography>
                    <Typography sx={{fontSize:40, fontWeight:900, textTransform:"capitalize", textAlign:"center"}}>Best Combo Deals</Typography>
                    <Box marginTop={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card>
                                    <CardMedia
                                        component={"img"}
                                        src={Burger}
                                        sx={{height:{xs:80, sm:110, md:140}, objectFit:"contain"}}
                                    />
                                    <CardContent sx={{display:"flex", flexDirection:"column", gap:1}}>
                                        <Typography  sx={{fontSize:20, fontWeight:600}}>Sicilian Pizza</Typography>
                                        <Typography sx={{fontSize:14, color:"GrayText"}}>
                                            Medium size special tikka heart pizza Green Peppers, Mushrooms, Onions,
                                        </Typography>
                                        <Box sx={{display:"flex", justifyContent:"space-between", gap:1, alignItems:"flex-end"}}>
                                            <Box sx={{display:"flex", flexDirection:"column"}}>
                                                <Typography sx={{fontSize:14, fontWeight:600, color:"gray"}}><strike>$ 55.00</strike></Typography>
                                                <Typography sx={{fontSize:14, fontWeight:600, color:'red'}}>$ 45.00</Typography>
                                            </Box>
                                            <CardActions>
                                                <Button size="small" variant="contained" >Order Now</Button>
                                            </CardActions>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                </Box>
                {/* Home About us Section */}
                <Box sx={{backgroundImage:`url(${Banner})`, backgroundRepeat:"no-repeat", marginY:7}}>
                    <Box sx={{background:"#00000070", paddingY:7}}>
                        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:1, maxWidth:{md:"60%", sm:"75%", xs:"100%"}, marginX:"auto"}}>
                            <Typography sx={{fontSize:22, color:"white", textAlign:"center"}}>About Us</Typography>
                            <Typography sx={{fontSize:16, color:"white", textAlign:"center"}}>
                                Foodmandu is the fastest, easiest and most convenient way to enjoy 
                                the best food of your favourite restaurants at home, at the office or wherever you want to.
                            </Typography>
                            <Typography sx={{fontSize:16, color:"white", textAlign:"center"}}>
                                We know that your time is valuable and sometimes every minute in
                                the day counts. That’s why we deliver! So you can spend more time doing the things you love.
                            </Typography>
                        </Box>
                    </Box>
            </Box>
        </div>
    )
}
export default Home