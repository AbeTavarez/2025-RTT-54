import "./App.css";
import reactLogo from "./assets/react.svg";

const item = { name: "Smartphone", price: 799 };
const quantity = 2;
const discount = 0.1; // 10% discount
const formattedName = item.name.toUpperCase();

function calculateTotal(price: number, quantity: number, discount: number) {
  // Calculate the discounted price per item
  const discountedPrice = price * (1 - discount);
  // Calculate the total cost
  return discountedPrice * quantity;
}

function App() {
  // Handles the click on the button
  const handleClick = () => console.log("clicked");

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <main className="card">
      <SearchBar />

      <h1>Hello React! {10 + 9} </h1>

      <img src={reactLogo} alt="logo" />

      <img src="/public/vite.svg" alt="" />

      <p style={{ backgroundColor: "red", padding: "5px", fontSize: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rerum
        mollitia doloribus ipsam maiores nulla eligendi, reprehenderit, soluta
        ullam voluptatum, quaerat iusto eos ipsa. Magnam natus temporibus totam
        repellendus et?
      </p>

      <form style={formStyles}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="" />
        <button onClick={handleClick}>Click me</button>
      </form>

      <div className="loading-bar" />

      <div>
        <h1>Product Details</h1>

        <p>Item: {formattedName}</p>

        <p>Price per item: ${item.price}</p>

        <p>Quantity: {quantity}</p>

        <p>
          Total cost after {discount * 100}% discount: $
          {calculateTotal(item.price, quantity, discount)}
        </p>

        <p>Status: {quantity > 0 ? "In Stock" : "Out of Stock"} </p>
      </div>

      <Card />
      <Card />
      <Card />
      <Card />

      <SignInForm />

      <Title />

      <Snippet />
    </main>
  );
}

export default App;

function Snippet() {
  return (
    <>
      <div className="profile">
        <img src="vite.svg" alt="User Avatar" />

        <h2>User Profile</h2>

        <label htmlFor="username">Username:</label>

        <input type="text" id="username" name="username" readOnly />

        <br />

        <p>Bio: A short bio goes here.</p>
      </div>

      <button className="btn primary">Save Changes</button>
    </>
  );
}

function Card() {
  const cardStyle = {
    backgroundColor: "royalblue",
    padding: "5px",
  };
  return (
    <div style={cardStyle}>
      <h2>Card</h2>
      <p>This is a card component.</p>
    </div>
  );
}

function SignInForm() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    </form>
  );
}

function Title() {
  return <h3>Title</h3>;
}

function SearchBar() {
  return (
    <>
      <input type="text" placeholder="search..." />
      <button>Search</button>
    </>
  );
}
