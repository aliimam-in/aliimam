/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VideoHorizontalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VideoHorizontalFilled = React.forwardRef<SVGSVGElement, VideoHorizontalFilledProps>(
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
      <path d="M11.25 7.86011H2V16.1901C2 16.2501 2 16.3101 2.01 16.3601H11.25V7.86011Z" fill="currentColor"/>
<path d="M7.68994 6.36H11.2499V2H7.71994V6.24C7.71994 6.28 7.69994 6.32 7.68994 6.36Z" fill="currentColor"/>
<path d="M6.21988 6.23991V2.15991C3.99988 2.61991 2.54988 4.09991 2.12988 6.35991H6.23988C6.22988 6.31991 6.21988 6.27991 6.21988 6.23991Z" fill="currentColor"/>
<path d="M16.22 2H12.75V6.36H16.22V2Z" fill="currentColor"/>
<path d="M17.71 6.3599H21.87C21.45 4.0799 19.98 2.5899 17.72 2.1499V6.3299C17.72 6.3399 17.71 6.3499 17.71 6.3599Z" fill="currentColor"/>
<path d="M17.72 21.8501C19.91 21.4201 21.35 20.0201 21.82 17.8601H17.72V21.8501Z" fill="currentColor"/>
<path d="M16.22 17.8601H12.75V22.0001H16.22V17.8601Z" fill="currentColor"/>
<path d="M12.75 16.3601H21.99C22 16.3101 22 16.2501 22 16.1901V7.86011H12.75V16.3601Z" fill="currentColor"/>
<path d="M11.25 17.8601H7.71997V22.0001H11.25V17.8601Z" fill="currentColor"/>
<path d="M2.17993 17.8601C2.64993 20.0001 4.06993 21.4001 6.21993 21.8401V17.8601H2.17993Z" fill="currentColor"/>
    </svg>
  )
);
VideoHorizontalFilled.displayName = "VideoHorizontalFilled";
export const VideoHorizontalFilledMetadata = { 
  id: "video-horizontal_filled", 
  baseId: "video-horizontal", 
  variant: "filled", 
  name: "Video Horizontal", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VideoHorizontalFilled;
