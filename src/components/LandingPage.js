import LoginSignup from './LoginSignup'

function LandingPage({ models, users, setUsers }) {
    return (
        <div className="landing-page">
            <h1 style={{ fontFamily: 'Serif' }} >
                <i>Welcome to Your Personal Virtual Fitting Room!</i>
            </h1>
            <LoginSignup models={models} users={users} setUsers={setUsers} />
        </div>
    )
}

export default LandingPage;