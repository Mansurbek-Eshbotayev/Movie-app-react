import './simglemovie.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { api, BASE_IMG_URL, BK_IMG_URL } from '../../API/API';
import { SimilarMovie } from '../../components/Similar/Similar';

export const SingleMovie = () => {
  const {id} = useParams();
  
  const [single, setSingle] = useState({
    isLoading:true,
    data:[],
    isError: false,
  })
  
  const getSingleMovie = async () => {
    const data = await api.getSingleMove(id);
    if(data){
      setSingle({
        isLoading:false,
        data:[data.data],
        isError:false,
      })
    }
  }
  
  useEffect(()=> {
    getSingleMovie()
  },[id])
  
  return (
    <>
    {single.isLoading ? <h2>Loading...</h2> :""} 
    {single.isError ? <h2>Error...</h2> :""} 
    {single.data ? <section className='single__move'>
    {
      single.data.map((item) => (
        <div key={item.id} className="single__info" style={{ backgroundImage: `url(${BK_IMG_URL}/${item.backdrop_path})`
      }}>
      <div className="sinhgle__over">
        <div className="container">
        <div className="single__wrap">
        <h2 className='single__title'>{item.original_title}</h2>
        <div className='info__wrap'>
        <span className="single__year">{item.release_date}</span>
        <span className="single__reted">{item.vote_average}</span>
        <span className="single__wiev">{item.vote_count}</span>
        </div>
        <div className="singlewrap__text">
        <span className='singlewrap__title'>Description</span>
        <p className='single__text'>{item.overview}</p>
        </div>
        </div>
        <img className='single__mainimg' src={`${BASE_IMG_URL}/${item.poster_path}`} alt="" />
        </div>
        <h3 className='single__similar'>Similar Movie</h3>
        <SimilarMovie id={id}  />
        </div>
      </div>
      ))
    }
    </section> :""}
    </>
    )
  }
  