const Notification = ({message, status}) => {
	if(message == null) return null;
	
	return(
		<div className={status? "error" :"succesful"}>
			{message}
		</div>
	)
}

export default Notification;