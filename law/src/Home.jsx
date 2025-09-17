import React from 'react';
import { Search, Users, Scale, Heart, Shield, FileText, Home, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from '../src/components/ui/button'
import { Link, useLocation } from "react-router-dom";
import { Card ,CardContent} from '../src/components/ui/Card'
import { Sidebar } from './components/ui/sidebar';
import './home.css'
import { Navbar } from './components/ui/Navbar';
import { Breadcrumps } from './components/ui/Breadcrumps';


export default function LawSathiPage() {
  return (
    <div className="page">
      {/* Header */}
      <Navbar/>
      <div className="layout">
        <Sidebar/>
       <Breadcrumps/>                  
          
         

          
          
        </div>
      </div>
  )
}