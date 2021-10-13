import React, { Component }  from "react";
import styled from 'styled-components'
import './styles/Information.css'

const InfoDiv = styled.div`
    margin: 0px auto;
    color: white;
    padding-bottom: 10px;
    background-color:  grey;
    margin-top:20px;
    width: 531px;
    height: 420px; 
    border-radius: 25px;
    box-shadow: 5px 5px#E74A36;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
    border-left: 5px solid black;
    margin-top:110px;
`

class Info extends React.Component {
    render() { 
        return <div>
            <InfoDiv>
                <h5>{this.props.topic}</h5>
                <p>{this.props.data.title ? this.props.data.title : null}</p>
                <p>{this.props.data.text ? this.props.data.text : null}</p>
                <p>{this.props.data.author ? this.props.data.author : null}</p>
                <p>{this.props.data.host ? this.props.data.host : null}</p>
                <p>{this.props.data.description ? this.props.data.description : null}</p>
                <p>{this.props.data.artist ? this.props.data.artist : null}</p>
                <p>{this.props.data.year ? this.props.data.year : null}</p>
                <p>{this.props.data.location ? this.props.data.location : null}</p>
                <p>{this.props.data.time ? this.props.data.time : null}</p>
                <a href={this.props.data.link}>{this.props.data.link ? "Click here for more info" : null}</a>
            </InfoDiv>
        </div>;
    }
}
 
export default Info;