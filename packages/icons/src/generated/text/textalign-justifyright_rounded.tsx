/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextalignJustifyrightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextalignJustifyrightRounded = React.forwardRef<SVGSVGElement, TextalignJustifyrightRoundedProps>(
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
      <path d="M12 4.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19.5H21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextalignJustifyrightRounded.displayName = "TextalignJustifyrightRounded";
export const TextalignJustifyrightRoundedMetadata = { 
  id: "textalign-justifyright_rounded", 
  baseId: "textalign-justifyright", 
  variant: "rounded", 
  name: "Textalign Justifyright", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextalignJustifyrightRounded;
