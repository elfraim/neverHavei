import React from 'react';
import Popup from "reactjs-popup";

export const HelpButton = (props) => {
    return (
        <Popup trigger={<div id="buttonDiv" style={{color: 'white'}}><p id="helpButtonText">Help</p></div> } modal
        closeOnDocumentClick>
           <div id="popUpHelp" >
                <p>Different type of varations to play:</p>
                <p>1. "Classic" Take turns clicking, anyone who at some point in their lives has done the action that the first player says, must drink. </p>
                <p>2. "Modern" Take turns clicking, if there is no one taking a drink, then the one who said the particular "Never have I ever…" must take a drink</p>
                <p>3. "Full on" Take on Classic & Modern with an added rule that whenever only one person is drinking, that person must give a detailed account of why they are drinking.</p>
           </div>
        </Popup>
    )
}