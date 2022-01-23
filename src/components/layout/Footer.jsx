import AppLinks from "../views/AppLinks"
import Links from "../views/Links"
import SocialLinks from "../views/SocialLinks"

const Footer = () => {
    return (
        <footer className="footer">
		<Links></Links>
		<AppLinks></AppLinks>
		<SocialLinks></SocialLinks>
	</footer>
    )
}

export default Footer