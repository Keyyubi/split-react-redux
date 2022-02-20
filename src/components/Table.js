import { useState } from 'react'
import * as dummy from '../dummy.json'
import * as dummy2 from '../dummy2.json'
import prefs from '../prefs.svg'

const Table = () => {
  const datas = [JSON.parse(JSON.stringify(dummy)), JSON.parse(JSON.stringify(dummy2))]
  const [data, setData] = useState([])
  const [cols, setCols] = useState([])
  const [toggleFilter, setToggleFilter] = useState(false)

  const handleSelect = e => {
    setData(datas[e.target.value])
    const columns = Object.keys(datas[e.target.value][0]).map(el => {
      return {
        key: el,
        width: 'auto',
        label: el.replace('_', ' ').toUpperCase(),
        visible: true
      }
    })
    setCols(columns)
  }

  const filterCols = (key) => {
    const arr = cols.map(e => {
      console.log('key', e.key, key)
      if (e.key === key) e.visible = !e.visible
      return e
    })
    setCols(arr)
  }

  const Th = (col, index) => {
    return (
      <th key={index} align='left' style={{width: col.width}}>{col.label}</th>
    )
  }

  return (
    <div className='table-wrapper'>
      <div className='table-bar'>
        <select onChange={e => handleSelect(e)}>
          <option>Seciniz..</option>
          <option value={0}>2018</option>
          <option value={1}>2019</option>
        </select>
        <img src={prefs} className="logo" alt="logo" onClick={() => setToggleFilter(!toggleFilter)} />
      </div>

      {toggleFilter && data.length > 0 ? 
        <div className='column-filter-popup'>
          {
            cols.map((col, index) => {
              return (
                <label key={index}>
                  <input type="checkbox" checked={col.visible} onChange={() => filterCols(col.key)} />
                  {col.label}
                </label>
              )
            })
          }
        </div>
        : ''
      }
      
      <table>
        <thead style={{backgroundColor: '#ccc'}}>
          <tr>
            { cols.filter(e => e.visible === true).map((e, index) => Th(e, index)) }
          </tr>
        </thead>
        <tbody>
          { data && data.length > 0 ?
            Array.from(data).map((obj, index) => (
              <tr key={index}>
                {
                  cols.filter(e => e.visible === true).map(col => {
                    return (
                      <td key={col.key}>
                        {obj[col.key]}
                      </td>
                    )
                  })
                }
              </tr>
            )) :
            <tr>
              <td colSpan={cols.length}>
                Bu gorunumde veri bulunmuyor
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
