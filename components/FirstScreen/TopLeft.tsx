import s from "./TopLeft.module.scss";

export default function TopLeft(): JSX.Element {
  return (
    <div className={s.wrapper}>
      <div className={s.circle} />
      <nav className={s.nav}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>About Homes</li>
          <li>Thank You</li>
        </ul>
      </nav>
    </div>
  );
}
