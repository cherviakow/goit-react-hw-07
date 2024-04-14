import "./App.css";
import "modern-normalize";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <Layout>
      <Form />
      <SearchBox />
      <ContactList />
    </Layout>
  );
}

export default App;

