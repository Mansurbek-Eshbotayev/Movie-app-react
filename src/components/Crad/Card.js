import { Link } from 'react-router-dom'
import { BASE_IMG_URL } from '../../API/API'
import  './card.css'

export const Card = ({img,title,time,rate,id}) => {
  return (
    <li className='card__item position-relative'>
    <Link className='card__link' to={'/singlemove/' + id} >
    <img className='img-fluid card__img' src={`${BASE_IMG_URL}/${img}`} alt={title} />
    <div className='card__wrap'>
    <h3 className='card__title'>{title}</h3>
    <p className="card__text">{time}</p>
    <span class="position-absolute p-2 top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {rate}
    <span class="visually-hidden">unread messages</span>
    </span>
    </div>
    </Link>
    </li>
    )
  }
