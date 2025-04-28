
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CodeIcon, BriefcaseIcon, BuildingIcon, TimerIcon, LaughIcon, HeartIcon, HashIcon } from "lucide-react";

// Категории мемов
const categoriesData = [
  {
    id: "programming",
    name: "Программирование",
    icon: <CodeIcon className="h-5 w-5" />,
    description: "Мемы о коде, багах и жизни разработчиков",
    memesCount: 42,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "work",
    name: "Работа",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    description: "Забавные ситуации на работе и офисные будни",
    memesCount: 38,
    color: "bg-green-100 text-green-800"
  },
  {
    id: "office",
    name: "Офис",
    icon: <BuildingIcon className="h-5 w-5" />,
    description: "Всё о корпоративной культуре и офисной жизни",
    memesCount: 27,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: "deadline",
    name: "Дедлайн",
    icon: <TimerIcon className="h-5 w-5" />,
    description: "Когда дедлайн горит, а ты не успеваешь",
    memesCount: 19,
    color: "bg-red-100 text-red-800"
  },
  {
    id: "funny",
    name: "Смешные",
    icon: <LaughIcon className="h-5 w-5" />,
    description: "Просто забавные мемы на разные темы",
    memesCount: 56,
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    id: "cute",
    name: "Милые",
    icon: <HeartIcon className="h-5 w-5" />,
    description: "Милые и позитивные мемы для поднятия настроения",
    memesCount: 31,
    color: "bg-pink-100 text-pink-800"
  },
  {
    id: "random",
    name: "Разное",
    icon: <HashIcon className="h-5 w-5" />,
    description: "Мемы, которые не подошли под другие категории",
    memesCount: 23,
    color: "bg-gray-100 text-gray-800"
  }
];

const Categories = () => {
  const [search, setSearch] = useState("");
  
  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Категории мемов</h1>
        
        <div className="max-w-xl mx-auto mb-8">
          <Input 
            placeholder="Поиск категорий..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white"
          />
        </div>
        
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map(category => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className={`p-2 rounded-full ${category.color.split(' ')[0]}`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      {category.name}
                    </CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {category.memesCount} мемов
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                  <div className="mt-4">
                    <a 
                      href="#" 
                      className="text-primary font-medium hover:underline"
                    >
                      Посмотреть мемы →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">Категории не найдены</h3>
            <p className="text-gray-500 mt-2">Попробуйте изменить параметры поиска</p>
          </div>
        )}
        
        <div className="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Популярные теги</h2>
          <ScrollArea className="h-16 w-full">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <Badge 
                  key={i} 
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                >
                  #{['код', 'офис', 'совещание', 'баги', 'кофе', 'дедлайн', 'отпуск', 
                    'презентация', 'пятница', 'компьютер', 'селфи', 'zoom', 'отчёт', 
                    'кот', 'успех', 'фейл', 'typescript', 'совещание', 'клиент', 'босс'][i % 20]}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </div>
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

export default Categories;
