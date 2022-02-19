import Split from 'react-split'
import { useSelector, useDispatch } from 'react-redux'
import { colResizer } from '../feature/draggerSlice'
import Info from './Info'

const Row = ({ rowIndex }) => {
  const vals = useSelector((state) => state.dragger.cols)
  const dispatch = useDispatch()

  const handleDrag = values => {
    const payload = {
      rowIndex,
      values,
    }
    dispatch(colResizer(payload))
    console.log('vals', vals)
  }
  return (
    <Split
      className='split-row'
      onDrag={e => handleDrag(e)}
    >
      <div className='col'>First Col</div>
      <div className='col'>
        <Info index={rowIndex}/>
      </div>
    </Split>
  )
}

export default Row