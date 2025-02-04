import "./App.css";
import { Header } from "../components/header.tsx";
import { Todolist } from "../components/todolist.tsx";
import { Footer } from "../components/footer.tsx";

function App() {
  return (
    <div className={"w-screen p-10 bg-white flex flex-col gap-y-10"}>
      <Header />
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
