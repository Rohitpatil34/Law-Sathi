import { Search, Users, Scale, Heart, Shield, FileText, Home, ChevronRight, MessageCircle } from "lucide-react"
import { Input } from '/src/components/ui/input'
import { Card, CardContent } from '/src/components/ui/Card' 
import { Button } from '/src/components/ui/button'
import './maincontent.css'
import './articles.css'

export function Maincontent() {
    return (
        <main className="main-content-area">
            <div className="page-header">
                <Users className="title-icon" />
                <span>Family Law</span>
            </div>

            {/* Hero Banner */}
            <Card>
                <div className="hero-banner">
                    <img
                        src="/src/assets/legal-hero-bg(1).png"
                        alt="Family Law"
                        className="hero-image"
                    />
                    <div className="hero-content">
                        <h2>Understanding Family Law in India</h2>
                        <p>Comprehensive guide to marriage, divorce, and family rights</p>
                    </div>
                </div>
            </Card>

            {/* Topic Cards */}
            <div className="container">
                <div className="cards-container">
                    <Card className="topic-card">
                        <CardContent>
                            <div className="topic-card-content">
                                <Heart className="icon" size={24} />
                                <h3>Marriage</h3>
                                <p>Laws and regulations regarding marriage in India</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="topic-card">
                        <CardContent>
                            <div className="topic-card-content">
                                <FileText className="icon" size={24} />
                                <h3>Divorce</h3>
                                <p>Understanding divorce procedures and rights</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="topic-card">
                        <CardContent>
                            <div className="topic-card-content">
                                <Users className="icon" size={24} />
                                <h3>Child Adoption</h3>
                                <p>Guide to adoption processes and requirements</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="topic-card">
                        <CardContent>
                            <div className="topic-card-content">
                              <div className="topic-card-content1">
                                <Shield className="icon" size={24} />
                                <h3>Guardianship</h3>
                                <p>Legal aspects of child guardianship</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    
                </div>
            </div>

            {/* Recent Articles */}
            <div className="recent-articles">
                <h2>Recent Articles</h2>
                <div className="articles-grid">
                    <Card className="article-card">
                        <CardContent className="article-content">
                            <FileText className="article-icon" size={24} />
                            <h3 className="article-title">Hindu Marriage Act, 1955</h3>
                            <p className="article-description">
                                Comprehensive guide to the Hindu Marriage Act including all sections and amendments.
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
                            <h3 className="article-title">Special Marriage Act, 1955</h3>
                            <p className="article-description">
                                Understanding inter-religion marriages and legal procedures under the Special Marriage Act.
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