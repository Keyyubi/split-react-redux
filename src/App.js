import './App.scss';
import Header from './components/Header'
import Split from "react-split"
import Info from './components/Info';
import Table from './components/Table';
import Insert from './components/Insert';
import DummyCompo from './components/DummyCompo';

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

  // Storing SPLIT drag history on browser's sessionStorage
  const handleDragEnd = (values, target) => {
    const history = sessionStorage.getItem(target)
    let arr = history && history.length > 0 ? JSON.parse(history) : []
    
    arr.push({ values, date: new Date() })

    if (arr.length > 5) arr.shift()

    sessionStorage.setItem(target, JSON.stringify(arr))
  }

  return (
    <div className="container">
      <Header />
      <Split
        className='split'
        direction='vertical'
        onDrag={e => handleRowDrag(e)}
        onDragEnd={e => handleDragEnd(e, 'vertical')}
      >
        <Split
          className='split-row'
          minSize={260}
          onDrag={e => handleColDrag(e, 0)}
          onDragEnd={e => handleDragEnd(e, 'first-row')}
        >
          <Table />
          <Info />
        </Split>
        <Split
          className='split-row'
          onDrag={e => handleColDrag(e, 1)}
          onDragEnd={e => handleDragEnd(e, 'second-row')}
        >
          <Insert />
          <DummyCompo />
        </Split>
      </Split>
    </div>
  );
}

export default App;
