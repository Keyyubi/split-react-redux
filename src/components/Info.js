import { useSelector } from 'react-redux'

const Info = ({index}) => {
  const vals = useSelector(state => state.dragger)

  return (
    <div className="info-wrapper">
      <div className='info'>
        <h4>Ayarlar</h4>
        <h4>Yatay pencere değerleri:</h4>
        <span>%{vals.rows[0]} - %{vals.rows[1]}</span>
        <h4>Üst dikey pencere değerleri:</h4>
        <span>%{vals.cols[0][0]} - %{vals.cols[0][1]}</span>
        <h4>Alt dikey pencere değerleri:</h4>
        <span>%{vals.cols[1][0]} - %{vals.cols[1][1]}</span>
      </div>
    </div>
  )
}

export default Info