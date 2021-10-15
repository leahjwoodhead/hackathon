import React, { Component }  from "react";
import styled from 'styled-components'

const InfoDiv = styled.div`
width: 500px;
font-size: 10px;
margin: 0 auto;
margin-top: 10px;
border: 1px solid white;
color: white;
font-size: 10px;
margin: 0 auto;
margin: 0px auto;
color: white;
background-color:  grey;
width: 531px;
height: 50px;; 
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
  display: flex;
  padding: 5px;
`

const InputComment = styled.input`
  width: 90%;
`

class Info extends React.Component {
    state = {
        comment: ""
    }

    handleSubmission(event, commentToAdd) {
        event.preventDefault()
        const comment = {
            "comment": commentToAdd,
            "date": "14/09/2021",  
            "user": "Greta"
        }
        this.setState({comment: ""})
        this.props.handleSubmission(comment)
    }
    
    handleChange(event) {
        this.setState({comment: event.target.value})
    }

    render() { 
        return <div>
              <InfoDiv>
                <Form onSubmit={(event) => this.handleSubmission(event, this.state.comment)}>
                  <InputComment value={this.state.comment} type="text"placeholder="Add Comment..." onChange={(event) => this.handleChange(event)}></InputComment>
                  <input type="submit"></input>
                </Form>
              </InfoDiv>
        </div>;
    }
}
 
export default Info;