/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeMuteFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeMuteFilled = React.forwardRef<SVGSVGElement, VolumeMuteFilledProps>(
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
      <path d="M17.52 3.77997C16.4 3.15997 14.97 3.31997 13.51 4.22997L10.59 6.05997C10.39 6.17997 10.16 6.24997 9.93 6.24997H9H8.5C6.08 6.24997 4.75 7.57997 4.75 9.99997V14C4.75 16.42 6.08 17.75 8.5 17.75H9H9.93C10.16 17.75 10.39 17.82 10.59 17.94L13.51 19.77C14.39 20.32 15.25 20.59 16.05 20.59C16.57 20.59 17.07 20.47 17.52 20.22C18.63 19.6 19.25 18.31 19.25 16.59V7.40997C19.25 5.68997 18.63 4.39997 17.52 3.77997Z" fill="currentColor"/>
    </svg>
  )
);
VolumeMuteFilled.displayName = "VolumeMuteFilled";
export const VolumeMuteFilledMetadata = { 
  id: "volume-mute_filled", 
  baseId: "volume-mute", 
  variant: "filled", 
  name: "Volume Mute", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeMuteFilled;
