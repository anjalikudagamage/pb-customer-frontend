import React from "react";
import { motion } from "framer-motion";
import WovenImageList from "../../higherOrderComponents/WovenImageList";
import Navbar from "../../organisms/Navbar";
import Footer from "../../atoms/Footer";
import HomeImage from "../../higherOrderComponents/HomeImage";
import ReviewSection from "../../higherOrderComponents/HomeReviewSection";
import ImageSlider from "../../higherOrderComponents/WhyWeChoose";
import FAQPage from "../../higherOrderComponents/HomeFAQ";

const HomePage: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }} 
      >
        <HomeImage />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <WovenImageList />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <ReviewSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <ImageSlider />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <FAQPage />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;

