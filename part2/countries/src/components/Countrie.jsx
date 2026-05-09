const Countrie = ({countrie}) =>{
	const { name, capital, area, languages, flags} = countrie;
	const commonName = name.common;
	const languagesArray = Object.entries(languages);
	const svgFlag = flags.svg;

	return(
		<>
			<h1>{commonName}</h1>
			<p>{capital}</p>
			<p>Area {area}</p>

			<h2>Languages</h2>
			<ul>
				{languagesArray.map(([llave, valor]) => (
					<li key={llave}>{valor}</li>
				))}
			</ul>
			<br />
			<img src={svgFlag} alt={"Flag" + commonName}  width="200" lenght="200"/>
		</>
	);
}

export default Countrie;