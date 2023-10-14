
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomeCarousel from './Carousel.js'

// This is the home page which contains the component carousel created on a different file. It also contains about information about the app itself as well as several images
// its also contains a table that lists all of the pokemon games that have been made just for reference. there are stylized with bootstrap so that it is in a container
// and alteranting colors so that it is easier to read. This is the main page so that when you click home on anything the browser router brings you back here. it also is the default 
// browser router page. other then being able to scroll through the carousel manually there is nothing that can be updated or changed on this page.


function Home() {

  let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

   
    return (
   
   <>
   <HomeCarousel />
     
    <div className='container bg-light'>
    <div>

                <div className='border1  p-5 pb-3'>
                <h1 className=' fs-1 fw-bolder text-center titletext'><img src={url} alt=""  width="50px"></img>Pokemon Database Assistant<img src={url} alt=""  width="50px"></img></h1>
                 </div>
                 <div className='text-center'>
                  <h3>About This App</h3>
                  <p>
                    This App was created for my son Kylo in order to help you track all your pokemon adventures. This will help you weather your playing the classics like 
                    Red and Blue all the way up to tracking some of your data in Violet and Scarlet. This app can help you Keep track of every Gym Badge you have ever earned from 
                    across all 8 generations. You can keep track of your favorite teams used to beat the elite four or just your own favorite dream teams across all games. You can also keep track of every 
                    pokemon you have ever caught weather its on Yellow, GO, or even Lets Go Pikachu you can keep track of all your amazing pokedex progress. You can also use this site to access entire other worlds of 
                    pokemon information. You have access to information from the official Pokemon website, the Pokemon Go website, the Pokemon Trading Card Game website, and the Pokedex website Serebii. All 
                    this is possible with ease of access on the Pokemon Database. A special note for my son Kylo, I hope you have a lot of fun with this and I love you, so go start catching pokemon and become a 
                    Pokemon Master! 
                  </p>
                 </div>
                 <div className='text-center'>
                  <img src="https://qph.cf2.quoracdn.net/main-qimg-e723be346c41d168250ea493a1680a62.webp" width="500px" alt=" " ></img>
                 </div>
                 <div className='text-center small-middle-container'>
                  <h3><img src={url} alt=""  width="50px"></img>A List of All the Pokemon Games<img src={url} alt=""  width="50px"></img></h3>
                   <ul className='text-center ULlist list-group '>
                    <li className='list-group-item list-group-item-info'>Pokemon RED, BLUE, and YELLOW</li>
                    <li className='list-group-item list-group-item-success'>Pokemon GOLD, SILVER, and CRYSTAL</li>
                    <li className='list-group-item list-group-item-info'>Pokemon RUBY, SAPPHIRE, and EMERALD</li>
                    <li className='list-group-item list-group-item-success'>Pokemon LEAF GREEN, and FIRE RED</li>
                    <li className='list-group-item list-group-item-info'>Pokemon DIAMOND, PEARL, and PLATINUM</li>
                    <li className='list-group-item list-group-item-success'>Pokemon HEART GOLD, and SOUL SILVER </li>
                    <li className='list-group-item list-group-item-info'>Pokemon BLACK and WHITE</li>
                    <li className='list-group-item list-group-item-success'>Pokemon BLACK II and WHITE II </li>
                    <li className='list-group-item list-group-item-info'>Pokemon X and Y</li>
                    <li className='list-group-item list-group-item-success'>Pokemon OMEGA RUBY and ALPHA SAPPHIRE</li>
                    <li className='list-group-item list-group-item-info'>Pokemon SUN and MOON</li>
                    <li className='list-group-item list-group-item-success'>Pokemon ULTRA SUN and ULTRA MOON</li>
                    <li className='list-group-item list-group-item-info'>Pokemon LETS GO PIKACHU and LETS GO EEVEE</li>
                    <li className='list-group-item list-group-item-success'>Pokemon SWORD and SHIELD</li>
                    <li className='list-group-item list-group-item-info'>Pokemon BRILLIANT DIAMOND and SHINING PEARL</li>
                    <li className='list-group-item list-group-item-success'>Pokemon LEGENDS ARCEUS</li>
                    <li className='list-group-item list-group-item-info'>Pokemon SCARLET AND VIOLET </li>
                   </ul>
                   <div className='text-center'>
                       <img src="https://pbs.twimg.com/media/CikBY-wWkAALedA.jpg" width="500px" alt=" " ></img>
                    </div>
                   <h4><img src={url} alt=""  width="50px"></img>Honorable Mentions<img src={url} alt=""  width="50px"></img></h4>
                    <div className='text-center small-middle-container2'>
                    <ul className='text-center ULlist list-group'>
                    <li className='list-group-item list-group-item-info'>Pokemon STADIUM</li>
                    <li className='list-group-item list-group-item-success'>Pokemon TRADING CARD GAME</li>
                    <li className='list-group-item list-group-item-info'>Pokemon SNAP</li>
                    <li className='list-group-item list-group-item-success'>Pokemon RUMBLE</li>
                    <li className='list-group-item list-group-item-info'>Pokemon MYSTERY DUNGEON SERIES</li>
                    <li className='list-group-item list-group-item-success'>Pokemon CAFE</li>
                    <li className='list-group-item list-group-item-info'>Pokemon DETECTIVE PIKACHU</li>
                    <li className='list-group-item list-group-item-success'>Pokemon MASTERS</li>
                    <li className='list-group-item list-group-item-info'>Pokemon PINBALL</li>
                    <li className='list-group-item list-group-item-success'>Pokemon SHUFFLE</li>
                    <li className='list-group-item list-group-item-info'>Pokemon GO</li>
                    <li className='list-group-item list-group-item-success'>Pokemon SLEEP</li>
                    <li className='list-group-item list-group-item-info'>Pokemon UNITE</li>
                  
                    </ul>
                    </div>
                    <div className='text-center'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwHgKY5LP9rZD8MapO1W4TfmmVdu1s7bewd49JXpVVCzFx5Y9RnWYdLrVnuTsMqqavAM&usqp=CAU" width="500px" alt=" " ></img>
                    </div>

                    

                 </div>
                 


 
    </div>

</div>



</>
    
  
  )
  }


export default Home;

