import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    {/* <cell col={12}> */}
                        {/* <img
                            // src ="https://www.shareicon.net/data/2015/09/18/103162_user_512x512.png"
                            src = "img/author.jpg" 
                            alt="avatar"
                            className="avatar-img"
                        /> */}
                        <img src={process.env.PUBLIC_URL + 'img/dp.JPG'} alt="display" className="avatar-img"></img>
                        <div className="banner-text">
                            <h1>WEB DEVELOPER</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | React | NodeJS | JavaScript | PHP | MySQL | MongoDB | Redux | Python</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/srishti-pramod-avalakki" rel="nooperner noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/SrishtiAvalakki" rel="nooperner noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    {/* </cell> */}
                </Grid> 
            </div>
        )
    }
}
export default Landing