import {   Users, Scale, Heart, Shield, FileText, Home } from "lucide-react"
 
import { Card ,CardContent} from '/src/components/ui/Card'
import './sidebar.css'
export function Sidebar(){
    return( <aside className="sidebar stack-vertical">
            {/* Categories */}
            <Card>
              <CardContent className="card-content-pad">
                <h2 className="section-title">
                  <FileText className="icon" />
                  Categories
                </h2>
                <nav className="nav-stack">
                  <a href="/FamilyLaw" className="nav-link active">
                    <Users className="icon" />
                    Family Law
                  </a>
                  <a href="#" className="nav-link">
                    <Shield className="icon" />
                    Criminal Law
                  </a>
                  <a href="#" className="nav-link">
                    <Scale className="icon" />
                    Civil Law
                  </a>
                  <a href="/DefenceLaw" className="nav-link">
                    <Shield className="icon" />
                    Defence Law
                  </a>
                  <a href="/BussinessLaw" className="nav-link">
                    <FileText className="icon" />
                    Business Law
                  </a>
                  <a href="/PropertyLaw" className="nav-link">
                    <Home className="icon" />
                    Property Law
                  </a>
                  <a href="#" className="nav-link">
                    <FileText className="icon" />
                    Fundamentals Law
                  </a>
                </nav>
              </CardContent>
            </Card>
        
            {/* Online Test */}
            <Card>
              <CardContent className="card-content-pad">
                <h2 className="section-title">
                  <FileText className="icon" />
                  Online Test
                </h2>
                <p className="muted small" style={{ marginBottom: '1rem' }}>Test your legal knowledge with our interactive quizzes.</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="avatar">
                    <span className="avatar-initials">T</span>
                  </div> 
                </div>
                  </CardContent>
 
            </Card>
             
            <Card>
              <CardContent className="card-content-pad"> 
                  <div>
                    <div style={{ fontWeight: 500, color: '#111827' }}>RohitPatil10</div>
                    <div className="small muted">rohitpatil@gmail.com</div>
                  </div>
                
              </CardContent>
            </Card> 
          </aside>
        );
 }
