export default function Home() {
  return (
    <div style={{
      padding: "3rem 2rem",
      fontFamily: "sans-serif",
      lineHeight: 1.6,
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#f97316" }}>Hallo Solutions</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        We help European brands find the best 3PL logistics partners — fast, tailored, and vendor-neutral.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: "#f97316" }}>How It Works</h2>
      <ol>
        <li>✅ Brands fill out a short form describing their logistics needs</li>
        <li>✅ We match them with compatible 3PLs across Europe</li>
        <li>✅ They choose who to talk to. We make the intro.</li>
      </ol>

      <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: "#f97316" }}>Who Is This For?</h2>
      <ul>
        <li>📦 Brands shipping 500+ orders/month</li>
        <li>🚛 3PLs with available capacity and specialization</li>
        <li>🌍 European e-commerce or DTC operations</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "2rem", color: "#f97316" }}>Get Started</h2>
      <p>👉 <a href="https://tally.so/r/your-brand-form" target="_blank">Brand intake form</a></p>
      <p>👉 <a href="https://tally.so/r/your-3pl-form" target="_blank">3PL registration form</a></p>

      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#666" }}>
        © {new Date().getFullYear()} Hallo Solutions
      </footer>
    </div>
  );
}
