function WelcomeMessage({ onGetInitialPosts }) {
    return <>
        <center className="welcomeHeading"><h1>Welcome! Intially have no posts</h1>
            <button onClick={onGetInitialPosts} type="button" className="btn btn-primary">Get Posts From Server</button></center>

    </>
}
export default WelcomeMessage;