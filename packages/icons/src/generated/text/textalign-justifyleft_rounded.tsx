/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextalignJustifyleftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextalignJustifyleftRounded = React.forwardRef<SVGSVGElement, TextalignJustifyleftRoundedProps>(
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
      <path d="M12 4.5H3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9.5H3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14.5H3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19.5H3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextalignJustifyleftRounded.displayName = "TextalignJustifyleftRounded";
export const TextalignJustifyleftRoundedMetadata = { 
  id: "textalign-justifyleft_rounded", 
  baseId: "textalign-justifyleft", 
  variant: "rounded", 
  name: "Textalign Justifyleft", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextalignJustifyleftRounded;
