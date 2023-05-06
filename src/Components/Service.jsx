import React from 'react';
import ServiceData from './ServiceData';
import Navbar from './Navbar'
import Card from './Card';
import Technology from './Technology';
import TechnologyData from './TechnologyData';

const Service = () => {

  return (
    <>
      <Navbar />

      <section className='service-section'>
        <div className="container">
          <h1 className='service-head'>
            Our Services
          </h1>

          <div className="service-cards">
            <div className="row gy-4">
              {
                ServiceData.map((val, index) => {
                  return <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    description={val.description}
                  />
                })
              }
            </div>
          </div>

          <div className="technologies-details">
            <h1 className='technology-head'>
              Technologies
            </h1>
            <div className="technology-items">
              <div className="row gy-4">
                {
                  TechnologyData.map((val, index) => {
                    return <Technology
                      key={index}
                      img={val.imgsrc}
                    />
                  })
                }
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Service;