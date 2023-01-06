import {  NavLink } from 'react-router-dom'
import  './header.css'

export const Header = () => {
  return (
    <header className='movie__heder'>
      <div className="container">
      <nav className='movie__nav'>
        <NavLink className={({isActive}) => isActive? "active__logo" : "logo"} to="/" >
         Movie Chinema
        </NavLink>
        <ul className="movie__list">
          <li className="movie__item">
            <NavLink  className={({isActive}) => isActive? "active__link" : "movie__link"} to="/">
              Home
            </NavLink>
          </li>
          <li className="movie__item">
            <NavLink className={({isActive}) => isActive? "active__link" : "movie__link"} to="/topraited">
              Top-raited
            </NavLink>
          </li>
          <li className="movie__item">
            <NavLink className={({isActive}) => isActive? "active__link" : "movie__link"} to="/upcoming">
              Upcoming
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}
