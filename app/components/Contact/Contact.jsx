import Link from "next/link";

import css from "./Contact.module.css";

export default function Contact({ user: { name, phone, id } }) {
  return (
    <div className={css.userContainer}>
      <p>{name}</p>
      <p>{phone}</p>
      <Link className={css.links} target="_blank" href={`/user/${id}`}>
        See more ...
      </Link>
    </div>
  );
}
