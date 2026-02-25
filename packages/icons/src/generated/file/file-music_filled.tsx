/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FileMusicFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FileMusicFilled = React.forwardRef<SVGSVGElement, FileMusicFilledProps>(
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
      <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm.447 9.106a1 1 0 0 0 -1.447 .894v3a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 4 0v-3.382l.553 .276a1 1 0 0 0 .894 -1.788z" />
  <path d="M19 7h-4l-.001 -4.001z" />
    </svg>
  )
);
FileMusicFilled.displayName = "FileMusicFilled";
export const FileMusicFilledMetadata = { 
  id: "file-music_filled", 
  baseId: "file-music", 
  variant: "filled", 
  name: "File Music", 
  category: "file", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FileMusicFilled;
