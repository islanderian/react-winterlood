// import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";
import Container from "./Container";

function App() {
  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter initialValue={5} />
      </div>
    </Container>
  );
}

export default App;
