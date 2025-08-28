import React from 'react';
import { Search, Users, Scale, Heart, Shield, FileText, Home, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import homewomen from "./assets/homewomen.jpg"




export default function LawSathiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">LawSathi</div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Online Test
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                News
              </a>
            </nav>

            {/* Search */}
            <div className="flex items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search laws..."
                  className="pl-4 pr-10 w-64 bg-gray-100 border-0 rounded-lg text-gray-600"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Search className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-80 space-y-6">
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Categories
                </h2>
                <nav className="space-y-2">
                  <a href="#" className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
                    <Users className="h-4 w-4 mr-3" />
                    Family Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Shield className="h-4 w-4 mr-3" />
                    Criminal Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Scale className="h-4 w-4 mr-3" />
                    Civil Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Shield className="h-4 w-4 mr-3" />
                    Defence Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <FileText className="h-4 w-4 mr-3" />
                    Business Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <Home className="h-4 w-4 mr-3" />
                    Property Law
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <FileText className="h-4 w-4 mr-3" />
                    Fundamentals Law
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Online Test */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Online Test
                </h2>
                <p className="text-gray-600 text-sm mb-4">Test your legal knowledge with our interactive quizzes.</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-medium">T</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">RohitPatil10</div>
                    <div className="text-sm text-gray-500">rohitpatil@gmail.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 mb-6">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-blue-600 font-medium">Family Law</span>
            </nav>

            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <Users className="h-8 w-8 mr-3 text-blue-600" />
                Family Law
              </h1>
            </div>

            {/* Hero Banner */}
            <Card className="mb-8 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <img
                  src={homewomen}
                  alt="Family Law"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="relative z-10 p-8 text-white">
                  <h2 className="text-2xl font-bold mb-2">Understanding Family Law in India</h2>
                  <p className="text-blue-100">Comprehensive guide to marriage, divorce, and family rights</p>
                </div>
              </div>
            </Card>

            {/* Topic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Marriage</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Divorce</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Child Adoption</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Guardianship</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Succession</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">Domestic Violence</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-600 mb-2">Hindu Marriage Act, 1955</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Comprehensive guide to the Hindu Marriage Act including all sections and amendments.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Updated 2 days ago</span>
                          <Button variant="link" className="text-blue-600 p-0 h-auto">
                            Read more →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-purple-600 mb-2">Special Marriage Act, 1955</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Understanding inter-religion marriages and legal procedures under the Special Marriage Act.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Updated 1 week ago</span>
                          <Button variant="link" className="text-purple-600 p-0 h-auto">
                            Read more →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating Legal Assistant */}
      <div className="fixed bottom-6 right-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 shadow-lg">
          <MessageCircle className="h-5 w-5 mr-2" />
          Legal Assistant
        </Button>
      </div>
    </div>
  )
}