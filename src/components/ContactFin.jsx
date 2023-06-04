import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'

export default function ContactFin({ selectedContactId }) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function fetchContacts() {
            try {
                // your fetch logic will go here
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
                const response2 = await response.json()
                console.log(response2)
                setContacts(response2);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()

    }, []);

    return (
        <div>
            {contacts.id}
            {contacts.name}
            {contacts.username}
            {contacts.email}
            {contacts.website}
            {contacts.phone}
        </div>
    );
}