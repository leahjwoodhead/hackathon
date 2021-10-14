import React, { Component } from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import DashboardSideBar from './DashboardSideBar';
import { data } from '../data/data'
import './styles/Dashboard.css'
import Info from './Information';
import LeftIcon from '../images/icons/left.png'
import RightIcon from '../images/icons/right.png'
import Comments from './Comments'

const MainDiv = styled.div`
  margin: 30px auto;
  width: 50%;
  height: 200px;
`

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
`

const InfoDiv = styled.div`
    width: 500px;
    font-size: 10px;
    margin: 0 auto;
    height: 40px;
    margin-top: 10px;
    border: 1px solid white;
    color: white;
    font-size: 10px;
    margin: 0 auto;
    margin: 0px auto;
    color: white;
    background-color:  grey;
    width: 531px;
    height: 70px; 
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 25px;
    box-shadow: 3px 5px#E74A36;
    border-bottom: 3px solid black;
    border-top: 3px solid black;
    border-right: 3px solid black;
    border-left: 3px solid black;
`

const Form = styled.form`
`

const InputComment = styled.input`
  width: 97%;
  padding: 5px;
  margin-bottom:5px;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  border-right: 3px solid black;
  border-left: 3px solid black;
  border-radius: 25px;
`

const ButtonDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 28.5%;
  justify-content: space-between;
  padding: 0px;
  position: absolute;
  margin-left: 38%;
  padding-top: 20px;
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


  getDate(daysToSubtract){
    let today = new Date();
    const dd = String(today.getDate() - daysToSubtract).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0'); //January is 0!

    today = dd + "/" + mm;
    return today
  }

  render(){
    const {pages, p, topic} = this.state
    return (
      <div className="MainDashboard">
        <Nav/>
        <DashboardSideBar/>
        <ButtonDiv>
                  {(p > 0) ? <img src={LeftIcon} alt="LeftIcon" height={75} id="yesterday" onClick={(event) => this.handleClick(event)}></img> : <p></p>}
                  {(p > 0) ? <p>{this.getDate(pages - p)}</p> : <p></p>}
                  {(p < pages) ? <img src={RightIcon} alt="RightIcon" height={75} id="next day" onClick={(event) => this.handleClick(event)}></img> : <p></p>}
                  {(p < pages) ? <p>{this.getDate(pages - (p + 2))}</p> : <p></p>}
                  </ButtonDiv>
          <MainDiv> 
                <Info data={this.state.data} topic={this.state.topic}/>
          </MainDiv>
          <CommentsDiv>
            {(this.state.data && (this.state.data.comments.length > 0)) ? this.state.data.comments.map(comment => {
              return <Comments comment={comment}/>
            }) : <p>This article does not have any comments</p>}
              <InfoDiv>
                <Form>
                  <InputComment  type="text"placeholder="Add Comment..."></InputComment >
                  <input type="submit"></input>
                </Form>
              </InfoDiv>
          </CommentsDiv>
      </div>
    );
  }
}

export default Dashboard;