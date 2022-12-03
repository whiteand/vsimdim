import s from "./SecondSlide.module.scss";

export default function SecondSlide() {
  return (
    <div className={s.wrapper}>
      <p className={s.large}>
        11.3 million Ukrainians lost their homes to war.
      </p>
      <p className={s.small}>
        Until the Russian attack, it was common for Ukrainians to have their own
        homes. Today, millions of Ukrainians are forced to live in subways,
        gyms, other people’s homes, destroyed houses, and if they are lucky, in
        container towns.
      </p>
    </div>
  );
}
