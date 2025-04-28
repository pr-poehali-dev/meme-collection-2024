
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon, HeartIcon, AwardIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            О сайте MPOMEME
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <p className="text-lg text-gray-700 mb-4">
              MPOMEME — это коллекция лучших и самых смешных мемов 2024 года. Мы собираем мемы со всего интернета 
              и делимся ими с вами, чтобы сделать ваш день немного лучше.
            </p>
            <p className="text-lg text-gray-700">
              Сайт создан для любителей мемов, которые ценят хороший юмор и хотят быть в курсе последних трендов 
              интернет-культуры.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <InfoIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Наша миссия</h3>
                  <p className="text-gray-600">Собрать и поделиться лучшими мемами, которые заставят вас улыбнуться</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <HeartIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Наши ценности</h3>
                  <p className="text-gray-600">Юмор, креативность и позитивная атмосфера для всех пользователей</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <AwardIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Наш подход</h3>
                  <p className="text-gray-600">Тщательный отбор только лучших мемов для нашей коллекции</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нам!</h2>
            <p className="text-gray-700 mb-6">
              Станьте частью нашего сообщества любителей мемов и делитесь своими любимыми находками
            </p>
            <Button size="lg" className="animate-pulse">
              Присоединиться
            </Button>
          </div>
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

export default About;
