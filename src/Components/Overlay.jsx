import { useEffect } from "react";
import gsap from "gsap";
// y: animateIn ? "0" : "100%",
const Overlay = ({ animateIn, text }) => {
  useEffect(() => {
    // Initial state
    gsap.set(".your-container", {
      transformOrigin: "center bottom",
      borderRadius: "0 0 15% 15%",
      // y: animateIn ? "100%" : 0,
      y: "100%",
    });

    //Enter Animation
    gsap.to(".your-container", {
      y: "0",
      duration: 0.8,
      ease: "power4.inOut",
    });

    // Inner animation
    gsap.to(".second-cont", {
      borderRadius: "0 0 60% 60%",
      y: "25%",
      duration: 0.7,
      ease: "power4.inOut",
      delay: 1.4,
    });

    // Exit animation
    gsap.to(".your-container", {
      y: "-130%",
      rotation: 0.001,
      duration: 0.8,
      ease: "power4.inOut",
      delay: 1.5,
    });

    // Delay before starting the inner animation

    // Use tl.pause() to stop the timeline initially if needed
    // tl.pause();

    // If you want to loop the animation, you can use tl.repeat(-1) at the end

    // Ensure to clean up animations on component unmount
  }, []);

  return (
    <div
      className="your-container bg-[#181418] text-white h-[101vh] w-full fixed top-0 left-0 z-[999999999999999]"
      style={{ borderRadius: "0 0 15% 15%" }}>
      <div className="relative flex flex-col h-screen justify-center items-center z-20">
        <section className="block mx-[1em] text-center max-w-[600px] ">
          <div className="scale-90 flex items-center justify-center gap-[1em]">
            <div className="w-6 h-6 rounded-full bg-white" />
            <h2 className="leading-[1.15em] tracking-[0] font-[400] text-[5.6em]">
              {text}
            </h2>
          </div>
        </section>
      </div>
      <div className="second-cont bg-[#181418] w-full h-2/3 absolute bottom-1" />
    </div>
  );
};

export default Overlay;
