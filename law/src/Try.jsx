import { useState } from 'react';
import { motion } from 'framer-motion';

const LawSathiRedesign = () => {
  const [activeCategory, setActiveCategory] = useState('Family Law');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    'Family Law',
    'Criminal Law',
    'Civil Law',
    'Defence Law',
    'Business Law',
    'Property Law',
    'Fundamentals Law'
  ];

  const familyLawTopics = [
    { name: 'Marriage', icon: '👰' },
    { name: 'Divorce', icon: '💔' },
    { name: 'Succession', icon: '🏛️' },
    { name: 'Child Adoption', icon: '👶' },
    { name: 'Domestic Violence', icon: '🚫' },
    { name: 'Guardianship', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 bg-indigo-100 rounded-lg">
              <span className="text-indigo-600 text-xl">⚖️</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LawSathi
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
                Categories
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
                Online Test
              </a>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
                News
              </a>
            </nav>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search laws..."
                className="pl-4 pr-10 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 w-48 transition-all"
              />
              <button className="absolute right-3 top-2 text-slate-400 hover:text-indigo-500">
                🔍
              </button>
            </motion.div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-4">
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
              Online Test
            </a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">
              News
            </a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search laws..."
                className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
              />
              <button className="absolute right-3 top-2 text-slate-400 hover:text-indigo-500">
                🔍
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-indigo-800">
                <span>📚</span> Categories
              </h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <motion.li
                    key={category}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                        activeCategory === category
                          ? 'bg-indigo-100 text-indigo-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {category}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-indigo-800">
                  <span>📝</span> Online Test
                </h3>
                <p className="text-sm text-slate-600">Test your legal knowledge with our interactive quizzes.</p>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <span className="text-indigo-600">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-900">TejasPartiño</p>
                    <p className="text-xs text-indigo-600">potitlejos1004@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="bg-indigo-100 p-2 rounded-lg text-indigo-600">👨‍👩‍👧</span>
                <span>{activeCategory}</span>
              </h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Home</span>
                <span>→</span>
                <span className="text-indigo-600 font-medium">{activeCategory}</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              <div className="relative h-48 md:h-64 w-full">
                <img
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Family Law Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Understanding {activeCategory} in India
                    </h3>
                    <p className="text-indigo-100 mt-1">Comprehensive guide to all aspects</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Topics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {familyLawTopics.map((topic, index) => (
                <motion.button
                  key={topic.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">{topic.icon}</span>
                  <span className="font-medium text-slate-700">{topic.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Recent Articles */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-indigo-600">📰</span>
                <span>Recent Articles</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          <span className="text-indigo-600">📄</span>
                        </div>
                        <h4 className="font-semibold text-indigo-800">
                          {activeCategory} Article {item}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-4">
                        Detailed analysis of important sections and recent amendments in {activeCategory.toLowerCase()}.
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-indigo-600">Updated {item} day{item > 1 ? 's' : ''} ago</span>
                        <button className="text-indigo-600 font-medium hover:underline flex items-center gap-1">
                          Read more <span>→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Chatbot */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2"
        >
          <span>💬</span>
          <span>Legal Assistant</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LawSathiRedesign;