import s from "./ThirdSlide.module.scss";

export default function ThirdSlide() {
  return (
    <div className={s.wrapper}>
      <div className={s.first}>
        <div />
        <p>
          Some Ukrainians still live in their ruined homes because they have no
          alternative.
        </p>
      </div>
      <div className={s.second}>
        <div />
        <div>
          <p>
            Before the war, the favourite sport of Ukrainians was football. Now
            the gyms of schools, universities, and sports clubs are used as
            shelters for those who were left without a home.
          </p>
        </div>
      </div>
    </div>
  );
}
