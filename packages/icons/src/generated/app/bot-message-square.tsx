/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BotMessageSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BotMessageSquare = React.forwardRef<SVGSVGElement, BotMessageSquareProps>(
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
      <path d="M12 6V2H8" />
  <path d="M15 11v2" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
  <path d="M9 11v2" />
    </svg>
  )
);
BotMessageSquare.displayName = "BotMessageSquare";
export const BotMessageSquareMetadata = { 
  id: "bot-message-square", 
  baseId: "bot-message-square", 
  variant: "default", 
  name: "Bot Message Square", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BotMessageSquare;
