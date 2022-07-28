import React from "react";
import Container from "./Container";
//import Form from "./NewTask";
import LandingPage from "./Landingpagetexts";

function Home(){
	return(
		<Container>
			<div  className="wrap-home">
					<div className="side-bar">
							<Container><a target="_blank" href="mailto:bernardngari.ke@gmail.com"><div className="contact-button">Email</div></a></Container>
							<hr/>
							<Container><a target="_blank" href="https://www.linkedin.com/in/bernardngari/"><div className="contact-button">LinkedIn</div></a></Container>
							<hr/>
							<Container><a target="_blank" href="https://wa.me/+254700208172"><div className="contact-button">WhatsApp</div></a></Container>
							<hr/>
							<Container><a target="_blank" href="tel:+254700208172"><div className="contact-button">Direct Call</div></a></Container>
							<hr/>
					</div>
						<div className="main-home-content">
							<LandingPage />
						</div>
			</div>
		</Container>
	)
}

export default Home;
