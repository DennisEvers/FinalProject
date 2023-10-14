import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './pokeb.jpg';


//this is the Navbar component that contains the function that creates the navbar. The navbar when shrunk contains a button on the right but when it is large enough you can see
// see all the links to the pages you can go displayed. This takes you to the main pages but gives you no access to the forms for changing things that is only 
// accessable by the buttons or typing in the adress manually. The Navbar also contains a drop down menu that displays links to four different pokemon 
// websites and opens them in new tabs so that the user has a larger access to the world of pokemon making it more user friendly.


function NavMenu() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      
    }

    let url = "https://st2.depositphotos.com/3213441/12022/v/450/depositphotos_120226152-stock-illustration-pokemon-go-pokeball-round-sign.jpg"

  return (

    <div>
      <div ></div>

    
   
     
    <Navbar expand="lg" className="text-start navBG">
      <Container>
        <Navbar.Brand href="#home" className='imgText1'>Menu<img src={url} alt="" width="30px" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto imgText1">
          <Nav.Link href='/'>Home Page<img src={url} alt=""  width="30px"></img></Nav.Link>
            <Nav.Link href='/list'>Pokemon Obtained<img src={url} alt="" width="30px"></img></Nav.Link>
            <Nav.Link href='/team'>Team Builder<img src={url} alt="" width="30px" ></img></Nav.Link>
            <Nav.Link href='/gymtable'>Gym Badge Tracker<img src={url} alt="" width="30px"></img></Nav.Link>
            <NavDropdown title="More Pokemon Information" id="basic-nav-dropdown">
              <h3 disabled className="fs-2 text-center"> <strong>Links to Various Pokemon Sites </strong> <img src={url} alt="" width="40px"></img>
              </h3>
              <NavDropdown.Divider/>
              <NavDropdown.Item >

              <div class="d-grid gap-2 col-8 mx-left">
                
              <button
                 role="link"
                  onClick={() => openInNewTab("https://www.pokemon.com/us")} className='btn btn-outline-primary fw-bolder btn-block btn-lg'> Visit Offical Pokemon Website    <img src={url} alt="" width="40px"></img>
                 </button>

                 </div>
               
               
              </NavDropdown.Item>
                <NavDropdown.Item>
                <div class="d-grid gap-2 col-8 mx-left">
             
                <button
                 role="link"
                  onClick={() => openInNewTab("https://tcg.pokemon.com/en-us/tcgl/")} className='btn btn-outline-primary fw-bolder btn-lg btn-block'> Visit Pokemon TCG Official Website    <img src={url} alt="" width="40px"></img>
                 </button>
                 </div>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <div class="d-grid gap-2 col-8 mx-left">
           
              <button
                 role="link"
                  onClick={() => openInNewTab("https://pokemongolive.com/?hl=en")} className='btn btn-outline-primary fw-bolder btn-lg btn-block'> Visit Pokemon Go Official Website    <img src={url} alt="" width="40px"></img>
             </button>
             </div> 
                        
              </NavDropdown.Item>
              <NavDropdown.Item >
              <div class="d-grid gap-2 col-8 mx-left">
           
              <button
                 role="link"
                  onClick={() => openInNewTab("https://www.serebii.net/pokemon/nationalpokedex.shtml")} className='btn btn-outline-primary fw-bolder btn-lg btn-block'> Visit Pokedex Website    <img src={url} alt="" width="40px"></img>
             </button>  
             </div>
                         
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default NavMenu;