import s from "./Slide7.module.scss";

export default function Slide7() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>Dignity</h3>
      <div className={s.galery}>
        <div className={s.image1} />
        <div className={s.image2} />
        <div className={s.image3} />
        <div className={s.description}>
          The mobile home is equipped with a kitchen and a bathroom. The team
          was not only concerned with providing a roof over the heads when
          creating it, but also with giving the family back a sense of security
          and comfort.
        </div>
      </div>
    </div>
  );
}
