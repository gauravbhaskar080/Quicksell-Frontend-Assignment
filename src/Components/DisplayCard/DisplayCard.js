import React from 'react'

import "../../Stylesheets/DisplayCard.css";
import * as icons from "../../Assets/index.js";

const DisplayCard = (props) => {
  const getIconForStatus = (status) => {
    switch (status) {
        case "In progress":
            return icons.inProgress;
        case "Done":
            return icons.done;
        case "Cancelled":
            return icons.cancelled;
        case "Todo":
            return icons.todo;
        case "Backlog":
            return icons.backlog;
    }
  };
  return (
    <>
       <div className="card__container">
            <div className="cardID__wrapper">
                <div className="cardID">{props.cardDetails.id}</div>
                <div className="card__profile">
                    <div className="card__profile-initial">{props.cardDetails.userObj.name.slice(0, 2)}</div>
                    <div className={props.cardDetails.userObj.available ?"card__profile-available card__profile__available-true" : "card__profile-available"}></div>
                </div>
            </div>
            <div className="card__heading">
                <div className="card__icon">
                   <img src={getIconForStatus(props.cardDetails.status)} style={{ width: "1.5em" }} alt="status icon" />
                </div>
                <div className="card__title">{props.cardDetails.title}</div>
            </div>

            <div className="card__tag">
               {{0: <div className="card__tag-icon"><img src={icons.noPriority} style={{ width : "1.5em"}}/></div>,
                 1: <div className="card__tag-icon"><img src={icons.lowPriority} style={{ width : "1.5em"}}/></div>,  
                 2: <div className="card__tag-icon"><img src={icons.mediumPriority} style={{ width : "1.5em"}}/></div>, 
                 3: <div className="card__tag-icon"><img src={icons.highPriority} style={{ width : "1.5em"}}/></div>,  
                 4: <div className="card__tag-icon"><img src={icons.urgentPriorityGrey} style={{ width : "1.5em"}}/></div> 
                }[props.cardDetails.priority]}
                
                {props.cardDetails.tag.map((tag) => {
                    return(
                        <div className="card__tag-box">
                            <div className="card__tag-title">{tag}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default DisplayCard;