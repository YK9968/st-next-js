"use client";

import { fetchDataContactsById } from "@/api-contacts";
import { useEffect, useState } from "react";
import css from "./ContactMoreInformation.module.css";
import Link from "next/link";
export default function ContactMoreInformation({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMoreInfo = async () => {
      const response = await fetchDataContactsById(userId);

      setUser(response);
    };
    fetchMoreInfo();
  }, []);

  if (!user) {
    return;
  }

  const {
    username,
    website,
    phone,
    name,
    email,
    address: { city },
    company,
  } = user;

  return (
    <div>
      <h2>Information about user with id: {userId}</h2>
      <ul className={css.infoContainer}>
        <li>
          <strong>User name:</strong> {username}
        </li>
        <li>
          <strong>Website:</strong> {website}
        </li>
        <li>
          <strong>Phone number:</strong> {phone}
        </li>
        <li>
          <strong>Name: </strong> {name}
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>City:</strong> {city}
        </li>
        <li>
          <strong>Company:</strong> {company.name}
        </li>
        <li>
          <strong>Id:</strong> {userId}
        </li>
        <li>
          <Link href="/contacts">Back</Link>
        </li>
      </ul>
    </div>
  );
}
