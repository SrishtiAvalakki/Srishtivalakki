import React, {  Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
            this.state = {activeTab: 0};
        }
        toggleCategories() 
        {
            if(this.state.activeTab === 0){
            return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                     <CardTitle style={{color: 'white', height: '176px', background: 'url(https://media.gettyimages.com/photos/spices-and-herbs-frame-shot-from-above-on-rustic-wooden-table-picture-id1134444046?s=2048x2048) center / cover'}}></CardTitle>
                     <CardText>
                     Recipee App
                     </CardText>
                     <CardActions border>
                     <a href='https://github.com/SrishtiAvalakki/Portfolio'><Button colored>GitHub</Button></a>
                     </CardActions>
                     <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://en.ryte.com/wiki/nsfr_img_auth.php/d/d3/Hacker-01.png) center / cover'}}></CardTitle>
                    <CardText>
                    Wiki Hacker
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Wiki_Hacker'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnXq2vISxZevOd6ENez9RcENe2ysgNLgw1vQ&usqp=CAU) center / cover'}}></CardTitle>
                    <CardText>
                      Hacker News
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Hacker-News'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.asweetpeachef.com/wp-content/uploads/2014/04/SweetPeaChef_HowToFoodBlog_ver1_720x980.jpg) center / cover'}}></CardTitle>
                    <CardText>
                      Food Blog
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/FoodBlog'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1092571024%2F960x0.jpg%3Ffit%3Dscale) center / cover'}}></CardTitle>
                    <CardText>
                      To Do list
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/To-Do-list'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            
             </div>

            )
        }else if(this.state.activeTab ===1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                     <CardTitle style={{color: 'white', height: '176px', background: 'url(https://thumbs.dreamstime.com/b/blank-registration-form-abstract-manila-envelop-33670245.jpg) center / cover'}}></CardTitle>
                     <CardText>
                     Login/Registration Portal
                     </CardText>
                     <CardActions border>
                     <a href='https://github.com/SrishtiAvalakki/Simple-Login-Portal'><Button colored>GitHub</Button></a>
                     </CardActions>
                     <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.epclibrary.com/about-us/email.jpeg/@@images/image.jpeg) center / cover'}}></CardTitle>
                    <CardText>
                    Email Subscription
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Email-Subscription-page'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.irishtimes.com/polopoly_fs/1.3959186.1563369177!/image/image.jpg_gen/derivatives/box_620_330/image.jpg) center / cover'}}></CardTitle>
                    <CardText>
                      Social Media
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/FUSION_WEB-1'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/62W6METYTBBZ5LBZW2LKXEHGHM.png) center / cover'}}></CardTitle>
                    <CardText>
                      World Weather Reporter
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/World_Weather_Reporter'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://image.shutterstock.com/image-vector/tv-weather-forecast-female-red-260nw-642071956.jpg) center / cover'}}></CardTitle>
                    <CardText>
                      Information Visualization
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Information_Visualization'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn3.iconfinder.com/data/icons/calculation-2/64/Report-Calculator-512.png) center / cover'}}></CardTitle>
                    <CardText>
                      Tip Calculator
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Tip_Calculator'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            
             </div>

            )
        }else if(this.state.activeTab ===2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                     <CardTitle style={{color: 'white', height: '176px', background: 'url(https://inc42.com/wp-content/uploads/2017/09/zomato-1200x840.jpg) center / cover'}}></CardTitle>
                     <CardText>
                     Zomato App
                     </CardText>
                     <CardActions border>
                     <a href='https://github.com/SrishtiAvalakki/Zomato'><Button colored>GitHub</Button></a>
                     </CardActions>
                     <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgzGuWThUFvhfQb6StyGu9KPz1Cru6jHcCwQ&usqp=CAU) center / cover'}}></CardTitle>
                    <CardText>
                    Health Care
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Data-Science-with-Python'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'10px'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://image.shutterstock.com/image-vector/tv-weather-forecast-female-red-260nw-642071956.jpg) center / cover'}}></CardTitle>
                    <CardText>
                      Information Visualization
                     </CardText>
                    <CardActions border>
                    <a href='https://github.com/SrishtiAvalakki/Information_Visualization'><Button colored>GitHub</Button></a>
                    </CardActions>
                    <CardMenu style= {{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
             </div>

            )
        }
    }



    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Web</Tab>
                    <Tab>Data Science</Tab>
                </Tabs>
               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
             
            </div>
        )
    }
}
export default Projects