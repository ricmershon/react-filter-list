import { CustomerData } from "@/CustomersData";

interface CustomersListProps {
    customers: Array<CustomerData>
}

export default function CustomersList( { customers }: CustomersListProps) {
    return (
        <div>
            {customers.length === 0 ? (
                <p>No results found</p>
            ) : (
                <div className="relative overflow-x-auto p-4 border rounded">
                    <table className="w-auto text-left text-gray-700">
                        <thead className="uppercase bg-gray-50">
                            <tr>
                                <th className="table-header-element">Name</th>
                                <th className="table-header-element">Age</th>
                                <th className="table-header-element">Location</th>
                                <th className="table-header-element">Gender</th>
                                <th className="table-header-element">Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr
                                    key={customer.name}
                                    className="border-b"
                                >
                                    <td className="table-data-element">{customer.name}</td>
                                    <td className="table-data-element">{customer.age}</td>
                                    <td className="table-data-element">{customer.location}</td>
                                    <td className="table-data-element">{customer.gender}</td>
                                    <td className="table-data-element">{customer.income}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}