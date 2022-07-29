import Container from "./Container"
function LandingPage(){
	return(
		<Container>
			<div className="landing">
					<p>
									<b>W</b>elcome to <span>eduTrack</span>, the web provision that enables you to  track 	your study action items easier.
										There has never been an easier way to save your action items and monitor progress.
										Do you recall a moment when you found a link to an intriguing site but promptly forgot it?
										It is now possible to save that for later and update the completion status as you action.
										If you love tables, the better. Who doesn't love tables?
										Navigate to the NewTask page and create your first action item. For long links, we recommend using <a target="_blank" href="https://esputnik.com/en/blog/10-best-url-shorteners-how-create-good-looking-links">url shorteners</a>.
						</p>
			</div>
		</Container>

	)
}

export default LandingPage;