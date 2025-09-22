import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationTileProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'gold';
  className?: string;
}

export default function NavigationTile({
  title,
  description,
  href,
  icon: Icon,
  variant = 'primary',
  className,
}: NavigationTileProps) {
  return (
    <Link
      to={href}
      className={cn(
        'nav-tile group block min-h-[200px] sm:min-h-[240px]',
        {
          'nav-tile-primary': variant === 'primary',
          'nav-tile-secondary': variant === 'secondary',
          'nav-tile-gold': variant === 'gold',
        },
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">
            {title}
          </h3>
          <p className="text-sm sm:text-base opacity-90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </Link>
  );
}