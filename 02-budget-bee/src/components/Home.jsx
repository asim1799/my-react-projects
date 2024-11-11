function Home({ user }) {
  return (
    <div>
      <h3>Welcome {user.username}</h3>
      <h5>Your balance: X</h5>
      <input placeholder="amount" />
      <input placeholder="recipient" />
      <button>Send money</button>
      <button>Transaction history</button>
    </div>
  );
}

export default Home;
