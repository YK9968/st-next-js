import { fetchDataContacts } from "@/api-contacts";
import Contact from "../Contact/Contact";

const users = fetchDataContacts();
console.log(users);

export default function Contacts() {
  return (
    <div>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
