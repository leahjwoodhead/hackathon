import react, {Component} from "react";
import styled, { withTheme } from 'styled-components'
import { Link } from "react-router-dom"
import StoryIcon from '../images/icons/story.png'
import EventIcon from '../images/icons/event.png'
import PodcastIcon from '../images/icons/podcast.png'
import BookIcon from '../images/icons/book.png'
import MusicIcon from '../images/icons/music.png'

const MainDiv = styled.div`
  width: 10%;
  margin-left: 320px;
  position: absolute;
  margin-top: 100px;
`
const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const ListItem = styled.li`
    padding: 10px;
`

const linkStyle = {
    "text-decoration": "none"
}


class DashboardSideBar extends Component {

  render(){
    return (
      <div>
          <MainDiv> 
              <List>
                <ListItem>
                    <Link to="/Dashboard/Story" style={linkStyle}><img src={StoryIcon} alt="StoryIcon" height={75}/></Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Event" style={linkStyle}><img src={EventIcon} alt="EventIcon" height={75}/></Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Podcast" style={linkStyle}><img src={PodcastIcon} alt="PodcastIcon" height={75}/></Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Book" style={linkStyle}><img src={BookIcon} alt="BookIcon" height={75}/></Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Music" style={linkStyle}><img src={MusicIcon} alt="MusicIcon" height={75}/></Link>
                </ListItem>
                </List>  
          </MainDiv>
      </div>
    
    );
  }
}

export default DashboardSideBar;