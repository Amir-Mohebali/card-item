import React from 'react'
import car01 from '/car01.jpg'
import car02 from '/car02.webp'
import car03 from '/car03.webp'
import car04 from '/car04.webp'
import car05 from '/car05.jpg'
import CardItem from './CardItem'

function Car() {
  return (
    <div className="card">
        <CardItem 
            image={car01} 
            alt="car01" 
            link="https://en.wikipedia.org/wiki/Lamborghini"
            title="Lamborghini" 
            subtitle="Italia" 
            desc="Lamborghini is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata
                Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio
                Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini
                S.p.A. in 1963 to compete with Ferrari."
            btn1="Share it"
            btn2="Read more" 
        />
        <CardItem 
            image={car02} 
            alt="car02"
            link="https://en.wikipedia.org/wiki/Bugatti"
            title="Bugatti" 
            subtitle="France" 
            desc="Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.
                The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born
                industrial designer Ettore Bugatti. The cars were known for their design beauty and numerous race
                victories."
            btn1="Share it"
            btn2="Read more" 
        />
        <CardItem 
            image={car03} 
            alt="car03"
            link="https://en.wikipedia.org/wiki/Ferrari"
            title="Ferrari" 
            subtitle="Italia" 
            desc="Ferrari is an Italian luxury sports car manufacturer based in Maranello. As Described by the Wall
                Street Journal, Ferrari possesses a robust and powerful brand image. Owing to a combination of its
                cars, enthusiast culture, and successful licensing deals, in 2019 Ferrari was labelled the world's
                strongest brand."
            btn1="Share it"
            btn2="Read more" 
        />
        <CardItem 
            image={car04} 
            alt="car04"
            link="https://en.wikipedia.org/wiki/McLaren_Automotive"
            title="McLaren" 
            subtitle="United Kingdom" 
            desc="McLaren Automotive (formerly known as McLaren Cars) is a British luxury automotive manufacturer
                based at the McLaren Technology Centre in Woking, England. The main products of the company are
                sports cars, which are produced in-house in designated production facilities."
            btn1="Share it"
            btn2="Read more" 
        />
        <CardItem 
            image={car05} 
            alt="car05"
            link="https://en.wikipedia.org/wiki/Hennessey_Performance_Engineering"
            title="Hennessey" 
            subtitle="United States" 
            desc="Hennessey Performance Engineering (HPE) is an American hypercar manufacturer and high-performance
                vehicle creator. In addition to building the Venom F5 hypercar, the company specializes in 'making fast cars faster'
                modifying sports cars from several brands including Chevrolet, Dodge, Cadillac, Jeep, Ford, GMC, and
                Lincoln."
            btn1="Share it"
            btn2="Read more" 
        />        
        
    </div>
  )
}

export default Car