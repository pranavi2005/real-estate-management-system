import '../App.css'; 
import '../index.css' 
import home from './gallery/hm.png'; 
 
function Home() { 
    return ( 
        <div className="App"> 
            <div> 
                <h1>Real Estate Management System</h1> 
                <p>This is the home page and this project manages your sites with care.</p> 
                <img src={home}></img> 
            </div> 
        </div> 
    ); 
} 
 
export default Home;
