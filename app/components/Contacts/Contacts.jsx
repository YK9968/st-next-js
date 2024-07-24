"use client";

import css from "./Contacts.module.css"

import { fetchDataContacts } from "@/api-contacts";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetchDataContacts();
      setUsers(response);
    };

    fetchAllUsers();
  }, []);

  return (
    <div>
      <ul className={css.userContainer}>
        {users.map((user) => (
          <li key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
