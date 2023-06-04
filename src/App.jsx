import React from 'react'
import ContactList from "./components/ContactList.jsx"
import ContactFin from "./components/ContactFin.jsx"
import { useState } from 'react'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <ContactFin selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
      )}
    </>
  );
}