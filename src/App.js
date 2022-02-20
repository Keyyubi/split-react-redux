import './App.scss';
import Header from './components/Header'
import Split from "react-split"
import Info from './components/Info';
import Table from './components/Table';

import { useDispatch } from 'react-redux'
import { rowResizer, colResizer } from './feature/draggerSlice'

function App() {
  const dispatch = useDispatch()
  const handleColDrag = (values, rowIndex) => {
    const payload = {
      rowIndex,
      values,
    }
    dispatch(colResizer(payload))
  }

  const handleRowDrag = (values) => {
    dispatch(rowResizer(values))
  }

  return (
    <div className="container">
      <Header />
      <Split
        className='split'
        direction='vertical'
        onDrag={e => handleRowDrag(e)}
      >
        <Split
          className='split-row'
          minSize={260}
          onDrag={e => handleColDrag(e, 0)}
        >
          <Table />
          <Info />
        </Split>
        <Split
          className='split-row'
          onDrag={e => handleColDrag(e, 1)}
        >
          <div>First Col</div>
          <div>Second Col</div>
        </Split>
      </Split>
    </div>
  );
}

export default App;
