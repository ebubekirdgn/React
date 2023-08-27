import Header from "./Header/index";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { ToDoProvider } from "./context/ToDoContext";

function App() {
  return (
    <ToDoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </ToDoProvider>
  );
}

export default App;
