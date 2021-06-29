import React from 'react'
import {IconButton} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function Buttons() {
    return (
        <div><h2> Button</h2>
        <div>
           <Button variant ="contained" color="primary">hello</Button>
           <Button variant ="outlined" color="secondary">hello</Button>
           <Button>Default</Button>
            <Button color="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button href="https://www.google.com" variant="contained" color="primary"> Link</Button>
        </div>
            <h2>icon with button and alone itself</h2>
            <div>
            {/* material ui pe jao sab pata lag jayega kispe kya kya  */}
            {/* property lga skte he */}
            <IconButton>
                <DeleteIcon></DeleteIcon>
                {/* <EmojiEmotionsIcon></EmojiEmotionsIcon> */}
            </IconButton>
           <Button variant="contained" color="secondary"style={{marginRight:"10px"}} size="large"     
            startIcon={<EmojiEmotionsIcon></EmojiEmotionsIcon>}>Primary</Button>
            <Button variant="contained" color="primary" startIcon={<DeleteIcon></DeleteIcon>}>Primary</Button>
            <Button variant="contained" color="secondary"
             size="medium" style={{marginLeft:"10px"}}
            endIcon={<EmojiEmotionsIcon></EmojiEmotionsIcon>}>Primary</Button>
       
       <IconButton>
                {/* <DeleteIcon></DeleteIcon> */}
                <EmojiEmotionsIcon></EmojiEmotionsIcon>
            </IconButton>


            </div>
           
        </div>
    )
}

export default Buttons
