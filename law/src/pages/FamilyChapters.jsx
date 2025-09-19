import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';

export default function FamilyChapters() {
  const laws = [
    {
      title: "Hindu Marriage Act, 1955",
      description: "Governs marriage among Hindus, including Buddhists, Jains, and Sikhs. It provides guidelines for ceremonies, conditions for marriage, and legal procedures.",
      year: 1955,
      icon: "fas fa-scale-balanced"
    },
    {
      title: "Special Marriage Act, 1954",
      description: "Provides a legal framework for marriage between individuals of different religions or castes. It allows for civil marriage without religious conversion.",
      year: 1954,
      icon: "fas fa-heart"
    },
    {
      title: "Foreign Marriage Act, 1969",
      description: "Regulates marriages of Indian citizens outside India. It provides legal recognition to marriages solemnized in foreign countries.",
      year: 1969,
      icon: "fas fa-plane"
    },
    {
      title: "Family Courts Act, 1984",
      description: "Establishes Family Courts for speedy settlement of family disputes. These courts handle matters related to marriage, divorce, and child custody.",
      year: 1984,
      icon: "fas fa-handshake"
    }
  ];

  return (
    <div className="family-page">
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <div className="family-content">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="main-content">
          <div className="breadcrumbs-wrapper">
            <Breadcrumps />
          </div>

          <div className="header">
            <h1>Laws Related to Marriage in India</h1>
            <p>
              India has specific laws governing different types of marriages. Here are the key legislations that define marital relationships.
            </p>
          </div>

          <div className="container">
            {laws.map((law, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h3>{law.title}</h3>
                  <p>{law.description}</p>
                </div>
                <div className="card-footer">
                  <div className="year">{law.year}</div>
                  <i className={law.icon}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
