import React from 'react'
import Image from './Image'
import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'
import CardDescription from './CardDescription'
import Links from './Links'

function CardItem({ image, alt, link, title, subtitle, desc, btn1, btn2}) {
  return (
    <div className="card-item">
        <Image link={link} image={image} alt={alt} />
        <div className="body">
            <CardTitle title={title} />
            <CardSubtitle subtitle={subtitle} />
            <CardDescription desc={desc}/>
            <Links link={link} btn1={btn1} btn2={btn2} />
        </div>
    </div>
  )
}

export default CardItem