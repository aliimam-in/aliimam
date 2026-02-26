/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bot = React.forwardRef<SVGSVGElement, BotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 8V4H8" />
  <rect width="16" height="12" x="4" y="8" rx="2" />
  <path d="M2 14h2" />
  <path d="M20 14h2" />
  <path d="M15 13v2" />
  <path d="M9 13v2" />
    </svg>
  )
);
Bot.displayName = "Bot";
export const BotMetadata = { 
  id: "bot", 
  baseId: "bot", 
  variant: "default", 
  name: "Bot", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bot;
