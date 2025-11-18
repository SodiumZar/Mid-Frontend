import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './src/components/Navbar/index.jsx';

const RestAPI = () => {
    return (
        <>
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            
            {/* Other components will go here */}
            <main>
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
                </div>
            </main>
        </div>
        </>
    );
};

export default RestAPI;
