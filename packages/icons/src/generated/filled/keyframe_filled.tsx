/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyframeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyframeFilled = React.forwardRef<SVGSVGElement, KeyframeFilledProps>(
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
      <path d="M12 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.225 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z" />
    </svg>
  )
);
KeyframeFilled.displayName = "KeyframeFilled";
export const KeyframeFilledMetadata = { 
  id: "keyframe_filled", 
  baseId: "keyframe", 
  variant: "filled", 
  name: "Keyframe", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeyframeFilled;
