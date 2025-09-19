import { Link } from 'react-router-dom'; // Added for navigation
import { Search, Users, Scale, Heart, Shield, FileText, Home, ChevronRight, MessageCircle } from "lucide-react"
import { Input } from '/src/components/ui/input'
import { Card, CardContent } from '/src/components/ui/Card' 
import { Button } from '/src/components/ui/button'
import './maincontent.css'
import './articles.css'
// import { Link } from "react-router-dom";
export function Maincontent(props) {
  return (
    <main className="main-content-area">
      <div className="page-header">
        <Users className="title-icon" />
        <span>{props.name}</span>
      </div>

      {/* Hero Banner */}
      <Card>
        <div className="hero-banner">
          <img src={props.img} alt="Family Law" className="hero-image" />
          <div className="hero-content">
            <h2>{props.content}</h2>
            <p>{props.contentSmall}</p>
          </div>
        </div>
      </Card>

      {/* Topic Cards */}
      <div className="container">
       
     
 
        <div className="cards-container">
          {/* This card now links to the Marriage page */}
          <Link to="/FamilyLaw/Marriage">
            <Card className="topic-card">
              <CardContent>
                <div className="topic-card-content">
                  <Heart className="icon" size={24} />
                  <h3>{props.small1}</h3>
                  <p>{props.smallContent1}</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card className="topic-card">
            <CardContent>
              <div className="topic-card-content">
                <FileText className="icon" size={24} />
                <h3>{props.small2}</h3>
                <p>{props.smallContent2}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="topic-card">
            <CardContent>
              <div className="topic-card-content">
                <Users className="icon" size={24} />
                <h3>{props.small3}</h3>
                <p>{props.smallContent3}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="topic-card">
            <CardContent>
              <div className="topic-card-content">
                <Shield className="icon" size={24} />
                <h3>{props.small4}</h3>
                <p>{props.smallContent4}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="recent-articles">
        <h2>{props.mainArticle}</h2>
        <div className="articles-grid">
          <Card className="article-card">
            <CardContent className="article-content">
              <FileText className="article-icon" size={24} />
              <h3 className="article-title">{props.article1}</h3>
              <p className="article-description">
                Comprehensive guide to the Hindu Marriage Act including all
                sections and amendments.
              </p>
              <div className="article-footer">
                <Button variant="link" className="article-link">
                  Read More →
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="article-card">
            <CardContent className="article-content">
              <Heart className="article-icon" size={24} />
              <h3 className="article-title">{props.article2}</h3>
              <p className="article-description">
                Understanding inter-religion marriages and legal procedures
                under the Special Marriage Act.
              </p>
              <div className="article-footer">
                <Button variant="link" className="article-link">
                  Read More →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

