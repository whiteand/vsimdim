import s from "./Slide9.module.scss";

export default function Slide9() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>Mobility</h3>
      <div className={s.image1} />
      <div className={s.description}>
        In case of unforeseen circumstances, the mobile home can be easily moved
        to another region or another country; or wherever a family member has
        been offered a job.
      </div>
      <div className={s.image2} />
      <div className={s.image3} />
    </div>
  );
}
