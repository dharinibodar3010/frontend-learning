import Playlist from "./Playlist";
import OrderStatus from "./OrderStatus";
import FollowerList from "./FollowerList";
import CartSummary from "./CartSummary";

function App() {
  const songs = [
    {
      title: "Calm Down",
      artist: "Rema"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran"
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran"
    }
  ];

  const followers = [
    "Rahul",
    "Priya",
    "Amit"
  ];

  const cartItems = [
    {
      name: "Mobile Phone",
      price: 20000
    },
    {
      name: "Headphones",
      price: 2000
    },
    {
      name: "Smart Watch",
      price: 3000
    }
  ];

  return (
    <div>
      <h1>React List and Conditional Rendering</h1>

      <Playlist songs={songs} />

      <hr />

      <OrderStatus isDelivered={true} />

      <hr />

      <FollowerList followers={followers} />

      <hr />

      <CartSummary items={cartItems} />
    </div>
  );
}

export default App;