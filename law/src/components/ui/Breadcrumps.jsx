import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Home, ChevronRight } from 'lucide-react';
import './breadcrumps.css';

export function Breadcrumps() { 
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Read category name from state if exists
  const categoryName = location.state?.categoryName;

  return (
    <nav className="breadcrumbs">
      <div className="breadcrumb-item">
        <Link to="/" className="breadcrumb-link">
          <Home className="breadcrumb-icon" />
          Home
        </Link>
      </div>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        // Replace the last breadcrumb with categoryName if available
        const displayValue = (isLast && categoryName) ? categoryName : value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <React.Fragment key={to}>
            <div className="breadcrumb-separator">
              <ChevronRight size={16} />
            </div>
            
            <div className="breadcrumb-item">
              {isLast ? (
                <span>{displayValue}</span>
              ) : (
                <Link to={to} className="breadcrumb-link">
                  {displayValue}
                </Link>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
