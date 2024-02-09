import React from "react";
import Header from "../../components/header/header";
import BestSellig from "../../components/bestSelling/BestSellig";
import OurProduct from "../../components/ourProducts/OurProduct";
import Exclusive_offer from "../../components/exclusive_offer/exclusive_offer";
import Designer from "../../components/designer_Clothes/Designer";
import FeedbackCorner from "../../components/feedback_Corner/FeedbackCorner";
import Footer from "../../components/footer/footer";
function Home() {
  return (
    <>
      <Header />
      <BestSellig />
      <OurProduct />
      <Exclusive_offer />
      <Designer />
      <FeedbackCorner />
      <Footer />
    </>
  );
}

export default Home;
