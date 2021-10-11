import React, { Component } from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import DashboardSideBar from './DashboardSideBar';
import { stories, podcasts, books, music } from '../data/data'

const MainDiv = styled.div`
  border: 1px solid white;
  margin: 80px auto;
  width: 50%;
  height: auto;
`

class Dashboard extends Component {

  state = {
    topicData: []
  }

  componentDidMount() {
    const topic = this.props.match.params.topic
    if (topic === "Story") {
      this.setState({topicData: stories})
    } else if (topic === "Podcast") {
      this.setState({topicData: podcasts})
    } else if (topic === "Book") {
      this.setState({topicData: books})
    } else if (topic === "Music") {
      this.setState({topicData: music})
    }
  }

  render(){
    return (
      <div>
        <Nav/>
        {console.log(this.props.match.params.topic, this.state.topicData)}
        <DashboardSideBar/>
          <MainDiv> 
              <div style={{ display: 'flex', justifyContent: 'center', padding: 30, color: 'white' }}>
                <div><h2>Dashboard </h2></div>
            </div>
          </MainDiv>
      </div>
    
    );
  }
}

export default Dashboard;