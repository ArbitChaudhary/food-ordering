import { Box, Grid, Typography } from "@mui/material"
import Special from  "../../../assets/Special.webp"
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';


const Speciality = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box sx={{width:"100%", height:"100%", overflow:"hidden"}}>
                    <img src={Special} alt="" className="h-full w-full object-contain"/>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex", flexDirection:"column", gap:3}}>
                <Typography sx={{fontSize:30, textTransform:"capitalize"}}>What makes our menu special?</Typography>
                <Box sx={{display:"flex", gap:2}}>
                    <KebabDiningIcon sx={{color:"#AA0000", rotate:"45deg", fontSize:35, marginTop:2}}/>
                    <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
                        <Typography sx={{fontSize:22, color:"#AA0000", fontWeight:600}}>Pure Ingredients</Typography>
                        <Typography sx={{color:"gray", fontSize:16}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis 
                            inventore atque consequuntur consequatur! Inventore eligendi similique eius. Vel, officia?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", gap:2}}>
                    <LocalDiningIcon sx={{color:"#AA0000", fontSize:35, marginTop:2}}/>
                    <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
                        <Typography sx={{fontSize:22, color:"#AA0000", fontWeight:600}}>Sustainibility</Typography>
                        <Typography sx={{color:"gray", fontSize:16}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis 
                            inventore atque consequuntur consequatur! Inventore eligendi similique eius. Vel, officia?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", gap:2}}>
                    <RamenDiningIcon sx={{color:"#AA0000", fontSize:35, marginTop:2}}/>
                    <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
                        <Typography sx={{fontSize:22, color:"#AA0000", fontWeight:600}}>Environmentalism</Typography>
                        <Typography sx={{color:"gray", fontSize:16}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis 
                            inventore atque consequuntur consequatur! Inventore eligendi similique eius. Vel, officia?
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Speciality