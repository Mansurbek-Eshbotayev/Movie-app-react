import { useEffect, useState } from 'react'
import { api } from '../../API/API'
import { Card } from '../../components/Crad/Card'
import './upcoming.css'

export const Upcoming = () => {
  const [movies, setMovies] = useState({
    isLoading:true,
    data:[],
    isError: false,
  })

  const getMovies = async () => {
    const data = await api.getUpcomingMove();
    if(data){
      setMovies({
        isLoading:false,
        data:data.data.results,
        isError:false,
      })
    }
  }

  useEffect(()=> {
    getMovies()
  },[])

  return (
    <>
     <div className="container">
     {movies.isLoading ? <h2>Loading...</h2> :""} 
     {movies.isError ? <h2>Error...</h2> :""} 
     {movies.data ? <ul className='move__list'>
      {
        movies.data.map((item) => (
          <Card key={item.id} id={item.id} img={item.poster_path} title={item.title} time={item.release_date} rate={item.vote_average}/>
        ))
      }
     </ul> :""}
     </div>
    </>
  )
}
