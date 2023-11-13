import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';

import './Landing.css';

export default function Landing() {
  let mobile = false;

  if (window.innerWidth < 600) {
    mobile = true;
  }
  return (
    <section className='landing'>
      <div className='landing-wrapper'>
        {mobile && <img src='Ian_Seto.png' width='100%' height='100%' />}
          <div className='landing-headers'>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .66 }}
            >
              <h1 className='landing-header'>Hi,</h1>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .99 }}
            >
              <h1 className='landing-header'>I'm Ian Seto.</h1>
            </motion.div>
            <motion.div
              initial={{ y: 37.5 , opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.32 }}
            >
              <h2 className='landing-headline'>Software Engineer.</h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 37.5 , opacity: 0 }}
            whileInView={{ y: 0 , opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.65 }}
          >
            <p className='landing-introduction'>
              <Typography style={{ fontSize: '1.5em' }} variant='body1' className='landing-introduction'>I'm passionate about developing and designing engaging, intricate, scalable, and robust software.</Typography>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 37.5 , opacity: 0 }}
            whileInView={{ y: 0 , opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.98 }}
          >
            <ul className='landing-contacts-list'>
              <li className='landing-contacts-list-item'>
                <a 
                  className='landing-contacts-item-link' 
                  href='mailto:i.seto00@gmail.com' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <EmailIcon />
                </a>
              </li>
              <li className='landing-contacts-list-item'>
                <a 
                  className='landing-contacts-item-link' 
                  href='https://www.linkedin.com/in/ianseto' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li className='landing-contacts-list-item'>
                <a 
                  className='landing-contacts-item-link' 
                  href='https://www.github.com/setoi1' 
                  rel='noreferrer' 
                  target='_blank'
                >
                  <GitHubIcon className='github-icon'/>
                </a>
              </li>
            </ul>
          </motion.div>
        <motion.div
          initial={{ y: 37.5 , opacity: 0 }}
          whileInView={{ y: 0 , opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.31 }}
        >
        </motion.div>
      </div>
      {!mobile && <img src='Ian_Seto.png' />}
    </section>
  );
}
