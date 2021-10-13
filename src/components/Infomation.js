import React, { Component }  from "react";
import styled from 'styled-components'

const InfoDiv = styled.div`
    margin: 0px auto;
    padding: 30;
    color: white;
    padding-bottom: 10px;
    
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