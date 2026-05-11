import { Star } from "lucide-react";

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  avatarInitial: string;
}

export default function ReviewCard({ author, rating, text, avatarInitial }: ReviewCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="glass-card rounded-2xl p-4 max-w-xs animate-float-slow">
      {/* Author row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
          {avatarInitial}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{author}</p>
          <div className="flex items-center gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < fullStars
                    ? "text-yellow-400 fill-yellow-400"
                    : i === fullStars && hasHalf
                    ? "text-yellow-400 fill-yellow-400/50"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-sage-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}
