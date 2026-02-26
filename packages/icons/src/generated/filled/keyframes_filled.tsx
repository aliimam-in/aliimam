/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KeyframesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KeyframesFilled = React.forwardRef<SVGSVGElement, KeyframesFilledProps>(
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
      <path d="M8 4a2.599 2.599 0 0 0 -2 .957l-4.355 5.24a2.847 2.847 0 0 0 -.007 3.598l4.368 5.256c.499 .6 1.224 .949 1.994 .949a2.599 2.599 0 0 0 2 -.957l4.355 -5.24a2.847 2.847 0 0 0 .007 -3.598l-4.368 -5.256a2.593 2.593 0 0 0 -1.994 -.949z" />
  <path d="M16.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z" />
  <path d="M12.382 4.214a1 1 0 0 1 1.32 .074l.084 .094l4.576 5.823c.808 .993 .848 2.396 .13 3.419l-.12 .158l-4.586 5.836a1 1 0 0 1 -1.644 -1.132l.072 -.104l4.596 -5.85a.845 .845 0 0 0 .06 -.978l-.07 -.1l-4.586 -5.836a1 1 0 0 1 .168 -1.404z" />
    </svg>
  )
);
KeyframesFilled.displayName = "KeyframesFilled";
export const KeyframesFilledMetadata = { 
  id: "keyframes_filled", 
  baseId: "keyframes", 
  variant: "filled", 
  name: "Keyframes", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KeyframesFilled;
