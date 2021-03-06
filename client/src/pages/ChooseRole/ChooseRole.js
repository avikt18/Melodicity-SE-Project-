import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import "./ChooseRole.css";
import WaveAnimation from '../../components/WaveAnimation/WaveAnimation'
import { motion } from "framer-motion";
import CreatorInfoModal from '../../components/modals/CreatorInfoModal'
import { userRegister } from "../../redux/auth/authActions";

function ChooseRole() {
  //Animation properties
  const history = useHistory()
  const [show,setShow] = useState(false);
  const preRegistration = useSelector(state => state?.auth?.preRegistration)
  const userInfo = useSelector(state => state?.auth?.preUserInfo)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!preRegistration)
      history.push('/register')
  }, [preRegistration, history])

  const handleRegister = () => {
    const m = {
        ...userInfo
    }
    dispatch(userRegister(m))
  }
  const wave = {
    before: {
      scale: 2.3,
      y: 100
    },
    after: {
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 2,
        ease: "easeInOut"
      }
    }
  };

  const container = {
    before: { opacity: 0 },
    after: {
      opacity: 1,
      transition: {
        delay: 3,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const children = {
    before: { opacity: 0, y: 50 },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3,
        type: "spring",
        damping: 100,
        stiffness: 500,
        duration: 0.5
      }
    }
  };
  return (
    <div className="choose-role-page">
      <CreatorInfoModal 
        show={show}
        setShow={setShow}
      />
      
      <motion.div
        className="glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{
          delay: 2.9,
          duration: 1
        }}
      />
      <WaveAnimation
        iterationCount={3}
        color="#fff"
        height="35px"
        variants={wave}
      />
      <motion.div
        className="container"
        variants={container}
        initial={"before"}
        animate={"after"}>
        <motion.img
          src="/Melodicity-logo.svg"
          alt="Melodicity Logo"
          className="melodicity-logo"
          variants={children}
        />
        <motion.h1 className="heading" variants={children}>
          Tell us who you are
        </motion.h1>
        <motion.div className="card-container" variants={children}>
          <div className="card card-1" onClick={handleRegister}>
            <div className="listener-card-icon" />
            <h1 className="card-heading">Listener</h1>
            <p className="card-description">
              You are a music freak who loves to listen and explore new music
              everyday
            </p>
          </div>
          <div className="card-container-line"></div>
          <div className="card card-2" onClick={()=> setShow(true)}>
            <div className="artist-card-icon" />
            <div className="pad">
              <h1 className="pad-heading">Artist</h1>
              <p className="pad-description">
                You are a passionate musician who wants to share his music with
                the world
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ChooseRole;
