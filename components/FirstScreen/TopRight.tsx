import s from "./TopRight.module.scss";

export default function TopRight(): JSX.Element {
  return (
    <div className={s.wrapper}>
      <p className={s.paragraph}>
        Ukrainian charity project We produce mobile houses for the families
        displaced from their homes because of the war in Ukraine.
      </p>
      <nav>
        <div className={s.languages}>
          <a>UKR</a>
          <a>ENG</a>
        </div>
        <a className={s.buttonLink} href="#">
          I want to help
        </a>
      </nav>
    </div>
  );
}
