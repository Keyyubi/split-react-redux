import { useSelector } from 'react-redux'

const Info = ({index}) => {
  const vals = useSelector(state => state.dragger)

  return (
    <div className="info">
      <span>{index} satiri 1.col: {vals.cols[index][0]} </span>
      <hr />
      <span>{index} satiri 2.col: {vals.cols[index][1]} </span>
    </div>
  )
}

export default Info