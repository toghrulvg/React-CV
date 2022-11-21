import logo from './logo.svg';
import './App.css';
import HeaderPart from './HeaderPart';
import FooterPart from './FooterPart';
import BodyPart from './BodyPart';

function App() {
  return (
    <div className="App">
      
      <div id="doc2" className="yui-t7">
	<div id="inner">
	
		<HeaderPart/>

		<BodyPart/>

		<FooterPart/>

	</div>


</div>
    </div>
  );
}

export default App;
