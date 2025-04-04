import { useEffect, useState } from "react";

const AnimatedIntro = ({ onFinish }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Start fading out
      setTimeout(() => {
        onFinish(); // Navigate to home after fade-out
      }, 1000); // 1s fade-out duration
    }, 10000); // Video duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
        opacity: isFadingOut ? 0 : 1, // Fades out
        transition: "opacity 1s ease-out", // Smooth transition
      }}
    >
      <video
        src="/assets/videos/starting video.mp4"
        muted
        playsInline
        autoPlay
        onEnded={() => setIsFadingOut(true)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </section>
  );
};

export default AnimatedIntro;
