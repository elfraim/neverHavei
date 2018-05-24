import React from 'react';
import Popup from "reactjs-popup";


export const AddQuestion = (props) => {
    return (
        <div id="questionBtnDiv">
        <Popup trigger={<button id="addQuestion" style={{}}>Add Question</button>} modal
        closeOnDocumentClick>
            <input id="addQuestionInput" placeholder="Never have i ever"></input>
        </Popup>
        </div>
    )
}
