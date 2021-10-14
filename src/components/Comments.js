import React, { Component }  from "react";
import styled from 'styled-components'
import './styles/Comments.css'

const InfoDiv = styled.div`
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

class Info extends React.Component {
    render() { 
        return <div>
            <InfoDiv>
                {console.log(this.props.comment)}
                <p>{this.props.comment.comment}</p>
                <p>{this.props.comment.date}</p>
                <p>{this.props.comment.user}</p>
            </InfoDiv>
        </div>;
    }
}
 
export default Info;