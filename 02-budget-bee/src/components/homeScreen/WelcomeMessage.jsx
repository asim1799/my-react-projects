function WelcomeMessage({ username }) {
  return (
    <div className="welcome-message">
      <h3>Welcome, {username}</h3>
    </div>
  );
}

export default WelcomeMessage;
