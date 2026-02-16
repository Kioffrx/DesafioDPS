function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact ${contact.favorite ? "favorite" : ""}`}>
      <p><strong>Nombre:</strong> {contact.name} {contact.lastname}</p>
      <p><strong>Teléfono:</strong> {contact.phone}</p>

      <button onClick={() => onToggleFavorite(contact.id)}>
        {contact.favorite ? "Quitar favorito ⭐" : "Agregar favorito ☆"}
      </button>

      <button onClick={() => onDelete(contact.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default Contact;
