import s from "./Slide10.module.scss";

export default function Slide10() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.heading}>How can I help?</h3>
      <div className={s.blocks}>
        <div className={s.left}>
          We believe in the power of small actions and the significance of each
          donation.
        </div>
        <div className={s.right}>
          The cost of producing a house for a family of 4 is $14,500. That
          amount is made up of a bunch of little ones, so every contribution is
          important. People around us today are doing amazing things and these
          things are all composed of small acts of kindness that ordinary people
          do!
        </div>
      </div>
    </div>
  );
}
