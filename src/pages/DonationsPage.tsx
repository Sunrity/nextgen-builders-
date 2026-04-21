"use client";

import { Link } from "react-router-dom";

const DonationsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="bg-[#0B132B] text-white py-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mt-20">Donations</h1>
               <p className="text-gray-300 mt-2">
                    Together, we are funding education, restoring hope, and building the next generation of leaders.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-gray-500">Total Raised</h3>
                        <p className="text-2xl font-bold text-green-600">
                            ₦10,000
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-gray-500">Deployed</h3>
                        <p className="text-2xl font-bold text-blue-600">
                            ₦0.00
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <h3 className="text-gray-500">Current Balance</h3>
                        <p className="text-2xl font-bold text-[#0B132B]">
                            ₦10,000
                        </p>
                    </div>

                </div>

                {/* Donation Section */}
                <div className="bg-white p-6 rounded-xl shadow mb-10">

                    <h2 className="text-xl font-semibold mb-3">
                        Make a Donation
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Your support is more than a donation — it is a lifeline that helps us empower communities, transform lives, and create lasting impact.
                    </p>

                    {/* Bank Details */}
                    <div className="space-y-2 text-gray-700 mb-6">
                        <p><strong>Bank Name:</strong> Zenith Bank</p>
                        <p><strong>Account Name:</strong> Alkebulan Foundation</p>
                        <p><strong>Account Number:</strong> 0000000000</p>
                    </div>

                    {/* Donate Button */}
                    <Link
                        to="/contact"
                        className="inline-block bg-[#0B132B] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Donate Now
                    </Link>

                </div>

                {/* Impact Section */}
                <div className="bg-[#0B132B] text-white p-8 rounded-xl text-center">

                    <h2 className="text-2xl font-bold mb-3">
                        Why Your Support Matters
                    </h2>

                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Every donation goes directly into education, empowerment,
                        community development, and life-changing initiatives.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#0B132B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                        Start Giving
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default DonationsPage;