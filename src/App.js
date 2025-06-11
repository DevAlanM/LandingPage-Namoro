import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fotos = [
  "/photos/foto1.jpg",
  "/photos/foto2.jpg",
  "/photos/foto3.jpg",
  "/photos/foto4.jpg",
  "/photos/foto5.jpg",
  "/photos/foto6.jpg",
  "/photos/foto7.jpg",
  "/photos/foto8.jpg",
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.title}
      >
        Alan & Vitória
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={styles.subtitle}
      >
       ❤️ 19-06-2025 ❤️        
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={styles.subtitle}
      >
       4 Anos de Namoro      
      </motion.h2>    

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={styles.carousel}
      >
        <Slider {...settings}>
          {fotos.map((url, i) => (
            <div key={i} style={styles.slide}>
              <img src={url} alt={`Foto ${i + 1}`} style={styles.photo} />
            </div>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={styles.playerWrapper}
      >
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kaweananda/portugal&color=%23ff0066&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          title="SoundCloud Player"
        ></iframe>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)",
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
    color: "#6b0030",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "3rem",
    marginBottom: 8,
    fontWeight: "800",
    textShadow: "2px 2px 4px rgba(255,255,255,0.6)",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: 30,
    fontWeight: "600",
    fontStyle: "italic",
  },
  carousel: {
    maxWidth: 600,
    margin: "0 auto 40px auto",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  slide: {
    padding: 10,
  },
  photo: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    borderRadius: 20,
  },
  playerWrapper: {
    maxWidth: 800,
    margin: "0 auto",
  },
};

export default App;
