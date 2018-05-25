import React from 'react';
import Popup from "reactjs-popup";


export const AddQuestion = (props) => {
    return (
        <Popup trigger={<button id="addQuestion">Add Question</button>} modal
        closeOnDocumentClick>
        <div style={{width: '100%'}}>
            <input onChange={props.onChange}id="addQuestionInput" placeholder="Never have i ever"></input>
            <button type="submit" style={{width: '100%'}} onClick={props.onClick}>Add</button>
            </div>
        </Popup>
    )
}
