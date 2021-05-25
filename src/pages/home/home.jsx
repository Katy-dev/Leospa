import React from "react";
import Header from "../../components/header";
import styles from "./home.module.scss";
import MainBanner from "../../components/mainBanner";
import AboutBanner from "../../components/aboutBanner";
import BannerProcedures from "../../components/bannerProcedures";
import BannerGallery from "../../components/bannerGallery";
import BannerReview from "../../components/common/sliderComponent/slider/slider";
import BannerTeam from "../../components/bannerTeam";
import BannerAppointment from "../../components/bannerAppointment";
import BannerBlog from "../../components/bannerBlog";
import BannerFeedback from "../../components/bannerFeedback";
import Footer from "../../components/footer";

export const HomePage = () => {
    return (
        <div className={styles.main_wrapper}>
            <Header />
            <MainBanner />
            <AboutBanner />
            <BannerGallery />
            <BannerProcedures />
            <BannerReview />
            <BannerTeam />
            <BannerAppointment />
            <BannerBlog />
            <Footer />
        </div>
    )
}
