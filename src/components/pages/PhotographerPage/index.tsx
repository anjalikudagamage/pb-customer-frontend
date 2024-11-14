import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPhotographers } from "../../../redux/actions/photographerActions";
import Navbar from "../../organisms/Navbar";
import PhotographerImage from "../../organisms/PhotographerImage";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import FAQSection from "../../organisms/FAQSection";
import Footer from "../../atoms/Footer";
import ImageGallery from "../../higherOrderComponents/ImageGallery";
import { sectionTitleStyle, photographerDetailsStyle } from "./styles";
import Img from "../../../assets/images/photographer/image1.jpg";
import Img1 from "../../../assets/images/Review/image3.jpg";
import Img2 from "../../../assets/images/Review/Image2.jpg";
import Img3 from "../../../assets/images/Review/image3.jpg";

const PhotographerDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selectedBusinessName = location.state?.businessName;

  const { photographers, isLoading, error } = useAppSelector(
    (state) => state.photographer
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (!photographers) {
      dispatch(fetchPhotographers());
    }
  }, [dispatch, photographers]);

  const photographer = photographers?.find(
    (p) => p.businessName === selectedBusinessName
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const packages = photographer?.packageDetails
    ? Object.keys(photographer.packageDetails).map((name) => {
        const [hours, photos, locations, price] =
          photographer.packageDetails[name].split(", ");
        return {
          name,
          features: [hours, photos, locations],
          price,
        };
      })
    : [];

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <Navbar />

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PhotographerImage
          imageUrl={Img}
          businessName={photographer?.businessName || ""}
          description={photographer?.description || ""}
        />
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
        <Typography sx={photographerDetailsStyle}>
          As a dedicated photographer, my goal is to turn every moment into a
          lasting memory. With years of experience across various photography
          styles—whether portrait, event, commercial, or lifestyle photography—I
          bring both technical expertise and a creative eye to every project. My
          approach centers on capturing authentic expressions and unique details
          that make each story truly personal. From the warmth of a candid smile
          to the grandeur of life’s biggest events, I strive to create images
          that resonate deeply and beautifully. Together, let’s craft images
          that you’ll cherish for a lifetime, reflecting the moments that mean
          the most to you
        </Typography>
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ImageGallery />
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PackageTable packages={packages} />
      </motion.div>

      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ReviewSection
          reviews={[
            {
              image: Img1,
              author: "John",
              rating: 5,
              comment:
                "The photos were absolutely stunning! Every detail was captured perfectly...",
            },
            {
              image: Img2,
              author: "Anna",
              rating: 4,
              comment:
                "The session was amazing, and the photographer made us feel at ease right away...",
            },
            {
              image: Img3,
              author: "Michael",
              rating: 5,
              comment:
                "Incredible experience! From start to finish, the photographer was professional...",
            },
          ]}
        />
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQSection
          faqs={[
            {
              question: "How do I book a session with a photographer?",
              answer: "To book a session, simply...",
            },
            {
              question: "Can I customize a photography package?",
              answer: "Absolutely! Many photographers...",
            },
            {
              question: "How far in advance should I book?",
              answer: "We recommend booking as early as...",
            },
            {
              question: "What happens if I need to reschedule?",
              answer: "If you need to reschedule, you can...",
            },
            {
              question: "Are there any extra fees?",
              answer: "Most package prices include standard...",
            },
          ]}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: false }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default PhotographerDetailsPage;
