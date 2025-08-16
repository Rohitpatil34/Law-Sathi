// pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSubcategories, fetchActsByCategory } from '../api';

const CategoryPage = () => {
  const { mainCategory } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [acts, setActs] = useState([]);
  const [selectedSub, setSelectedSub] = useState('');

  useEffect(() => {
    fetchSubcategories(mainCategory).then(res => setSubcategories(res.data));
  }, [mainCategory]);

  const loadActs = (sub) => {
    setSelectedSub(sub);
    fetchActsByCategory(sub).then(res => setActs(res.data));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Subcategory Sidebar */}
      <div className="md:col-span-1">
        <Sidebar />
        <div className="mt-6">
          <h3 className="font-semibold text-indigo-700 mb-3">Subcategories</h3>
          <ul className="space-y-2">
            {subcategories.map(sub => (
              <li key={sub}>
                <button
                  onClick={() => loadActs(sub)}
                  className={`block px-3 py-2 rounded w-full text-left hover:bg-indigo-100 ${
                    selectedSub === sub ? 'bg-indigo-200 text-white' : ''
                  }`}
                >
                  {sub}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Acts Display */}
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">{selectedSub || mainCategory}</h2>
        <ul className="space-y-4">
          {acts.map(act => (
            <li key={act._id} className="bg-white p-4 rounded shadow">
              {act.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
