import AboutContainer from './AboutContainer'
import Services from './Services'
import Testimonials from './Testimonials'
import ModalContainer from './ModalContainer'

export default function About() {
    return (
        <article>
            <AboutContainer />

            <div className="separator"></div>
            
            <Services />

            <Testimonials />

            <ModalContainer />
        </article>
    )
}