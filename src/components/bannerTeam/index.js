import React from "react";
import styles from "./bannerTeam.module.scss";

const BannerTeam = () => {
    const facebook = "/assets/image/icon/facebook.svg";
    const linkedin = "/assets/image/icon/linkedin.svg";
    const twitter = "/assets/image/icon/twitter.svg";
    const instagram = "/assets/image/icon/instagram.svg";

    let listMembers = [
        {
            photo: "/assets/image/photo/blockTeam2.jpg",
            name: "Mary Fortigo",
            position: "Cosmetologist",
        },
        {
            photo: "/assets/image/photo/blockTeam3.jpg",
            name: "Lorin Oscar",
            position: "Masseur",
        },
        {
            photo: "/assets/image/photo/blockTeam1.jpg",
            name: "Erin Taler",
            position: "Administrator",
        },
    ];

    return (
        <section className={styles.container}>
            <div className={styles.container_description}>
                <h3 className={styles.title}>
                    Experienced Team
                </h3>
                <p className={styles.description}>To doesn't his appear replenish together called he of mad place won't
                    wherein blessed second every wherein were meat kind wherein and martcin</p>
            </div>
            <div className={styles.wrapper_members}>
                {
                    listMembers.map((member, index) => {
                        return (
                            <div key={index}
                                 className={styles.member}>
                                <img src={member.photo} alt="person"/>
                                <div className={styles.member_details}>
                                    <h6>{member.name}</h6>
                                    <span>{member.position}</span>
                                    <div className={styles.member_social}>
                                        <a href="https://www.facebook.com/"
                                           target="_blank" rel="noreferrer">
                                            <img src={facebook} alt="social"/>
                                        </a>
                                        <a href="https://www.linkedin.com/"
                                           target="_blank" rel="noreferrer">
                                            <img src={linkedin} alt="social"/>
                                        </a>
                                        <a href="https://twitter.com/"
                                           target="_blank" rel="noreferrer">
                                            <img src={twitter} alt="social"/>
                                        </a>
                                        <a href="https://www.instagram.com/"
                                           target="_blank" rel="noreferrer">
                                            <img src={instagram} alt="social"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
};

export default BannerTeam;
