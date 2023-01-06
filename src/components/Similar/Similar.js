

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { api, BASE_IMG_URL,  } from '../../API/API';
import "./similar.css"
import "./Carousel"
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export const SimilarMovie = ({id}) => {
  // const {id} = useParams();

  const [similar, setSimilar] = useState({
    isLoading:true,
    data:[],
    isError: false,
  })

  const getLikeMovie = async () => {
    const data = await api.getSimilarMove(id);
    if(data){
      setSimilar({
        isLoading:false,
        data:data.data.results,
        isError:false,
      })
    }
  }

  useEffect(()=> {
    getLikeMovie()
  },[id])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    {similar.isLoading ? <h2>Loading...</h2> :""} 
    {similar.isError ? <h2>Error...</h2> :""} 
    {similar.data ? <div className="container">
    <Slider {...settings} className='similar__move' >
      {
        similar?.data?.map((item) => (
        
            <li key={item.id} className="similar__item">
              <Link className='similar__link' to={'/singlemove/' + item.id}>
              <img className='similar__img img-fluid' src={`${BASE_IMG_URL}/${item.poster_path}`} alt={item.title} />
              </Link>
            </li>
          
        ))
      }
    </Slider>
    </div> :""}
   </>
  )
}
