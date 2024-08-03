import React from 'react';
import './CategorySection.css';

const categories = [
  { name: 'All', icon: '🌟' },
  { name: 'Comedy Shows', icon: '🎭' },
  { name: 'Music Shows', icon: '🎤' },
  { name: 'Workshops', icon: '🛠️' },
  { name: 'Meetups', icon: '🤝' },
  { name: 'Kids', icon: '🧒' },
  { name: 'Conferences', icon: '📚' },
  { name: 'Performances', icon: '🎨' },
  { name: 'Exhibitions', icon: '🖼️' },
  { name: 'Business', icon: '💼' },
  { name: 'Food & Drink', icon: '🍴' }
];

const CategorySection = ({ onSelectCategory }) => {
  return (
    <div className="category-section">
      {categories.map((category, index) => (
        <div
          className="category"
          key={index}
          onClick={() => onSelectCategory(category.name)}
        >
          <div className="icon">{category.icon}</div>
          <div className="name">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
