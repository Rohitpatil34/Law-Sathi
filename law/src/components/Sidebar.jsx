// components/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import { fetchMainCategories } from '../api';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMainCategories().then(res => setMainCategories(res.data));
  }, []);

  return (
    <aside className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-indigo-800">Categories</h2>
      <ul className="space-y-2">
        {mainCategories.map(cat => (
          <li key={cat}>
            <button
              onClick={() => navigate(`/category/${encodeURIComponent(cat)}`)}
              className="text-left w-full px-3 py-2 rounded hover:bg-indigo-50 text-slate-700"
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
