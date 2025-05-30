
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                MPOMEME
              </span>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                2024
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link 
                to="/" 
                className={`font-medium ${isActive('/') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'}`}
              >
                Популярное
              </Link>
              <Link 
                to="/categories" 
                className={`font-medium ${isActive('/categories') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'}`}
              >
                Категории
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${isActive('/about') 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary'}`}
              >
                О сайте
              </Link>
            </nav>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
              </Button>
              <Button size="sm">Войти</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
