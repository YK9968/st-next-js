export default function Contact({ user: { name, phone } }) {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
    </div>
  );
}
