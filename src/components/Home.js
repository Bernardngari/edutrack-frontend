import React from "react";
import Container from "./Container";
import Form from "./Form";
import LandingPage from "./landingpagetexts";

function Home(){
	return(
		<Container>
			<div  className="wrap-home">
				<div className="side-bar">
						<Form />
				</div>
						<div className="main-home-content">
							<LandingPage />
						</div>
			</div>
			
		</Container>
	)
}

export default Home;
