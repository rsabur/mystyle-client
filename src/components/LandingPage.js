import LoginSignup from './LoginSignup'

function LandingPage({models}) {
    return (
        <div className="landing-page">
            <h1 style={{fontFamily: 'Serif'}} ><i>Welcome to Your Personal Virtual Fitting Room!</i></h1>
            <LoginSignup models={models} />
        </div>
    )
}

export default LandingPage;