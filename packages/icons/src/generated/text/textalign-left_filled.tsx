/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextalignLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextalignLeftFilled = React.forwardRef<SVGSVGElement, TextalignLeftFilledProps>(
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
      <path d="M21 5.25H3C2.59 5.25 2.25 4.91 2.25 4.5C2.25 4.09 2.59 3.75 3 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill="currentColor"/>
<path d="M12.47 10.25H3C2.59 10.25 2.25 9.91 2.25 9.5C2.25 9.09 2.59 8.75 3 8.75H12.47C12.88 8.75 13.22 9.09 13.22 9.5C13.22 9.91 12.89 10.25 12.47 10.25Z" fill="currentColor"/>
<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill="currentColor"/>
<path d="M12.47 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H12.47C12.88 18.75 13.22 19.09 13.22 19.5C13.22 19.91 12.89 20.25 12.47 20.25Z" fill="currentColor"/>
    </svg>
  )
);
TextalignLeftFilled.displayName = "TextalignLeftFilled";
export const TextalignLeftFilledMetadata = { 
  id: "textalign-left_filled", 
  baseId: "textalign-left", 
  variant: "filled", 
  name: "Textalign Left", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextalignLeftFilled;
