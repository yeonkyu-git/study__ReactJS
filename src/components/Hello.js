import React from 'react'

function Hello({color, name, isSpecial}) {
  return (
    <div style={{color}} >
      {name} 안녕하세요
      { isSpecial ? <b>*</b> : null }
      { isSpecial && <b>*</b>}
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음'
}
export default Hello;