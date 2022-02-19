import './App.scss';
import Header from './components/Header'
import Row from './components/Row'
import Split from "react-split"

function App() {
  return (
    <div className="container">
      <Header />
      <Split
        className='split'
        direction='vertical'
      >
        <Row rowIndex={0} />
        <Row rowIndex={1} />
      </Split>
    </div>
  );
}

export default App;
