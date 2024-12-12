"use client";

import { ChangeEvent, useState } from "react";
import { customers } from "@/CustomersData";
import CustomersList from "./CustomerList";

export default function SearchCustomers() {
    const [searchTerm, setSearchTerm] = useState('');

    const searchedList = customers.filter((customer) => (
        customer.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    ));

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow w-auto max-w-xlg min-w-max">
                <h1 className="text-2xl font-bold mb-6">List Filtering</h1>
                <input
                    type="text"
                    className="block w-full px-4 py-2 mb-4 border rounded"
                    value={searchTerm}
                    placeholder="Enter search term"
                    onChange={handleSearchChange}
                />
                <CustomersList customers={searchedList}/>
            </div>
        </div>
    )
}