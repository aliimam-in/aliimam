/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface YoutubeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const YoutubeFilled = React.forwardRef<SVGSVGElement, YoutubeFilledProps>(
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
      <path d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z" fill="currentColor"/>
    </svg>
  )
);
YoutubeFilled.displayName = "YoutubeFilled";
export const YoutubeFilledMetadata = { 
  id: "youtube_filled", 
  baseId: "youtube", 
  variant: "filled", 
  name: "Youtube", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default YoutubeFilled;
