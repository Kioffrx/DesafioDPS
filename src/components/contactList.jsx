import { useEffect, useState } from "react";
import Contact from "./contact";
import contactsData from "../data/contacts.json";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: ""
  });

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const addContact = () => {
    if (!form.name || !form.lastname || !form.phone) return;

    const newContact = {
      id: Date.now(),
      ...form,
      favorite: false
    };

    setContacts([...contacts, newContact]);
    setForm({ name: "", lastname: "", phone: "" });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts(
      contacts.map(c =>
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  const sortedContacts = [...contacts].sort(
    (a, b) => b.favorite - a.favorite
  );

  return (
    <div>
      <h2>Agregar contacto</h2>

      <input
        placeholder="Nombre"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Apellido"
        value={form.lastname}
        onChange={e => setForm({ ...form, lastname: e.target.value })}
      />
      <input
        placeholder="Teléfono"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />

      <button onClick={addContact}>Agregar</button>

      <h2>Lista de contactos</h2>

      {sortedContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default ContactList;
