// FeeTransaction.jsx
import React, { useEffect, useState } from 'react';

const FeeTransaction = () => {
    const [food, setFood] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // Update the URL to point to your Node.js server
    const URL = `http://localhost:5000/api/fee-transactions`;

    useEffect(() => {
        async function fetchFood() {
            try {
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setFood(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }

        fetchFood();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="overflow-x-auto" id='Fee'>
            <hr className='mt-5' ></hr>
            <h2 className="text-3xl font-bold mt-5 mb-4 text-center dark:text-violet-600 mt-2 mb-5">Fee Transactions</h2>


            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Year</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt Number</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {food.map((item) => (
                        <tr key={item.ID}>
                              <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src="/profile.png" alt="Avatar" />
            </div>
            <div className="ml-4">
                <div className="text-sm text-gray-500">{item.ID}</div>
            </div>
        </div>
    </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.ST_Name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Course}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Section}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Amount_Paid}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.On_Date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.AcademicYear}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.Fee_Reciept_No}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeeTransaction;
