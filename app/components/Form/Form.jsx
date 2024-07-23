"use client";

export default function Form() {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.contacts.value;

    console.log(value);
    form.reset();
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="contacts" placeholder="Search Contacts" />
      <button>Search</button>
    </form>
  );
}
