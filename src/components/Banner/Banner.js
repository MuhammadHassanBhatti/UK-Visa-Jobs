import React from 'react'
import banner from '../../assets/static/images/banner.png'

const Banner = () => {

  return (
    <div>
      <div className='container-fluid banner-page'>
          <div className="container">
            <div className='row'> 

              <div className='col-lg-6 col-md-12 col-sm-12 mb-5'>
                <div className='Banner-text'>
                  A Job Board Dedicated To People Who Need <span style={{color:"#715da0"}}>Visa Sponsership.</span>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className='banner-grid-text'>
                        <div>
                          <p className='banner-number'>1000+</p>
                          <p>Vacancies</p>
                        </div>
                        <div>
                        <p className='banner-number'>1000+</p>
                          <p>Employess</p>
                        </div>
                        <div>
                        <p className='banner-number'>1000+</p>
                          <p>Applicants</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-12 col-sm-12 '>
                <div className="Banner-image">
                  <img src = {banner} alt="banner" style={{width:"100%",height:"auto", objectFit:'cover'}}  />
                </div>
              </div>
              <div className="row">
           
              
              </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
