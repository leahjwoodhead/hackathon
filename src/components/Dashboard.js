import React, { Component } from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import DashboardSideBar from './DashboardSideBar';
import { data } from '../data/data'
import Info from './Infomation';

const MainDiv = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 30px auto;
  width: 50%;
  height: auto;
`

const PageButtonLeft = styled.button`
  color: white;
  font-size: 10px;
  border: none;
`
const PageButtonRight = styled.button`
  color: white;
  font-size: 10px;
  border: none;
  padding: 0px;
`
const ButtonDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: space-between;
  padding: 0px;
`

class Dashboard extends Component {

  state = {
    topic: "",
    data: "",
    pages: 1,
    p: 1
  }

  componentDidUpdate(prevProps, prevState) {
    const topic = this.props.match.params.topic
    const {p} = this.state

    if (prevProps !== this.props  || prevState.p !== p) {
      if (topic === "Story") {
        this.setState({topic: "Story", data: data[p].Story})
      } else if (topic === "Podcast") {
        this.setState({topic: "Podcast", data: data[p].Podcast})
      } else if (topic === "Book") {
        this.setState({topic: "Book", data: data[p].Book})
      } else if (topic === "Music") {
        this.setState({topic: "Music", data: data[p].Music})
      } else if (topic === "Event") {
        this.setState({topic: "Event", data: data[p].Event})
      }
    }

  }

  componentDidMount() {
    const topic = this.props.match.params.topic
    const pages = data.length - 1
    const p = data.length - 1
    if (topic === "Story") {
      this.setState({topic: "Story", data: data[pages].Story, pages, p})
    } else if (topic === "Podcast") {
      this.setState({topic: "Podcast", data: data[pages].Podcast, pages, p})
    } else if (topic === "Book") {
      this.setState({topic: "Book", data: data[pages].Book, pages, p})
    } else if (topic === "Music") {
      this.setState({topic: "Music", data: data[pages].Music, pages, p})
    } else if (topic === "Event") {
      this.setState({topic: "Event", data: data[pages].Event, pages, p})
    }
  }

  handleClick(event) {
    this.setState(currState => {
      const newState = {...currState}
      if (event.target.id === "yesterday") newState.p--
      if (event.target.id === "next day") newState.p++
      return newState
    })
  }

  render(){
    const {pages, p} = this.state
    return (
      <div>
        <Nav/>
        <DashboardSideBar/>
              <ButtonDiv>
                  {(p > 0) ? <PageButtonRight id="yesterday" onClick={(event) => this.handleClick(event)}>yesterday</PageButtonRight> : <p></p>}
                  {(p < pages) ? <PageButtonLeft id="next day" onClick={(event) => this.handleClick(event)}>next day</PageButtonLeft> : <p></p>}
              </ButtonDiv>
          <MainDiv> 
                <Info data={this.state.data} topic={this.state.topic}/>
          </MainDiv>
      </div>
    );
  }
}

export default Dashboard;