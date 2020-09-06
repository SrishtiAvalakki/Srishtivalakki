import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src={process.env.PUBLIC_URL + 'img/dp.JPG'} alt="display" className="avatar-img"
                        style={{height:'300px'}} />
            </div>

            <h2 style={{paddingTop: '2em',fontSize:'50px',fontFamily:'Caveat'}}>Srishti Avalakki</h2>
            <h4 style={{color: 'grey' ,fontSize:'40px',fontFamily:'Caveat'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Experienced in creating Responsive Web Design applications using Reactjs, Nodejs and JavaScript framework. Proficiency in database design, normalization. Relentless problem solver applying analytical, design, and technical skills to supervise Software Development Lifecycle. Experience in Agile, test driven and customer-focused product development.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5 style={{fontSize:'30px',fontFamily:'Caveat'}}>Phone</h5>
            <p>(757) 632-2976</p>
            <h5 style={{fontSize:'30px',fontFamily:'Caveat'}}>Email</h5>
            <p>srishtilakki@gmail.com</p>
            <h5 style={{fontSize:'30px',fontFamily:'Caveat'}}>Web</h5>
            <p>https://www.cs.odu.edu/~apramod/Srishti/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontSize:'30px',fontFamily:'Caveat'}}>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Old Dominion University"
              schoolDescription="Masters in Computer Science "
               />

               <Education
                 startYear={2014}
                 endYear={2018}
                 schoolName="Acharya Institute of Technology"
                 schoolDescription="Bachelor of Engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2 style={{fontSize:'30px',fontFamily:'Caveat'}}>Experience And certifications</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Mokxa Technologies"
              jobDescription="Created Website which handles all the purchase orders for medical devices in a hospital, implemented features such as push notification & email verification on Request of a new Order.Implemented an approval process with the request placed. Also implemented features such as Employee Dashboard, Employee Application Tracking, QR Code."
              />

              <Experience
                startYear={2018}
                endYear={2020}
                jobName="Graduate research Assistant"
                jobDescription="Developed Projects in Adobe Captivate, Implemented the website to store the current Logged in information of student and getting the ID’s of each interaction on the project into a word file using JavaScript.Built a fully Functional recipe application using ReactJS and NodeJS which further made calls using the Edamam API.Worked On maintaining and creating of various websites. Also worked on API's and Front End Technologies."
                />
                <Experience
              startYear={2019}
              endYear={2020}
              jobName="FUll Stack Web development with React"
              jobDescription="Designed and developed a Food Cuisine website using React.js. On the server side, implemented NoSQL databases using MongoDB , worked within a Node.js environment , and communicated to the client side through a RESTful API."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 style={{fontSize:'30px',fontFamily:'Caveat'}}>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />
                    <Skills
                    skill="PHP"
                    progress={80}
                />
                    <Skills
                    skill="MySql"
                    progress={70}
                    />
                     <Skills
                    skill="Python"
                    progress={90}
                    />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;