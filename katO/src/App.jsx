import katoImage from './assets/kato-page.png';
import {LuShare, LuRepeat, LuBookmark, LuMessageCircle, LuBarChart4, LuHeart, LuArrowRight} from "react-icons/lu";
import { IoLocationSharp } from 'react-icons/io5';
import style from './App.module.css'
import Icon from './components/Icon/Icon.jsx';
import Rating from './components/Rating/Rating.jsx';


function App() {

  return (
    <>
    <h1 className={style.heading}>katO</h1>
      <img className={style.image} src={katoImage} alt=""/>
      <div className={style.action_logo}>
        <Icon icon={<LuBarChart4 />} number='4' />
        <Icon icon={<LuRepeat />} number='0' />
        <Icon icon={<LuMessageCircle />} number='1' />
        <Icon icon={<LuHeart />} number='0' />
        <Icon icon={<LuShare />}/>
      </div>
      <h4 className={style.title} >FabHotel Phoenix Brookfield</h4>
      <Rating rating={8.3}/>
      <p className={`${style.description} ${style.location}` }><IoLocationSharp color='grey'/> Islington - 3.3km from center, 4.3km from holborn <b style={{color:'#44423f', fontWeight: 600}}>See more</b></p>
      <p className={`${style.description} ${ style.objective}`}>Non Stop Reception / Individual Host / Professional Host by the case</p>
      <div className={style.facility}>
        <div className={style.description_container}>
          <p className={style.description}>5 Nights 9-14 Jan x 291&euro;/nights</p>
          <p className={style.description}>Suites 2 bedroom, 1 gind bed and 2 single beds</p>
        </div>
        <div className={style.total_container}>
           <p className={style.total}>Total 1452&euro; <span style={{marginLeft: 'px'}}>&gt;</span></p>
        </div>
      </div>
      <div className={style.button_container}>
        <button className={style.button_booking}>Book this room</button>
        <label className={style.label_seemore}>{'->'} See more</label>
      </div>
    </>
  )
}

export default App
