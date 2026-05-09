const ListCountrie = ({countrie, onClick}) =>{
	return(
		
		<p key={countrie.fifa}>
            {(countrie.name.common || countrie.name)+" "}
      <button onClick={onClick}>Show</button>
		</p> 
	);
}

export default ListCountrie;