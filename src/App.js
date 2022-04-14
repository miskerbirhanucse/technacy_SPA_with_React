import { Header, AboutUs, ContactUs, Footer, Service } from "./containers";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components";
import Projects from "./containers/projects/Projects";

function App() {
  return (
    <div className="app container-fluid">
      <Navbar />
      <Header />
      <Service />
      <AboutUs />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
