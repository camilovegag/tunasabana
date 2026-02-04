import { GraduationCap, Music, User } from "lucide-react";
import Image from "next/image";
import type { Tuno } from "@/data/tunos";

interface TunoCardProps {
  tuno: Tuno;
}

export default function TunoCard({ tuno }: TunoCardProps) {
  const hasImage = tuno.image && tuno.image.length > 0;

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {hasImage ? (
          <Image
            src={tuno.image}
            alt={tuno.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/10">
            <User className="w-16 h-16 text-accent/40" />
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <div>
          <h3 className="font-serif font-bold text-foreground text-lg leading-tight">
            {tuno.name}
          </h3>
          <p className="text-accent font-medium text-sm">"{tuno.nickname}"</p>
        </div>

        {tuno.instrument && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Music className="w-4 h-4 text-accent" />
            <span>{tuno.instrument}</span>
          </div>
        )}

        {tuno.career && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>{tuno.career}</span>
          </div>
        )}
      </div>
    </div>
  );
}
