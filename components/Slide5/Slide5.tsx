import s from "./Slide5.module.scss";

export default function Slide5() {
  return (
    <div className={s.wrapper}>
      <div className={s.twoPhotos}>
        <div className={s.firstPhoto} />
        <div className={s.secondPhoto} />
      </div>
      <div className={s.descriptionPhoto}>
        <div className={s.desription}>
          The houses can be produced quickly and easily transported from region
          to region and placed anywhere where there is access to jobs and
          infrastructure. Ukrainian families receive free temporary housing
          through international donors’ help.
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
}
