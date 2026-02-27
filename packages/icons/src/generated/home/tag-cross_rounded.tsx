/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TagCrossRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TagCrossRounded = React.forwardRef<SVGSVGElement, TagCrossRoundedProps>(
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
      <path d="M10.28 20.25H17C19.76 20.25 22 18.01 22 15.25V8.75C22 5.99 19.76 3.75 17 3.75H10.28C8.86999 3.75 7.52999 4.34 6.57999 5.39L3.04999 9.27C1.63999 10.82 1.63999 13.18 3.04999 14.73L6.57999 18.61C7.52999 19.66 8.86999 20.25 10.28 20.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14.47L11.06 9.53" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.06 14.47L16 9.53" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
);
TagCrossRounded.displayName = "TagCrossRounded";
export const TagCrossRoundedMetadata = { 
  id: "tag-cross_rounded", 
  baseId: "tag-cross", 
  variant: "rounded", 
  name: "Tag Cross", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TagCrossRounded;
