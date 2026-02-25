/**
 * Auto-generated logo component: CVC (cards)
 * Category: cards
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CVCCardsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const CVCCards = React.forwardRef<SVGSVGElement, CVCCardsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z" fill="#E6E6E6"/>
<path d="M4.5 13.5H14.25V15.75H4.5V13.5Z" fill="white"/>
<path d="M18.375 10.125C19.5142 10.125 20.5515 10.5517 21.345 11.25H22.5V8.25H1.5V11.25H15.4058C16.1985 10.5517 17.2358 10.125 18.375 10.125Z" fill="#1A1A1A"/>
<path d="M18.375 19.125C20.8603 19.125 22.875 17.1103 22.875 14.625C22.875 12.1397 20.8603 10.125 18.375 10.125C15.8897 10.125 13.875 12.1397 13.875 14.625C13.875 17.1103 15.8897 19.125 18.375 19.125Z" fill="#E6E6E6"/>
<path d="M14.25 12.75H21.75V16.5H14.25V12.75Z" fill="white"/>
<path d="M18.375 19.125C20.8603 19.125 22.875 17.1103 22.875 14.625C22.875 12.1397 20.8603 10.125 18.375 10.125C15.8897 10.125 13.875 12.1397 13.875 14.625C13.875 17.1103 15.8897 19.125 18.375 19.125Z" stroke="#ED1C24" stroke-miterlimit="10"/>
<path d="M16.3125 15.1875C16.6232 15.1875 16.875 14.9357 16.875 14.625C16.875 14.3143 16.6232 14.0625 16.3125 14.0625C16.0018 14.0625 15.75 14.3143 15.75 14.625C15.75 14.9357 16.0018 15.1875 16.3125 15.1875Z" fill="#1A1A1A"/>
<path d="M18.1875 15.1875C18.4982 15.1875 18.75 14.9357 18.75 14.625C18.75 14.3143 18.4982 14.0625 18.1875 14.0625C17.8768 14.0625 17.625 14.3143 17.625 14.625C17.625 14.9357 17.8768 15.1875 18.1875 15.1875Z" fill="#1A1A1A"/>
<path d="M20.0625 15.1875C20.3732 15.1875 20.625 14.9357 20.625 14.625C20.625 14.3143 20.3732 14.0625 20.0625 14.0625C19.7518 14.0625 19.5 14.3143 19.5 14.625C19.5 14.9357 19.7518 15.1875 20.0625 15.1875Z" fill="#1A1A1A"/>
    </svg>
  )
);

CVCCards.displayName = "CVCCards";

export const CVCCardsMetadata = {
  id: "CVC_cards",
  baseId: "CVC",
  variant: "cards",
  name: "CVC",
  category: "cards",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CVCCards;
