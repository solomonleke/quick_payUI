import React from 'react'

export default function Header({title,mt="0", size="2em" }) {
  return (
    <div className='headers' style={{marginTop: mt, fontSize: size}}>
        {title}
    </div>
  )
}
