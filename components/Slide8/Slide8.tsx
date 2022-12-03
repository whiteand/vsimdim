import s from "./Slide8.module.scss";

export default function Slide8() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>Integration</h3>
      <div className={s.galery}>
        <div className={s.description}>
          We are offering 3-10 house settlements close to the infrastructure.
          With jobs, kindergartens, schools, stores, and hospitals nearby, the
          family has the opportunity to return to normal life.
        </div>
        <div className={s.image1} />
        <div className={s.image2} />
        <div className={s.image3} />
      </div>
    </div>
  );
}
