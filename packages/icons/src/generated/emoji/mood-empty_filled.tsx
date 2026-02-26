/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoodEmptyFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoodEmptyFilled = React.forwardRef<SVGSVGElement, MoodEmptyFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-2 10.66h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-5.99 -5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm6 0l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);
MoodEmptyFilled.displayName = "MoodEmptyFilled";
export const MoodEmptyFilledMetadata = { 
  id: "mood-empty_filled", 
  baseId: "mood-empty", 
  variant: "filled", 
  name: "Mood Empty", 
  category: "emoji", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoodEmptyFilled;
