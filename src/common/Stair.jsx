import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const stairs = gsap.utils.toArray(".stair", stairParentRef.current);

      if (!stairs.length || !pageRef.current) return;

      const tl = gsap.timeline();

      // Initial state
      gsap.set(stairs, {
        height: "0%",
        y: "0%",
      });

      gsap.set(pageRef.current, {
        opacity: 0,
      });

      // 1. Stairs open from bottom
      tl.to(stairs, {
        height: "100%",
        duration: 0.45,
        stagger: {
          amount: -0.15,
        },
        ease: "power2.inOut",
      });

      // 2. Stairs move down
      tl.to(stairs, {
        y: "100%",
        duration: 0.45,
        stagger: {
          amount: -0.15,
        },
        ease: "power2.inOut",
      });

      // 3. Reveal page
      tl.to(
        pageRef.current,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );

      return () => {
        tl.kill();
      };
    },
    {
      dependencies: [currentPath],
      scope: stairParentRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div>
      <div
        ref={stairParentRef}
        className="fixed top-0 left-0 z-50 h-screen w-full pointer-events-none"
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-[#03363D]" />
          <div className="stair h-full w-1/5 bg-[#03363D]" />
          <div className="stair h-full w-1/5 bg-[#03363D]" />
          <div className="stair h-full w-1/5 bg-[#03363D]" />
          <div className="stair h-full w-1/5 bg-[#03363D]" />
        </div>
      </div>

      <div ref={pageRef}>
        {children}
      </div>
    </div>
  );
};

export default Stairs;