import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//this component contains a carousel made to display information on the homepage. The component is a carousel that cycles through 4 different images each with some information on what 
//the app does along with a banner image and the ability to scroll through manually as well. They are not linked to anything so they are mearly decorative only.

function HomeCarousel() {

    let img1 = "https://pbs.twimg.com/media/EHh6zmpUEAAhdBm?format=jpg&name=large"
    let img2 = "https://mmos.com/wp-content/uploads/2021/07/pokemon-unite-key-art-banner.jpg"
    let img3 = "https://www.emulatorpc.com/wp-content/uploads/2021/09/pokemon-unite-emulator-pc.jpg.webp"
    let img4 = "https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067"

  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1}  alt=" " className="w-100 imgText"></img>   
        <Carousel.Caption>
          <h3 className='className="w-100 imgText bg-info bg-opacity-50'>List of Caught Pokemon</h3>
          <p className='className="w-100 imgText bg-info bg-opacity-50'>Use this to keep track of all the pokemon that you have been able to catch</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2}  alt=" " className="w-100 imgText"></img>
        <Carousel.Caption>
          <h3 className='className="w-100 imgText bg-info bg-opacity-50'>Pokemon Team Tracker</h3>
          <p className='className="w-100 imgText bg-info bg-opacity-50'>Use this to keep track of your best Pokemon Teams</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt=" " className="w-100 imgText"></img>
        <Carousel.Caption>
          <h3 className='className="w-100 imgText bg-info bg-opacity-50'>More Pokemon Information for your every need</h3>
          <p className='className="w-100 imgText bg-info bg-opacity-50'>
            Look for links to other amazing pokemon sites as well.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4}  alt=" " className="w-100 imgText"></img>
        <Carousel.Caption>
          <h3 className='className="w-100 imgText bg-info bg-opacity-50' >Gym Badge Tracker</h3>
          <p className='className="w-100 imgText bg-info bg-opacity-50'>
            Keep track of every Gym Badge you have ever earned from all eight Generations!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;