/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoodAngryFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoodAngryFilled = React.forwardRef<SVGSVGElement, MoodAngryFilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m0 12a4.5 4.5 0 0 0 -3.214 1.35a1 1 0 1 0 1.428 1.4a2.5 2.5 0 0 1 3.572 0a1 1 0 0 0 1.428 -1.4a4.5 4.5 0 0 0 -3.214 -1.35m-3.553 -5.895a1 1 0 0 0 -.894 1.788l2 1a1 1 0 0 0 .894 -1.788zm8.447 .447a1 1 0 0 0 -1.341 -.447l-2 1a1 1 0 0 0 .894 1.788l2 -1a1 1 0 0 0 .447 -1.341" />
    </svg>
  )
);
MoodAngryFilled.displayName = "MoodAngryFilled";
export const MoodAngryFilledMetadata = { 
  id: "mood-angry_filled", 
  baseId: "mood-angry", 
  variant: "filled", 
  name: "Mood Angry", 
  category: "emoji", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoodAngryFilled;
