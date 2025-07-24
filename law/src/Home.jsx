import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndiaBixHome = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [userData, setUserData] = useState({
    displayName: 'TejasPariño',
    email: 'patlitejas004@gmail.com',
    photoURL: null
  });

  useEffect(() => {
    // Get user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData({
        displayName: parsedUser.displayName || 'User',
        email: parsedUser.email || '',
        photoURL: parsedUser.photoURL || null
      });
    }
  }, []);

  const categories = [
    { name: 'Family law', subItems: ['Marriage', 'Divorce', 'Adoption', 'Child Custody'] },
    { name: 'Criminal law', subItems: ['Theft', 'Assault', 'Fraud', 'Cyber Crime'] },
    { name: 'Constitutional law', subItems: ['Fundamental Rights', 'Directive Principles', 'Amendments'] },
    { name: 'Business law', subItems: ['Contracts', 'Taxation', 'Intellectual Property'] },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  // Get initials from display name
  const getInitials = (name) => {
    if (!name) return 'U';
    const names = name.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            LawSathi
          </motion.h1>
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2 bg-indigo-600 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {userData.photoURL ? (
                <img 
                  src={userData.photoURL} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <span className="w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center text-indigo-800 font-bold">
                  {getInitials(userData.displayName)}
                </span>
              )}
              <div>
                <p className="font-medium">{userData.displayName}</p>
                <p className="text-xs text-indigo-200">{userData.email}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="md:col-span-1">
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-indigo-600 text-white px-6 py-4">
                <h2 className="text-xl font-semibold">Categories</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {categories.map((category, index) => (
                  <div key={index} className="px-6 py-4">
                    <button 
                      onClick={() => toggleCategory(index)}
                      className="w-full flex justify-between items-center text-left font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                    >
                      <span>{category.name}</span>
                      <motion.span
                        animate={{ rotate: expandedCategory === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>
                    
                    {expandedCategory === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 pl-4 space-y-2"
                      >
                        {category.subItems.map((item, i) => (
                          <motion.a
                            key={i}
                            href="#"
                            className="block text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-md transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {item}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="px-6 py-4">
                  <a href="#" className="text-indigo-600 font-medium hover:underline">+ more</a>
                </div>
              </div>
            </motion.div>

            {/* Online Test Section */}
            <motion.div 
              className="bg-white rounded-xl shadow-md mt-8 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Online Test</h3>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <p className="font-medium">{userData.displayName}</p>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                  Start New Test
                </button>
              </div>
            </motion.div>
          </div>

          {/* Rest of your component remains the same */}
          {/* ... */}
        </div>
      </main>

      {/* Footer remains the same */}
      {/* ... */}
    </div>
  );
};

export default IndiaBixHome;