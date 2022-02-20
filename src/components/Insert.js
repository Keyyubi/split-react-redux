import { useState } from 'react'

const Table = () => {
  const [data, setData] = useState([])
  const [abbr, setAbbr] = useState('')
  const [income, setIncome] = useState('')
  const [expence, setExpense] = useState('')
  const [type, setType] = useState('')
  const [toggleNewLine, setToggleNewLine] = useState(false)

  // This model assignment could be done with useEffect too, I think
  const saveModel = () => {
    const inc = new Intl.NumberFormat('tr-TR', {style: 'currency', currency: 'TRY'}).format(income)
    const exp = new Intl.NumberFormat('tr-TR', {style: 'currency', currency: 'TRY'}).format(expence)
    
    const payload = {
      abbr,
      income: inc,
      expence: exp,
      type,
    }

    setData([...data, payload])
    reset()
  }

  const reset = () => {
    setAbbr('')
    setIncome('')
    setExpense('')
    setType('')

    setToggleNewLine(false)
  }

  return (
    <div className='insert-wrapper'>
      <div className='row'>
        <div className='col'>Kisaltma</div>
        <div className='col'>Deger</div>
        <div className='col'>Islem degeri</div>
        <div className='col'>Islem</div>
      </div>

      {data && data.length > 0 ?
        data.map((obj, index) => (
          <div key={index} className='row'>
            {
              Array.from(Object.keys(obj)).map(key => (<div key={key + index} className='col'>{obj[key]}</div>))
            }
          </div>
        ))
        : ''
      }
      {toggleNewLine ?
        <div className='row'>
          <input className='row-input' type='text' placeholder='Kısaltma' value={abbr} onChange={e => setAbbr(e.target.value.toUpperCase())} />
          <input className='row-input' type='number' min='0' placeholder='Deger' value={income} onChange={e => setIncome(e.target.value)} />
          <input className='row-input' type='number' min='0' placeholder='Islem degeri' value={expence} onChange={e => setExpense(e.target.value)} />
          <select onChange={e => setType(e.target.value)}>
            <option>Seciniz..</option>
            <option value={'Alış'}>Al</option>
            <option value={'Satış'}>Sat</option>
            <option value={'Bekleme'}>Beklet</option>
          </select>
          <div className='btn-wrap'>
            <input type='button' value='Kaydet' onClick={() => saveModel()} />
            <input type='button' value='Vazgec' onClick={() => reset()} />
          </div>
        </div>
        :
        <div className='row btn-row'>
          <input type='button' value='Yeni ekle' onClick={() => setToggleNewLine(!toggleNewLine)} />
        </div>
      }
    </div>
  )
}

export default Table
