import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content,Button } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={
							<a
								style={{
									textDecoration: 'none',
									color: 'white',
									fontFamily: 'LTC Bodoni 175',
									fontSize: '17px'
								}}
								className='btn btn-5'
								href='/'
							>
								Home
							</a>
						}  scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Home">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
