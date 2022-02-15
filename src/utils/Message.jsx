import React from "react";

const Message = (tile, body)=>{
	return(
		<React.Fragment>
			<span>{tile || ""}</span>
			<br/>
			<span>{body || ""}</span>
		</React.Fragment>
	)
};

export default Message;