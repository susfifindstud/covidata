import { Link } from 'react-router-dom';
const Navigation = () => (
<div>
    <nav class="navbar navbar-expand-lg navbar-dark">
            
            <href className = "hover-yellow" activeStyle={{color: 'white'}}><a class="navbar-brand hover-yellow" href="/">covidata</a></href>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Browse
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/browse1" activeStyle={{color: 'white'}}><a class="dropdown-item" href="/books">Books</a></Link>
                        <Link to="/browse2" activeStyle={{color: 'white'}}><a class="dropdown-item" href="/book-details">Book Details</a></Link>
                        <a class="dropdown-item" href="/">Merch</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="./PredictionModels.js" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    prediction models
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/books">Books</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/book-details">Book Details</a></href>
                    <a class="dropdown-item" href="/">Merch</a>
                </div>
                </li>
        
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    datasets
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/the-problem">Notifications</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/our-mission">Messages</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/what-we-do">Blog posts</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/contact-us">Contact Us</a></href>
                </div>
                </li>
        
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    more
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <href><a class="dropdown-item" href="/donate">Donate</a></href>
                    <href><a class="dropdown-item" href="/volunteer">Volunteer</a></href>
                </div>
                </li>
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    about
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/the-problem">The Problem</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/our-mission">Our Mission</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/what-we-do">What We Do</a></href>
                    <href activeStyle={{color: 'white'}}><a class="dropdown-item" href="/our-team">Our Team</a></href>
                </div>
                </li>

            </ul>
        
            </div>
        </nav>
</div>
)

export default Navigation;

