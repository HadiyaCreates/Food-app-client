// // src/components/ScratchCardPopup.jsx
// import React from "react";
// import ScratchCard from "react-scratchcard";
// import confetti from "canvas-confetti";

// const ScratchCardPopup = ({ onClose }) => {
//   const settings = {
//     width: 300,
//     height: 300,
//     image: "/scratch.png", // A grey scratch overlay image in public folder
//     finishPercent: 50,
//     onComplete: () => {
//       confetti();
//       setTimeout(onClose, 3000); // Auto close after 3s
//     },
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
//       <div className="bg-gray-900 p-4 rounded-lg border border-yellow-400">
//         <h2 className="text-xl text-yellow-300 mb-2 text-center font-semibold">Scratch & Win!</h2>
//         <ScratchCard {...settings}>
//           <div className="w-full h-full flex items-center justify-center bg-yellow-500 text-black font-bold text-xl">
//             🎉 10% OFF Next Order!
//           </div>
//         </ScratchCard>
//       </div>
//     </div>
//   );
// };

// export default ScratchCardPopup;
// import React, { useEffect, useRef } from "react";
// import * as ScratchCard from "scratchcard-js"; // ✅ fixed import

// const ScratchCardPopup = ({ onClose }) => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     const initScratch = async () => {
//       const sc = new ScratchCard.ScratchCard("#scratch-canvas", {
//         scratchType: "circle",
//         containerWidth: 300,
//         containerHeight: 300,
//         imageForwardSrc: "/scratch-cover.png",
//         imageBackgroundSrc: "/coupon-reveal.png",
//         clearZoneRadius: 30,
//         percentToFinish: 50,
//         callback: () => {
//           console.log("Scratch completed");
//           setTimeout(onClose, 1500);
//         },
//       });

//       try {
//         await sc.init();
//       } catch (err) {
//         console.error("ScratchCard init error:", err);
//       }
//     };

//     initScratch();
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//       <div className="bg-gray-900 rounded-lg p-4 shadow-lg relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-lg"
//         >
//           ✕
//         </button>
//         <h2 className="text-yellow-400 font-bold text-center mb-2">
//           Scratch to Reveal Your Reward!
//         </h2>
//         <div id="scratch-canvas" ref={canvasRef}></div>
//       </div>
//     </div>
//   );
// };

// export default ScratchCardPopup;
// import React, { useEffect, useRef } from "react";
// import * as ScratchCard from "scratchcard-js";

// const ScratchCardPopup = ({ onClose }) => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     const initScratch = async () => {
//       const sc = new ScratchCard.ScratchCard("#scratch-container", {
//         scratchType: ScratchCard.SCRATCH_TYPE.CIRCLE,
//         containerWidth: 300,
//         containerHeight: 300,
//         imageForwardSrc: "/inital.png",     // 🎁 Cover image
//         imageBackgroundSrc: "/next.png",    // 🎉 Reward image
//         clearZoneRadius: 30,
//         percentToFinish: 50,
//         callback: () => {
//           import("canvas-confetti").then((confetti) => {
//             confetti.default({ spread: 120, origin: { y: 0.6 } });
//           });

//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         },
//       });

//       try {
//         await sc.init();
//       } catch (err) {
//         console.error("Failed to init scratch card:", err);
//       }
//     };

//     initScratch();
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
//       <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative w-[330px]">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-xl"
//         >
//           ✕
//         </button>
//         <h2 className="text-yellow-400 font-bold text-center mb-3">
//           Scratch to Reveal Your Reward!
//         </h2>

//         {/* Scratch container only */}
//         <div id="scratch-container" ref={canvasRef}></div>
//       </div>
//     </div>
//   );
// };

// export default ScratchCardPopup;


import React, { useEffect, useRef } from "react";
import * as ScratchCard from "scratchcard-js";

const ScratchCardPopup = ({ onClose }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const initScratch = async () => {
      const sc = new ScratchCard.ScratchCard("#scratch-canvas", {
        scratchType: ScratchCard.SCRATCH_TYPE.CIRCLE,
        containerWidth: 300,
        containerHeight: 300,
        imageForwardSrc: "/inital.png",       // Top layer (to scratch)
        imageBackgroundSrc: "",              // Leave empty since we set the reward manually below
        clearZoneRadius: 30,
        percentToFinish: 50,
        callback: () => {
          import("canvas-confetti").then((confetti) => {
            confetti.default({ spread: 120, origin: { y: 0.6 } });
          });

          setTimeout(() => {
            onClose();
          }, 2000);
        },
      });

      try {
        await sc.init();
      } catch (err) {
        console.error("ScratchCard init error:", err);
      }
    };

    initScratch();
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative w-[330px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>
        <h2 className="text-yellow-400 font-bold text-center mb-3">
          Scratch to Reveal Your Reward!
        </h2>

        {/* ✅ Layered structure */}
        <div className="relative w-[300px] h-[300px]">
          {/* 🎁 Reward image at bottom */}
          <img
            src="/next.png"
            alt="Reward"
            className="absolute top-0 left-0 w-full h-full z-0 rounded"
          />

          {/* 🎯 Scratch canvas overlay */}
          <div
            id="scratch-canvas"
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ScratchCardPopup;
