import React, { Component } from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import DashboardSideBar from './DashboardSideBar';
import { data } from '../data/data'
import './styles/Dashboard.css'
import Info from './Information';
import LeftIcon from '../images/icons/left.png'
import RightIcon from '../images/icons/right.png'
import CommentSubmission from './CommentSubmission'
import Comments from './Comments'

const MainDiv = styled.div`
  margin: 30px auto;
  width: 50%;
  height: 50%;
`

const CommentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
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
  width: 22%;
  justify-content: space-between;
  padding: 0px;
  position: absolute;
  margin-left: 38%;
  padding-top: 2%;
`

class Dashboard extends Component {

  state = {
    topic: "",
    data: "",
    pages: 1,
    p: 1,
    comments: []
  }

  componentDidUpdate(prevProps, prevState) {
    const topic = this.props.match.params.topic
    const { p } = this.state

    if (prevProps !== this.props || prevState.p !== p) {
      if (topic === "Story") {
        this.setState({ topic: "Story", data: data[p].Story, comments: data[p].Story.comments })
      } else if (topic === "Podcast") {
        this.setState({ topic: "Podcast", data: data[p].Podcast, comments: data[p].Podcast.comments })
      } else if (topic === "Book") {
        this.setState({ topic: "Book", data: data[p].Book, comments: data[p].Book.comments })
      } else if (topic === "Music") {
        this.setState({ topic: "Music", data: data[p].Music, comments: data[p].Music.comments })
      } else if (topic === "Event") {
        this.setState({ topic: "Event", data: data[p].Event, comments: data[p].Event.comments })
      }
    }

  }

  componentDidMount() {
    const topic = this.props.match.params.topic
    const pages = data.length - 1
    const p = data.length - 1


    if (topic === "Story") {
      this.setState({ topic: "Story", data: data[pages].Story, pages, p, comments: data[pages].Story.comments })
    } else if (topic === "Podcast") {
      this.setState({ topic: "Podcast", data: data[pages].Podcast, pages, p, comments: data[pages].Podcast.comments })
    } else if (topic === "Book") {
      this.setState({ topic: "Book", data: data[pages].Book, pages, p, comments: data[pages].Book.comments })
    } else if (topic === "Music") {
      this.setState({ topic: "Music", data: data[pages].Music, pages, p, comments: data[pages].Music.comments })
    } else if (topic === "Event") {
      this.setState({ topic: "Event", data: data[pages].Event, pages, p, comments: data[pages].Event.comments })
    }
  }

  handleClick(event) {
    this.setState(currState => {
      const newState = { ...currState }
      if (event.target.id === "yesterday") newState.p--
      if (event.target.id === "next day") newState.p++
      return newState
    })
  }

  handleSubmission = (comment) => {
    this.setState(currState => {
      const newState = { comments: [comment, ...currState.comments] }
      return newState
    })
  }

  render() {
    const { pages, p, topic } = this.state
    return (
      <div className="MainDashboard">
        <Nav />
        <DashboardSideBar />
        <ButtonDiv>
          {(p > 0) ? <img src={LeftIcon} alt="LeftIcon" height={75} id="yesterday" onClick={(event) => this.handleClick(event)}></img> : <p></p>}
          {(p < pages) ? <img src={RightIcon} alt="RightIcon" height={75} id="next day" onClick={(event) => this.handleClick(event)}></img> : <p></p>}
        </ButtonDiv>
        <MainDiv>
          <Info data={this.state.data} topic={this.state.topic} />
        </MainDiv>
        <CommentsDiv>
          {(this.state.data && (this.state.comments.length > 0)) ? this.state.comments.map(comment => {
            return <Comments comment={comment} />
          }) : <p>This article does not have any comments</p>}
          <CommentSubmission handleSubmission={this.handleSubmission} />
        </CommentsDiv>
      </div>
    );
  }
}

export default Dashboard;