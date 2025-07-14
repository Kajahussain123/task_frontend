import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-green-600">
                    Admin Panel
                </div>

                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Users</a>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <button onClick={handleLogout} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Logout
                    </button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="px-4 py-4 space-y-2">
                        <a href="#" className="block text-gray-700 hover:text-green-600 font-medium">Users</a>
                        <button onClick={handleLogout} className="w-full text-left bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                            Logout
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
