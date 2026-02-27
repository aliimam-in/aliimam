/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Tag2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tag2Rounded = React.forwardRef<SVGSVGElement, Tag2RoundedProps>(
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
      <path d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.73486 12.2264C11.1156 12.2264 12.2349 11.1071 12.2349 9.72638C12.2349 8.34567 11.1156 7.22638 9.73486 7.22638C8.35415 7.22638 7.23486 8.34567 7.23486 9.72638C7.23486 11.1071 8.35415 12.2264 9.73486 12.2264Z"   strokeLinecap="round"/>
<path d="M13.2349 17.2264L17.2349 13.2264"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Tag2Rounded.displayName = "Tag2Rounded";
export const Tag2RoundedMetadata = { 
  id: "tag-2_rounded", 
  baseId: "tag-2", 
  variant: "rounded", 
  name: "Tag 2", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tag2Rounded;
