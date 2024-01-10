import React, { useEffect, Suspense, Fragment } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import { motion } from 'framer-motion';

const EServiceLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth, user } = useSelector((state) => state.auth);

  // ตรวจสอบว่าผู้ใช้ได้เข้าสู่ระบบหรือไม่
  //useEffect(() => {
  //  if (!isAuth || !user) {
  //    navigate('/');
  //  }
  //}, [isAuth, navigate]);

  // ตรวจสอบการเข้าถึงเส้นทาง
/*   useEffect(() => {
    const canAccess = location.state?.fromInternal === true;
    
    // ถ้าไม่ผ่านเงื่อนไข, กลับไปยังหน้าเริ่มต้น
    if (!canAccess) {
      navigate('/e-service');
    }
  }, [navigate, location]);
 */

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <motion.div
          key={location.pathname}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
              y: 50,
            },
            pageAnimate: {
              opacity: 1,
              y: 0,
            },
            pageExit: {
              opacity: 0,
              y: -50,
            },
          }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.5,
          }}
        >
          {<Outlet />}
        </motion.div>
      </Suspense>
    </>
  );
};

export default EServiceLayout;
