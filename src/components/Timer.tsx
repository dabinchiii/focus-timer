"use client";

import Image from "next/image";
import { Modak } from "next/font/google";

import TimerButton from "./TimerButton";

import useTimer from "@/hooks/useTimer";

const modak = Modak({
  variable: "--font-modak",
  weight: "400",
  subsets: ["latin"],
});

const startIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/start.svg"}
    width={24}
    height={24}
    alt="start"
  />
);
const pauseIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/pause.svg"}
    width={24}
    height={24}
    alt="pause"
  />
);
const resetIcon = (
  <Image
    src={(process.env.PUBLIC_URL || "") + "/images/icons/reset.png"}
    width={40}
    height={40}
    alt="reset"
  />
);

const Timer = (): React.ReactNode => {
  const {
    // timeLeft,
    formattedTimeLeft,
    // isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimer({
    initialMinutes: 5,
    onFinish: () => {},
  });

  return (
    <div className="p-4 border flex flex-col gap-8 p-8 mx-auto w-[500px]">
      <div
        className={`${modak.className} font-modak text-white text-8xl [text-shadow:_0_10px_10px_rgb(0_0_0_/_0.25)] `}
      >
        {formattedTimeLeft}
      </div>
      <div className="flex gap-4">
        <TimerButton onClick={startTimer}>{startIcon}</TimerButton>
        <TimerButton onClick={pauseTimer}>{pauseIcon}</TimerButton>
        <TimerButton onClick={() => resetTimer()}>{resetIcon}</TimerButton>
      </div>
    </div>
  );
};

export default Timer;
