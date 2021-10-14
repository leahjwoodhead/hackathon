import React, { Component }  from "react";
import styled from 'styled-components'
import './styles/Comments.css'

const InfoDiv = styled.div`
    border: 1px solid white;
    width: 500px;
    color: white;
    font-size: 10px;
    margin: 0 auto;
    height: 40px;
    margin-top: 10px;
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