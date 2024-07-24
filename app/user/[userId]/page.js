import ContactMoreInformation from "@/app/components/ContactMoreInformation/ContactMoreInformation";

export default function User({ params: { userId } }) {
  return (
    <div>
      <ContactMoreInformation userId={userId} />
    </div>
  );
}
