/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface JapaneseYenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JapaneseYen = React.forwardRef<SVGSVGElement, JapaneseYenProps>(
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
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
  <path d="M6 15h12" />
  <path d="M6 11h12" />
    </svg>
  )
);
JapaneseYen.displayName = "JapaneseYen";
export const JapaneseYenMetadata = { 
  id: "japanese-yen", 
  baseId: "japanese-yen", 
  variant: "default", 
  name: "Japanese Yen", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default JapaneseYen;
