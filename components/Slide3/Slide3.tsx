import Image from "next/image";
import s from "./Slide3.module.scss";

interface IImage {
  description: string;
  alt: string;
  src: string;
  className: string;
  descriptionClassName: string;
}

const IMAGES: IImage[] = [
  {
    description:
      "Some Ukrainians still live in their ruined homes because they have no alternative.",
    alt: "destroyed room",
    src: "/galery-1.jpg",
    className: s.destroyedRoom,
    descriptionClassName: s.destroyedRoomDescription,
  },
  {
    description:
      "Before the war, the favourite sport of Ukrainians was football. Now the gyms of schools, universities, and sports clubs are used as shelters for those who were left without a home.",
    alt: "sport room",
    src: "/galery-2.jpg",
    className: s.sportRoom,
    descriptionClassName: s.sportRoomDescription,
  },
  {
    description:
      "Before the war, the Kharkiv subway, with its 30 stations, served 158 million passengers annually. With the start of the war, people moved there to live, because the subway serves as a reliable bomb shelter.",
    alt: "shelter",
    src: "/galery-3.jpg",
    className: s.shelter,
    descriptionClassName: s.shelterDescription,
  },
  {
    description:
      "Container camps located away from cities and infrastructure; with communal showers and kitchens.",
    alt: "toilet",
    className: s.toilet,
    descriptionClassName: s.toiletDescription,
    src: "/galery-4.jpg",
  },
];

export default function Slide3() {
  return (
    <div className={s.wrapper}>
      {IMAGES.map((image) => (
        <>
          <div className={`${s.imageWrapper} ${image.className}`}>
            <Image width="100" height="100" src={image.src} alt={image.alt} />
          </div>
          <p className={image.descriptionClassName}>{image.description}</p>
        </>
      ))}
    </div>
  );
}
