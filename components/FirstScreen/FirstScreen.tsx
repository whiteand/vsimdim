import s from "./FirstScreen.module.scss";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";

export default function FirstScreen() {
  return (
    <div className={s.wrapper}>
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <div className={s.img} />
    </div>
  );
}
