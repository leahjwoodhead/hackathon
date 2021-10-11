import react, {Component} from "react";
import styled, { withTheme } from 'styled-components'
import { Link } from "react-router-dom"

const MainDiv = styled.div`
  width: 10%;
  height: 200px;
  margin-left: 250px;
  position: absolute;
  margin-top: 70px;
`
const List = styled.ul`
    color: white;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const ListItem = styled.li`
    padding: 10px;
`

const linkStyle = {
    color: "white",
    "text-decoration": "none"
}

class DashboardSideBar extends Component {

  render(){
    return (
      <div>
          <MainDiv> 
              <List>
                <ListItem>
                    <Link to="/Dashboard/Story" style={linkStyle}>Story</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Podcast" style={linkStyle}>Podcast</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Book" style={linkStyle}>Book</Link>
                </ListItem>
                <ListItem>
                    <Link to="/Dashboard/Music" style={linkStyle}>Music</Link>
                </ListItem>
                </List>  
          </MainDiv>
      </div>
    
    );
  }
}

export default DashboardSideBar;