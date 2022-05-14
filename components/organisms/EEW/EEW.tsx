import React from "react";
import { cx, css } from "@emotion/css";

interface Place {
  ja: string,
  en: string
};
interface Props {
  place: Place,
  magnitude: number
};
const EEW = (props: Props) => {
  // 緊急地震速報とかを表示するやつだよ

  return (
    <div className={cx("h-2/5", "bg-orange-600", "text-3xl", "fixed", "bottom-0", "w-screen", "left-0", "right-0", "z-50")}>
      <div className={cx("w-11/12", "text-white", "font-bold", "mx-auto", "py-12", "flex", "justify-around", "items-center")}>
        <div>
          <img src="/images/EarthQuakeIcon.svg" alt="緊急地震速報" />
        </div>
        <div>
          <h1 className={cx("text-8xl", "mb-3")}>緊急地震速報! 身を守って!</h1>
          <h2 className={cx("text-3xl", "my-2", "mb-16")}>Earthquake alert! A big earthquake is coming! Get yourself to a safe place!</h2>
          <h2 className={cx("text-5xl", "my-2")}>{props.place.ja}でかなり強い地震 推定震度<span className="text-7xl">4</span> マグニチュード<span className="text-7xl">{props.magnitude}</span></h2>
          <h2 className={cx("text-3xl", "my-2")}>Earthquake off the coast of {props.place.en}. Estimated seismic intensity 4   magnitude {props.magnitude}</h2>
        </div>
      </div>
    </div>
  );
}

export default EEW;