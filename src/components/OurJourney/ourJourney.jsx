import React, { useEffect } from 'react';

import './ourJourney.scss';
import { images } from '../../constants';
import { Navbar, Map, Contact } from '../../containers';

const OurJourney = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Navbar nav_bgcolor='' nav_color='navbar-dark' />
      <div className='ourjourney__padding'>
        <div className='ourjourney__journey'>
          <div className='ourjourney__journey-content section__padding'>
            <h3 className='head-text'>Journey</h3>
            <p className='p-text'>
              Our Vision is To provide high quality maternal care to every
              pregnant women. So that, we can reduce the passing rate of
              pregnant women completely. We step forward to achieve this.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT - 1 */}
      <div className='ourjourney__content-1'>
        <div className='timeline'>
          <div className='container left'>
            <div className='content'>
              <h3>July 2016 - Idea</h3>
              <p>Brainstorming, Idea Validation, Prototype planning.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>September 2016 - Validate</h3>
              <p>
                Customer interviews, Idea validation, Paper prototypes,
                Stakeholder understanding.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>January 2017 - Prototype</h3>
              <p>
                Process Development, Product Development, Prototype
                manufacturing 10 kits.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>March 2017 - Field Test 1</h3>
              <p>
                Field testing pilot in Madurai 13 Pregnant women tested
                successfully.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>July 2017 - Field Test 2</h3>
              <p>
                Field testing pilot in Wayanad 7 pregnant women under regular
                antenatal visits.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>AUG 2017</h3>
              <p>
                Winner of Elevate 100 from Startup Karnataka received INR
                14,00,00,000 from grant award.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>Nov 2017</h3>
              <p>
                Won the Uber Exchange startup award and visited Uber
                headquarters San Francisco for Startup mentorship program.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Dec 2017</h3>
              <p>
                Got shortlisted for Facebook “CODE FOR NEXT Billion” Startup
                accelerator program.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>APR 2018</h3>
              <p>
                Top 10 startups got Shortlisted for Mass challenge Israel SIX
                Month Startup accelerator program. Received the grant award of
                USD 5,000.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>AUG 2018</h3>
              <p>
                Winner of Millennium Alliance USAID R6 Grant Award winner under
                health category and received INR 60,00,000 grant.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>SEP 2018</h3>
              <p>
                Got selected for Google Launchpad accelerator Class-1 program to
                attend 3-month startup mentorship program from Google.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>OCT 2018</h3>
              <p>
                Winner of Billionth Award for the best health innovation in
                south east Asia by Digital Empowerment foundation.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>JAN 2019</h3>
              <p>
                Started a commercial pilot program in Maharashtra for providing
                digital maternal health care for 2000+ tribal mothers in Kasara
                Tribal village at Thane district.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>APR 2019</h3>
              <p>
                Got selected for Facebook Global Startup summit in USA and
                attended the F8 conference.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>May 2019</h3>
              <p>
                Invited to attend the Google IO 2019 conference in Mountain view
                USA. Featured in Google for India conference.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>JUN 2019</h3>
              <p>
                Got selected for the TOP 5 startup for Sustainable Health
                initiative from Yale Public health program for six-month
                mentorship from Yale Experts.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>AUG 2019</h3>
              <p>Winner of RIDDL-BIRAC Startup SEED Investment pitch.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>SEP 2019</h3>
              <p>
                Register “SAVEMOM PRIVATE LIMITED” in India to receive the Seed
                investment.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>OCT 2019</h3>
              <p>Winner of GoJeK Xccelerator startup Award in Indonesia.</p>
              <p>Winner of “SANGAMAM DIGITAL INNOVATION” Award. </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>NOV 2019</h3>
              <p>
                Received the “GIFTED CITIZIEN 2019” Award from Noble prize
                winner in Mexico CDI event organized by UNESCO
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>FEB 2020</h3>
              <p>
                Received a SEED Investment of INR 30,00,000 from BIRAC-RIIDL{' '}
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>APR 2020</h3>
              <p>
                Launched “QCARE” with Tamil nadu state government to monitor the
                Quarantine people using our health technology. 4000+ people
                monitored using this application.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>DEC 2020</h3>
              <p>Winner of 2020 Anjani Mashelkar Inclusive Innovation award.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Feb 2021</h3>
              <p>Developed the Second generation AlloTricorder</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>May 2021</h3>
              <p> Winner of Jancare challenge organized by NASSCOM/BIRAC.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Aug 2021</h3>
              <p>Winner of NIDHI COVID Grant Funding of 40 Lakhs.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>Oct 2021</h3>
              <p>
                Launched the SIX Pilot project in Vizag District Andra Pradesh.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Dec 2021</h3>
              <p>Winner of Healthy Mom Healthy Baby content USA.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>Feb 2022</h3>
              <p>
                Received the SEED Investment of INR 30 Lakhs from DERBI NIDHI
                Seed Support.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Mar 2022</h3>
              <p>
                Signed a contract with Tamilnadu Women Development corporation.
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>April 2022</h3>
              <p>
                Successfully submitted the Pilot Impact Report and Clinical
                Validation Report to Vizag.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>May 2022</h3>
              <p>Winner of HDFC SMARTUP Parivartan Award.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>Oct 2022</h3>
              <p>
                Launched SAVEMOM in TamilNadu by Honorable Health Minister.
                Tamilnadu State.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <h3>Apr 2023</h3>
              <p> Signed a MoU with Ghana Government for SAVEMOM Deployment.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <h3>May 2023</h3>
              <p>
                Winner Saksham Aavishkar MNCH Challenge received award from
                USAID
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT - 2 */}
      <div className='ourjourney__content-2'>
        <div className='app__wrapper'>
          <div className='app__wrapper_img'>
            <img src={images.process} alt='process' />
          </div>
          <div className='app__wrapper_info'>
            <h3 className='sub__head-text'>Our Progress</h3>
            <small className='head-line' />

            <ul>
              <li>
                Incorporated WHO's recommendations for Antenatal care in the
                Savemom intervention process.
              </li>
              <li>
                Created a calendar in the regional languages that would act as
                both Health Awareness material and Fetus Growth Tracker for the
                pregnant women.
              </li>
              <li>
                Built a system for seamless delivery of Savemom solution with
                our partner NGOs in India through a continuous testing of our
                product and app.
              </li>
              <li>
                Working on developing a Savemom into a full-fledged care
                programme for the pregnant women up to First 1000 days (prenatal
                and postnatal) based on WHO and UNICEF standards and
                recommendations.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAP */}
      <Map />

      {/* CONTACT */}
      <Contact />
    </>
  );
};

export default OurJourney;
