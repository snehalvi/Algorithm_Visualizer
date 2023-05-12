import React, {Component} from 'react';
import './style.css';
import {Link} from "react-router-dom";
//import About from './About';
import About from '../About/About';
import Pathfinder from '../pathfindingComponents/pathfinder';

class Navbar extends Component{
    render(){
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <span className="navbar-brand">Algorithm Visualizer</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <Link className= 'Navlink' to={"/About"}>
                        <span style={{color:"white"}}>
                            About
                        </span>
                    </Link>
                    <Link className= 'Navlink' to={"/Pathfinder"}>
                        <span style={{color:"white"}}>
                            Pathfinder
                        </span>
                    </Link>
                    <Link className= 'Navlink' to={"/Sorting"}>
                        <span style={{color:"white"}}>
                            Sorting
                        </span>
                    </Link>
                    <Link className= 'Navlink' to={"/graph"}>
                        <span style={{color:"white"}}>
                            Graphs
                        </span>
                    </Link>
                        

                    </ul>
                </div>
                
            </nav>

  )
}
}
export default Navbar;