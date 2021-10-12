import React, { Component } from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import DashboardSideBar from './DashboardSideBar';
import { data } from '../data/data'

const MainDiv = styled.div`
  border: 1px solid white;
  margin: 80px auto;
  width: 50%;
  height: auto;
`

class Dashboard extends Component {

  state = {
    topic: ""
  }

  componentDidMount() {
    const topic = this.props.match.params.topic
    if (topic === "Story") {
      this.setState({topic: "story"})
    } else if (topic === "Podcast") {
      this.setState({topic: "podcast"})
    } else if (topic === "Book") {
      this.setState({topic: "book"})
    } else if (topic === "Music") {
      this.setState({topic: "music"})
    } else if (topic === "Event") {
      this.setState({topic: "event"})
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