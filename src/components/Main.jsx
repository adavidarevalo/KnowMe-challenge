import React, {useState} from 'react'
import '../styles/components/Main.scss'
import Background from './Background'
import music from '../images/music.png'


const Main = () =>{
    const [Information, setInformation] = useState({
        Music: '',
        Biography:''
      })
      const [Music, setMusic] = useState()
      const [Biography, setBiography] = useState()
      const [Alert, setAlert] = useState(false)

      const MusicApi = async () => {
        const Api = await fetch(`https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${Information.Biography}&mus=${Information.Music}&extra=relmus`)
        const result = await Api.json()
        setMusic(result)
      }

      const BiographyApi = async () => {
        const ApiBiography = await fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${Information.Biography}`)
        const resultBiography = await ApiBiography.json()
        setBiography(resultBiography)
      }
      
      
      const handleClick = async(e) => {
        e.preventDefault()
        setBiography()
        setMusic()
        if(Information.Music !== '' && Information.Biography !== ''){
            MusicApi()
            BiographyApi()
          } else if(Information.Biography !== ''){
            BiographyApi()
          }else{
            setAlert(true)
            setTimeout(() => {
                setAlert(false)  
            }, 5000);
          }
        setInformation({
            Music: '',
            Biography:''
          })
      }


    
    return(
        <>
        <div className='Container'>
          <img src={music} alt='Icon'/>
          <form>
          <div>
          <label>Biography
          <input
          type="text"
          placeholder='Biography'
          name='Biography'
          value={Information.Biography}
          onChange={(e)=>{
            setInformation({
                ...Information,
                [e.target.name]: e.target.value
            })
          }}
          />
          </label>
        </div>
          <div>
          <label>Music
          <input
          type="text"
          placeholder='Your Favorite Music'
          name='Music'
          value={Information.Music}
          onChange={(e)=>{
            setInformation({
                ...Information,
                [e.target.name]: e.target.value
            })
          }}
          />
          </label>
        </div>
        <button
        onClick={(e)=> handleClick(e)}
        >Search</button>
          </form>
          {Alert && <p class='alertContainer'>To see the music you need the name of the artist or the band.</p>}
          <section>
          {Biography && (
                <div>
                    <h2>Biography</h2>
                    <p>{Biography.artists[0].strBiographyEN}</p>
                </div>
          )}
          {Music && (
                <div>
                    <h2>Music</h2>
                    <p>{Music.mus[0].text}</p>
                </div>
          )}
          </section>
          <Background/>
          </div>
        </>
    )
}

export default Main