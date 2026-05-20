import React from 'react';
import { BookOpen, ClipboardList, Gamepad2, GraduationCap, Info, Target, Video } from 'lucide-react';

const icons = {
  book: BookOpen,
  game: Gamepad2,
  graduation: GraduationCap,
  info: Info,
  target: Target,
  video: Video,
  clipboard: ClipboardList,
};

export function MenuIcon({ name, size = 26 }) {
  const Icon = icons[name] ?? Info;

  return <Icon size={size} aria-hidden="true" />;
}
