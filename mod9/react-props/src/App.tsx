import "./App.css";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Layout from "./components/Layout";

function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740";

  const laptopImageUrl =
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364";

  return (
    <Layout>
      <Header text="Hello Props!" />

      <Greeting />
      <Layout>

        <ProductCard
          name="Keyboard"
          description="Mechanical Keyboard"
          price={50}
          status={true}
          image={imageUrl}
          />

        <ProductCard
          name="Laptop"
          description="Windows Laptop"
          price={800}
          status={false}
          image={laptopImageUrl}
          />
        </Layout>

      <Footer currentYear={2025} />
    </Layout>
  );
}

export default App;
