import { useState, useEffect } from 'react'
import './Nav.css'

export const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 100)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={show ? 'nav-container-black nav-container' : 'nav-container'}>
      <img
        className="nav-log"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />
      <img
        className="nav-avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
        alt="User"
      />
    </div>
  )
}
