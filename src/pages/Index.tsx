
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MemeCard from "@/components/MemeCard";
import Header from "@/components/Header";

// Примеры мемов
const memesData = [
  {
    id: 1,
    title: "Котик-программист",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=500",
    likes: 245,
    category: "программирование",
    date: "15 февраля 2024"
  },
  {
    id: 2,
    title: "Деплой в пятницу",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=500",
    likes: 189,
    category: "работа",
    date: "3 марта 2024"
  },
  {
    id: 3,
    title: "На совещании",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=500",
    likes: 312,
    category: "офис",
    date: "22 января 2024"
  },
  {
    id: 4,
    title: "Дедлайн горит",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=500",
    likes: 278,
    category: "дедлайн",
    date: "17 апреля 2024"
  },
  {
    id: 5,
    title: "Работа из дома",
    image: "https://images.unsplash.com/photo-1576269601403-d62d142ef766?auto=format&fit=crop&q=80&w=500",
    likes: 201,
    category: "работа",
    date: "5 января 2024"
  },
  {
    id: 6,
    title: "Когда нашёл баг",
    image: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&q=80&w=500", 
    likes: 167,
    category: "программирование",
    date: "28 февраля 2024"
  }
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("все");
  
  const categories = ["все", "программирование", "работа", "офис", "дедлайн"];
  
  const filteredMemes = memesData.filter(meme => {
    return (
      (category === "все" || meme.category === category) &&
      meme.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/3">
            <Input 
              placeholder="Поиск мемов..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                onClick={() => setCategory(cat)}
                className="whitespace-nowrap"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        {filteredMemes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMemes.map(meme => (
              <MemeCard key={meme.id} meme={meme} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">Мемы не найдены</h3>
            <p className="text-gray-500 mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </main>
      
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© MPOMEME 2024 — Коллекция любимых мемов</p>
          <p className="mt-2">Обновлено: 28 апреля 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
