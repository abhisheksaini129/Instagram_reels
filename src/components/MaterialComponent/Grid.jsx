import React from 'react'
import {Grid,Container,Paper,makeStyles} from "@material-ui/core";
function Grids() {
    let useStyles=makeStyles({
            size:{
                height:"30vh",
                backgroundColor:"lightpink"
            },
            color:{
                color:"grey"
            }
    })
    let classes=useStyles();
    return (
        //classes
        
        <div>
            <Container>
                <Grid container >
                <Grid item xs={5} sm={3} md={5} lg={10}>
                    <Paper className={classes.size}></Paper>
                </Grid>
                <Grid item xs={5} sm={3} md={5} lg={2}>
                    <Paper className={classes.size}>Hello</Paper>
                </Grid>
                <Grid item xs={5} sm={6} md={2} >
                    <Paper className={classes.size} >Hello</Paper>
                </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Grids
