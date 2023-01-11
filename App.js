import './App.css';
import Content from './Components/Content';
import Expression from './Components/Expression';
import TextForm from './Components/TextForm';
import Ustate from './Components/Ustate';
import UseRef from './Components/Use';

function App() {
  return (
    <div>
      <Content title="Text-Analizer  "about="About Us" catagories="Type" contact="Contact Us"></Content>
      <div className='container'>
      <TextForm heading = "Example TextArea"></TextForm>
      <Expression></Expression>
      </div>
    </div>
  );
}

export default App;
