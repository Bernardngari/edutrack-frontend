import React from "react";
import Container from "./Container";
//import Form from "./NewTask";
import LandingPage from "./Landingpagetexts";

function Home(){
	return(
		<Container>
			<div  className="wrap-home">
					<div className="side-bar">
							<Container><div className="contact-button">Email</div></Container>
							<Container><div className="contact-button">Tweet</div></Container>
							<Container><div className="contact-button">WhatsApp</div></Container>
							<Container><div className="contact-button">Direct Call</div></Container>
					</div>
						<div className="main-home-content">
							<LandingPage />
						</div>
			</div>
		</Container>
	)
}

export default Home;
