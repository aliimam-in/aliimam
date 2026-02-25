/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyboardMusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyboardMusic = React.forwardRef<SVGSVGElement, KeyboardMusicProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M6 8h4" />
  <path d="M14 8h.01" />
  <path d="M18 8h.01" />
  <path d="M2 12h20" />
  <path d="M6 12v4" />
  <path d="M10 12v4" />
  <path d="M14 12v4" />
  <path d="M18 12v4" />
    </svg>
  )
);
KeyboardMusic.displayName = "KeyboardMusic";
export const KeyboardMusicMetadata = { id: "keyboard-music", baseId: "keyboard-music", variant: "default", name: "Keyboard Music", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default KeyboardMusic;
