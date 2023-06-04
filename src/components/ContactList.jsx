import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import ContactRow from './ContactRow';

export default function ContactList({ setSelectedContactId, selectedContactId }) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function fetchContacts() {
            try {
                // your fetch logic will go here
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const response2 = await response.json()
                setContacts(response2);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
                    })
                }
            </tbody>
        </table>
    );
}