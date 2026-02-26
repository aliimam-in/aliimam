/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoodSmileFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoodSmileFilled = React.forwardRef<SVGSVGElement, MoodSmileFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414zm-6.19 -5.286l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);
MoodSmileFilled.displayName = "MoodSmileFilled";
export const MoodSmileFilledMetadata = { 
  id: "mood-smile_filled", 
  baseId: "mood-smile", 
  variant: "filled", 
  name: "Mood Smile", 
  category: "emoji", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoodSmileFilled;
