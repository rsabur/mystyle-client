import LoginSignup from './LoginSignup'

function LandingPage() {
    return (
        <div className="landing-page">
            <h1 style={{fontFamily: 'Serif'}} ><i>Welcome to Your Personal Virtual Fitting Room!</i></h1>
            <LoginSignup />
        </div>
    )
}

export default LandingPage;