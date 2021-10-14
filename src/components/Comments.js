import React, { Component }  from "react";
import styled from 'styled-components'
import './styles/Comments.css'

const InfoDiv = styled.div`
    border: 1px solid white;

    width: 500px;
    color: white;
    font-size: 10px;
    margin: 0 auto;
    
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