import React from "react";
import { motion } from "framer-motion";
import WovenImageList from "../../higherOrderComponents/WovenImageList";
import Navbar from "../../organisms/Navbar";
import Footer from "../../atoms/Footer";
import HomeImage from "../../higherOrderComponents/HomeImage";
import ReviewSection from "../../higherOrderComponents/HomeReviewSection";
import ImageSlider from "../../higherOrderComponents/WhyWeChoose";
import FAQPage from "../../higherOrderComponents/HomeFAQ";
import SubscribeForm from "../../higherOrderComponents/SubscribeForm";
import ImageTextSection from "../../higherOrderComponents/ImageTextSection";
import Img1 from "../../../assets/images/ImageText/Image1.jpg";
import Img2 from "../../../assets/images/ImageText/Image2.jpg";

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
        <ImageTextSection
          imageUrl={Img1}
          title="Best Photographer of the Month"
          photographerName="John Doe"
          normalText="Capturing memories with a unique and artistic vision."
          imageOnRight={true}
          textContainerColor="rgba(0, 0, 0, 0.8)"
          titleColor="white"
          maxWidth="300px"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <ImageTextSection
          imageUrl={Img2}
          title="Most Popular Photographer"
          photographerName="Jane Smith"
          normalText="Known for her breathtaking landscape and event photography."
          imageOnRight={false}
          textContainerColor="rgba(34, 34, 34, 0.85)"
          titleColor="white"
          maxWidth="300px"
        />
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
        <ImageSlider />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <SubscribeForm />
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
