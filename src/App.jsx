import car01 from '/car01.jpg'
import car02 from '/car02.webp'
import car03 from '/car03.webp'
import car04 from '/car04.webp'
import car05 from '/car05.jpg'
import './App.css'

function App() {

  return (
    <div className="card">
        <div className="card-item">
            <a href="https://en.wikipedia.org/wiki/Lamborghini" target="_blank" className="image">
                <img src={car01} alt="car01" />
            </a>
            <div className="body">
                <h3 className="title">Lamborghini</h3>
                <span className="subtitle">Italia</span>
                <p className="description">
                    Lamborghini is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata
                    Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio
                    Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini
                    S.p.A. in 1963 to compete with Ferrari.
                </p>
                <div className="links">
                    <a href="" className="share-link">Share it</a>
                    <a href="https://en.wikipedia.org/wiki/Lamborghini" target="_blank" className="about-link">Read more</a>
                </div>
            </div>
        </div>
        <div className="card-item">
            <a href="https://en.wikipedia.org/wiki/Bugatti" target="_blank" className="image">
                <img src={car02} alt="car02" />
            </a>
            <div className="body">
                <h3 className="title">Bugatti</h3>
                <span className="subtitle">France</span>
                <p className="description">
                    Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.
                    The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born
                    industrial designer Ettore Bugatti. The cars were known for their design beauty and numerous race
                    victories.
                </p>
                <div className="links">
                    <a href="" className="share-link">Share it</a>
                    <a href="https://en.wikipedia.org/wiki/Bugatti" target="_blank" className="about-link">Read more</a>
                </div>
            </div>
        </div>
        <div className="card-item">
            <a href="https://en.wikipedia.org/wiki/Ferrari" target="_blank" className="image">
                <img src={car03} alt="car03" />
            </a>
            <div className="body">
                <h3 className="title">Ferrari</h3>
                <span className="subtitle">Italia</span>
                <p className="description">
                    Ferrari is an Italian luxury sports car manufacturer based in Maranello. As Described by the Wall
                    Street Journal, Ferrari possesses a robust and powerful brand image. Owing to a combination of its
                    cars, enthusiast culture, and successful licensing deals, in 2019 Ferrari was labelled the world's
                    strongest brand.
                </p>
                <div className="links">
                    <a href="" className="share-link">Share it</a>
                    <a href="https://en.wikipedia.org/wiki/Ferrari" target="_blank" className="about-link">Read more</a>
                </div>
            </div>
        </div>
        <div className="card-item">
            <a href="https://en.wikipedia.org/wiki/McLaren_Automotive" target="_blank" className="image">
                <img src={car04} alt="car04" />
            </a>
            <div className="body">
                <h3 className="title">McLaren</h3>
                <span className="subtitle">United Kingdom</span>
                <p className="description">
                    McLaren Automotive (formerly known as McLaren Cars) is a British luxury automotive manufacturer
                    based at the McLaren Technology Centre in Woking, England. The main products of the company are
                    sports cars, which are produced in-house in designated production facilities.
                </p>
                <div className="links">
                    <a href="" className="share-link">Share it</a>
                    <a href="https://en.wikipedia.org/wiki/McLaren_Automotive" target="_blank" className="about-link">Read more</a>
                </div>
            </div>
        </div>
        <div className="card-item">
            <a href="https://en.wikipedia.org/wiki/Hennessey_Performance_Engineering" target="_blank" className="image">
                <img src={car05} alt="car05" />
            </a>
            <div className="body">
                <h3 className="title">Hennessey</h3>
                <span className="subtitle">United States</span>
                <p className="description">
                    Hennessey Performance Engineering (HPE) is an American hypercar manufacturer and high-performance
                    vehicle creator.
                    In addition to building the Venom F5 hypercar, the company specializes in 'making fast cars faster'
                    modifying sports cars from several brands including Chevrolet, Dodge, Cadillac, Jeep, Ford, GMC, and
                    Lincoln.
                </p>
                <div className="links">
                    <a href="" className="share-link">Share it</a>
                    <a href="https://en.wikipedia.org/wiki/Hennessey_Performance_Engineering" target="_blank" className="about-link">Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
