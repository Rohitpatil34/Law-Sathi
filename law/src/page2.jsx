import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Shield,
  Scale,
  Building,
  Home,
  Gavel,
  User,
  Globe,
  Heart,
  X,
} from "lucide-react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

const lawData = [
  {
    id: 1,
    title: "Foreign Marriage Act, 1969",
    description: "Legal framework for marriages of Indian citizens abroad.",
    icon: Globe,
    category: "Family Law",
    tags: ["Marriage", "Foreign", "Citizens"],
  },
  {
    id: 2,
    title: "Family Courts Act, 1984",
    description: "Establishment and functioning of family courts in India.",
    icon: Gavel,
    category: "Family Law",
    tags: ["Courts", "Family", "Establishment"],
  },
  {
    id: 3,
    title: "Hindu Marriage Act, 1955",
    description: "Provisions and amendments of the Hindu Marriage Act of 1955.",
    icon: Scale,
    category: "Family Law",
    tags: ["Marriage", "Hindu", "Provisions"],
  },
  {
    id: 4,
    title: "Special Marriage Act, 1955",
    description:
      "Regulations for inter-religion and inter-caste marriages in India.",
    icon: Heart,
    category: "Family Law",
    tags: ["Marriage", "Inter-religion", "Inter-caste"],
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState(["Family Law", "Marriage"]);

  // Filter law data based on search and active filters
  const filteredLaws = lawData.filter((law) => {
    const matchesSearch =
      law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      law.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.some(
        (filter) => law.category === filter || law.tags.includes(filter)
      );

    return matchesSearch && matchesFilters;
  });

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-purple-600">
              LawSathi
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
              Online Test
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
              News
            </a>
          </nav>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search laws..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 bg-gray-50 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          {/* Categories Section */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <h2 className="font-semibold text-gray-900">Categories</h2>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => toggleFilter("Family Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Family Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Home className="w-4 h-4" />
                Family Law
              </button>

              <button
                onClick={() => toggleFilter("Criminal Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Criminal Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Shield className="w-4 h-4" />
                Criminal Law
              </button>

              <button
                onClick={() => toggleFilter("Civil Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Civil Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Scale className="w-4 h-4" />
                Civil Law
              </button>

              <button
                onClick={() => toggleFilter("Defence Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Defence Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Shield className="w-4 h-4" />
                Defence Law
              </button>

              <button
                onClick={() => toggleFilter("Business Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Business Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Building className="w-4 h-4" />
                Business Law
              </button>

              <button
                onClick={() => toggleFilter("Property Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Property Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <Home className="w-4 h-4" />
                Property Law
              </button>

              <button
                onClick={() => toggleFilter("Fundamentals Law")}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg w-full text-left ${
                  activeFilters.includes("Fundamentals Law")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Fundamentals Law
              </button>
            </nav>
          </div>

          {/* Online Test Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Gavel className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Online Test</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Test your legal knowledge with our interactive quizzes.
            </p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Start Test
            </Button>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  TejasPatil10
                </p>
                <p className="text-xs text-gray-500 truncate">
                  patiltejas1004@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Filter Tags */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant={filter === "Family Law" ? "default" : "outline"}
                className={`${
                  filter === "Family Law"
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                } cursor-pointer`}
                onClick={() => toggleFilter(filter)}
              >
                {filter === "Family Law" && <Home className="w-3 h-3 mr-1" />}
                {filter === "Marriage" && <Heart className="w-3 h-3 mr-1" />}
                {filter}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilters([])}
                className="text-gray-500 hover:text-gray-700"
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing {filteredLaws.length} results for "{searchQuery}"
              </p>
            </div>
          )}

          {/* Law Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLaws.map((law) => {
              const IconComponent = law.icon;
              return (
                <Card
                  key={law.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer border-gray-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {law.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {law.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredLaws.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No laws found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilters(["Family Law"]);
                }}
              >
                Reset search
              </Button>
            </div>
          )}

          {/* Legal Assistant Button */}
          <div className="fixed bottom-6 right-6">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3 shadow-lg">
              <User className="w-4 h-4 mr-2" />
              Legal Assistant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
