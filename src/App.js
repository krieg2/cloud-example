import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

const menuItems = [
  {name: "Dashboard", subMenu: []},
  {name: "Lorem Ipsum", subMenu: []},
  {name: "Dolor", subMenu: []},
  {name: "Sit Amet", subMenu: ["Test"]},
  {name: "Ullamcorper", subMenu: ["Test"]},
  {name: "Morbi Rutrum", subMenu: ["Test"]}
];

function App() {
  return (
    <div className="App">
      <Header username={"Barbara"} />
      <Menu items={menuItems}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
