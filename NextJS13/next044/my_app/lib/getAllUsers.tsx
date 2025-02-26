import React from 'react'

export default async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // check res
    if (!res.ok) throw new Error("Error fetching the data");
    return res.json()
}
