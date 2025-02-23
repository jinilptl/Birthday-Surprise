import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Confetti from "react-confetti";
import image1 from "../src/assets/images/img6.png"
import image2 from "../src/assets/images/img7.png"
import image15 from "../src/assets/images/img8.png"
import image13 from "../src/assets/images/img9.png"
import image5 from "../src/assets/images/img19.png"
import image6 from "../src/assets/images/img15.png"
import image7 from "../src/assets/images/img13.png"
import image8 from "../src/assets/images/img20.png"
import image3 from "../src/assets/images/img12.png"
import image9 from "../src/assets/images/img9.png"
import image11 from "../src/assets/images/img17.png"
import image12 from "../src/assets/images/img18.png"
import image4 from "../src/assets/images/img21.png"
import image14 from "../src/assets/images/img22.png"
import image10 from "../src/assets/images/img23.png"

import welcomeAudio from "../src/assets/audio/Khaabon.mp3";
import galleryAudio from "../src/assets/audio/Khoobsurat.mp3";
import wishesAudio from "../src/assets/audio/wihses_song.mp3";

import { FaPause, FaPlay } from "react-icons/fa";
const images = [image1, image2, image3, image4, image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15];
const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};



const wishes = [

  "🎭 Aapko ek aisa banda mile jo sirf dikhne me nahi, dil se bhi Shah Rukh Khan jaisa ho – pyaar me full drama aur care me full perfection! ❤️😆",
  "🛍️ Aapko woh sab kuch mile jo tu Amazon cart me add karke bhool jaati hai – happiness, success aur unlimited shopping budget! 😂",
  "☕ Iss saal Aapke ghar ke samne ek Starbucks khul jaaye, ek Range Rover teri parking me ho, aur ek loyal banda sirf Aapke liye coffee lekar ready rahe! 🚗💖",
  "💼 Iss saal Aapki dream job Google ya phir usse bhi badi company me lag jaye, aur jo bhi ladka mile vo bhi CEO level ka ho! (Bas HR interview clear karna na bhoolna 😜)",
  "📶 Aapke life ke sare tension aise disappear ho jaaye jaise tere ghar ka Wi-Fi tabhi slow hota hai jab sabse zaroori kaam karna ho! 😜",
  "💸 Aapko itna paisa mile ki tu bina price tag dekhe shopping kar sake, lekin phir bhi tere andar ka ‘50% off wali deal’ ka pyaar kabhi na khatam ho! 😂",
  "📱 Aapko liye ek aisa ladka aaye jo sirf tere WhatsApp stories dekhne nahi, balki tere liye stories banane aaye! 😂💖"
];

const gradientColors = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-green-400 via-teal-500 to-blue-500"
];

const App = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % gradientColors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className={`h-screen bg-gradient-to-r ${gradientColors[bgIndex]} text-center transition-all duration-1000 flex flex-col`}>
        <nav className="flex justify-center gap-10 py-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white text-lg shadow-2xl rounded-b-lg px-6 border-b-4 border-yellow-300">
          <Link to="/" className="hover:text-yellow-300 font-semibold transition duration-300"> Welcome Haven 🌟 </Link>
          <Link to="/wishes" className="hover:text-yellow-300 font-semibold transition duration-300"> Heartfelt Wishes 💖</Link>
          <Link to="/images" className="hover:text-yellow-300 font-semibold transition duration-300"> Timeless Treasures ⏳</Link>
        </nav>
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </div>
        <footer className="text-center text-white p-4">
          <p className="text-sm font-bold">🎁 Surprise from your coder friend</p>
          <p className="text-xs">Made by Jinil Patel</p>
        </footer>
      </div>
    </Router>
  );
};

const WelcomePage = () => {
  return (
    <PageWithAudio audioSrc={welcomeAudio} content={
    <div className="flex flex-col items-center justify-center h-full flex-grow relative overflow-hidden">
      <Confetti numberOfPieces={100} recycle={false} />
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }} 
        className="text-4xl font-bold text-yellow-300 mb-9 drop-shadow-lg mt-15"
      >
        🎉 Happy Birthday Maitri 🎉
      </motion.h2>
      <motion.img 
        src={image1} 
        alt="Birthday Celebration"
        className="w-60 h-60 object-cover rounded-lg shadow-md border-4 border-white mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }} 
        className="text-4xl font-bold text-yellow-300 mb-9 drop-shadow-lg"
      >
        🎉 Many Many Happy Returns Of The Day 🎉
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, delay: 0.5 }} 
        className="text-2xl text-white"
      >
        Ek chhota sa digital surprise, specially coded just for you Maitri ! 🎁💻 - From your coder friend 😊
      </motion.p>
    </div>
    } />
  );
};

const Wishes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audio = new Audio(wishesAudio);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % wishes.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center h-full flex-grow relative bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-400 p-6 text-center overflow-hidden">
      <Confetti numberOfPieces={50} recycle={false} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="p-8 border-4 border-white rounded-2xl shadow-2xl bg-white text-pink-700 text-lg font-semibold max-w-xl"
        >
          <p className="text-3xl drop-shadow-md">{wishes[currentIndex]}</p>
        </motion.div>
      </AnimatePresence>

      {/* Wishes Animation Pause Button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute right-4 top-60 bg-white text-pink-700 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-pink-200 transition "
      >
        {isPaused ? <FaPlay /> : <FaPause />} {isPaused ? "Resume wishes" : "Pause wishes"}
      </button>

      {/* Music Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-5 right-5 bg-white text-pink-700 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-pink-200 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? "Pause Music" : "Play Music"}
      </button>

      <h2 className="absolute right-4 top-80 bg-white text-pink-700 px-3 py-2 rounded-lg shadow-md text-sm font-semibold w-[210px] text-justify">
        ⏸️ Ye button se wishes ki animation rok sakte ho aur music bhi control kar sakte ho!
      </h2>
    </div>
  );
};


const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageWithAudio audioSrc={galleryAudio} content={
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <div className="p-6 flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    <h2 className="text-3xl font-extrabold text-center mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
  Captured Moments : A Glimpse into Timeless Memories ✨
</h2>
<h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-xl">
  Happy Moments Of Your Life !😊
</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer border-4 border-gray-700 hover:border-yellow-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          >
            <motion.img
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-[350px] rounded-xl object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative p-4 bg-gray-900 rounded-lg shadow-2xl border-4 border-yellow-400"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={selectedImage}
              alt="Selected Memory"
              className="max-w-full max-h-[80vh] rounded-lg shadow-xl"
            />
            <button
              className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold hover:bg-yellow-500 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ✖ Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
    </div>
    } />
  );
};
const PageWithAudio = ({ audioSrc, content }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audio = new Audio(audioSrc);
  audio.loop = true;

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <div>
      {content}
      <button onClick={() => setIsPlaying(!isPlaying)} className="fixed bottom-5 right-5 bg-white p-3 rounded-full shadow-lg">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};
export default App;