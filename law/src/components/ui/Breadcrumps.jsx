import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Home, ChevronRight } from 'lucide-react';
import './breadcrumps.css';

export function Breadcrumps() { 
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

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
                
                return (
                    <React.Fragment key={to}>
                        <div className="breadcrumb-separator">
                            <ChevronRight size={16} />
                        </div>
                        
                        <div key={to} className="breadcrumb-item">
                            {isLast ? (
                                <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                            ) : (
                                <Link to={to} className="breadcrumb-link">
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                            )}
                        </div>
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
  