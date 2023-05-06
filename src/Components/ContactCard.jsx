import React from 'react'

const ContactCard = (props) => {
  return (
    <>
        <div className="contact-card">
            <div className="info-box">
                <i>{props.icon}</i>
                <h3>{props.titlehead}</h3>
                <p>{props.title}</p>
            </div>
        </div>
    </>
  )
}

export default ContactCard