import React from 'react';
import Popup from "reactjs-popup";


export const PlayButton = (props) => {
    return (
        <Popup trigger={<div id="buttonDiv" style={{color: 'white'}}><p>Help</p></div> } modal
        closeOnDocumentClick>
           <div id="popUpHelp">
                <p> Each friend clicks on his turn.
                    If someone has done the following question
                    he takes a shot (Or sip! Depends how many rounds you want to go)
                    Beware of Trap missions!
                </p> 
           </div>
        </Popup>
    )
}