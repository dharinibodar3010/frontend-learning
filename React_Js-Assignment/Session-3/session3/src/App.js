import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h1>React Props Example</h1>

      <ProductCard
        productName="iPhone"
        price={50000}
      />

      <br />

      <UserProfile
        username="Dharini"
        followers={1200}
        profilePic="https://i.pravatar.cc/150"
      />

      <br />

      <UserProfile
        username="NewUser"
      />
    </div>
  );
}

export default App;