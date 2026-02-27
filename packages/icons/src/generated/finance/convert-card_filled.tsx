/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ConvertCardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ConvertCardFilled = React.forwardRef<SVGSVGElement, ConvertCardFilledProps>(
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
      <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 4.2V4.31C22 4.59 21.78 4.81 21.5 4.81H12.5C12.22 4.81 12 4.59 12 4.31V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2Z" fill="currentColor"/>
<path d="M12.5 5.81006C12.22 5.81006 12 6.03006 12 6.31006V7.31006V8.30006C12 10.0601 12.44 10.5001 14.22 10.5001H19.78C21.56 10.5001 22 10.0601 22 8.30006V7.31006V6.31006C22 6.03006 21.78 5.81006 21.5 5.81006H12.5Z" fill="currentColor"/>
<path d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z" fill="currentColor"/>
<path d="M2.5 17.3101C2.22 17.3101 2 17.5301 2 17.8101V18.8101V19.8001C2 21.5601 2.44 22.0001 4.22 22.0001H9.78C11.56 22.0001 12 21.5601 12 19.8001V18.8101V17.8101C12 17.5301 11.78 17.3101 11.5 17.3101H2.5Z" fill="currentColor"/>
    </svg>
  )
);
ConvertCardFilled.displayName = "ConvertCardFilled";
export const ConvertCardFilledMetadata = { 
  id: "convert-card_filled", 
  baseId: "convert-card", 
  variant: "filled", 
  name: "Convert Card", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ConvertCardFilled;
