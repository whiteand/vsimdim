import s from "./Slide11.module.scss";

export default function Slide11() {
  return (
    <div className={s.wrapper}>
      <div className={s.grid}>
        <h3 className={s.heading}>
          It’s not hard to be a hero by taking small actions. Let’s build
          Vsimdim together!
        </h3>
        <p className={s.description}>
          Feel free to talk about those you’ve helped. That doesn’t make you a
          braggart, it serves as a reminder and inspiration to those around you
          and sets up the beginning of a cycle of doing good in the world.
        </p>
        <a className={s.link}>I want to help</a>
      </div>
    </div>
  );
}
