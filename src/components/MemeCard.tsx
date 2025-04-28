
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface MemeProps {
  meme: {
    id: number;
    title: string;
    image: string;
    likes: number;
    category: string;
    date: string;
  };
}

const MemeCard = ({ meme }: MemeProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(meme.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={meme.image} 
            alt={meme.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded">
            {meme.category}
          </span>
        </div>
      </CardContent>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{meme.title}</h3>
        <p className="text-sm text-gray-500">{meme.date}</p>
      </div>
      <CardFooter className="flex justify-between border-t pt-4 bg-gray-50">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`gap-2 ${liked ? 'text-red-500' : ''}`} 
          onClick={handleLike}
        >
          <Heart className={`${liked ? 'fill-red-500 text-red-500' : ''}`} size={18} />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle size={18} />
          <span>Комментарии</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 size={18} />
          <span>Поделиться</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;
