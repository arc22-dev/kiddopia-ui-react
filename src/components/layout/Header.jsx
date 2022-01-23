import Menu from "../views/Menu"

const Header = (props) => {
	
    return(
        <header>
		<nav id="nav">
			<div className="logo"><img src="/src/assets/img/logo.svg" alt="" /></div>
			<Menu></Menu>
			<button className="nav-btn">Start Free Trial</button>
			<button className="nav-menu" onClick={props.toggleMenu}><i className="fas fa-bars fa-2x"></i></button>
		</nav>
	</header>
    )
}

export default Header