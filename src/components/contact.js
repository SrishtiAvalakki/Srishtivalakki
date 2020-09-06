import React, { Component } from 'react';
import { Grid , Cell, List, ListItem, ListItemContent, Card } from 'react-mdl';
class Contact extends Component {
    render(){
        return(
        
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col = {6}>
                        <h2 style={{fontSize: '50px',fontFamily:'Caveat'}}>Srishti Avalakki</h2>
                        <img src={process.env.PUBLIC_URL + 'img/dp.JPG'} alt="display" className="avatar-img"
                        style={{height:'300px'}} />
                    </Cell>
                    <Cell col = {6}>
                    <h2 style={{fontSize: '50px',fontFamily:'Caveat'}}>Contact Me</h2>
                    <hr/>
                    <div>
                    <List className="contact-list">
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px',fontFamily:'Caveat'}}><i class="fa fa-phone-square"></i> +1(757)-632-2976</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '30px',fontFamily:'Caveat'}}><i class="fa fa-envelope"></i> srishtilakki@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '30px',fontFamily:'Caveat'}}><i class="fa fa-skype"></i> SkypeID:SrishtiAvalakki</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px',fontFamily:'Caveat'}}><i class="fa fa-linkedin-square"></i> www.linkedin.com/in/srishti-pramod-avalakki
</ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact