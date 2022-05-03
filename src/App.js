import Menu from "./menu/Menu";

// Array of objects
const menuItems = [
  {
    id: 1,
    type: 'Slice of Vegan Cheese',
    price: 4,
    qty: 0
  },
  {
    id: 2,
    type: 'Slice of Mushroom',
    price: 3,
    qty: 0
  },
  {
    id: 3,
    type: 'Slice of Chicken and Bacon',
    price: 3,
    qty: 0
  }
];

function App() {
  return (
    <div>
      {/* <h1>Hello from the App component</h1> */}
      {/* Passing the menuItems array (Array of objects) as the value for the startingItems prop in the Menu Component */}
      <Menu startingItems={menuItems}/>
    </div>
  );
}

export default App;
