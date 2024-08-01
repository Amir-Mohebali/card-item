import React from 'react'

const showPopup = (link) => {
  const popup = document.querySelector('.popup')
  const result = navigator.clipboard.writeText(link);

  result
    .then(
      popup.classList.add('active')
    )
    .catch(
      new Error('An error occurred, please try again')
    )
    .finally(
      setTimeout(() => {
        popup.classList.remove('active')
      }, 3000)
    )
}

function Links({ link, btn1, btn2 }) {
  return (
    <div className="links">
        <button className="link1" onClick={()=> showPopup(link)}>{btn1}</button>
        <a href={link} target="_blank" className="link2">{btn2}</a>
    </div>
  )
}

export default Links