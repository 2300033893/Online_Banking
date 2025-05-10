import './App.css';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <section className="container">
        <h1>Welcome to Online Banking</h1>
        <p>Secure and easy online banking services.</p>

        <div className="features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Secure Transactions(🔒) – Advanced encryption to keep your data safe.</li>
            <li>24/7 Access(📱) – Manage your accounts anytime, anywhere.</li>
            <li>Quick Payments(💳) – Pay bills, transfer funds, and more with ease.</li>
            <li>User-Friendly Interface(👩‍💻) – Simple and seamless banking experience.</li>
            <li>Instant Notifications(⚡) – Stay updated on all your transactions.</li>
          </ul>
        </div>

        <div className="cta">
          <h2>Get Started Today!</h2>
          <p>Join thousands of customers banking with convenience.</p>
          <a href="/signup" className="btn">Create an Account</a>
        </div>
      </section>
    </>
  );
}

export default App;
