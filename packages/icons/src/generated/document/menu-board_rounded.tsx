/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MenuBoardRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MenuBoardRounded = React.forwardRef<SVGSVGElement, MenuBoardRoundedProps>(
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
      <path d="M21.93 6.76001L18.56 20.29C18.32 21.3 17.42 22 16.38 22H3.23998C1.72998 22 0.649993 20.5199 1.09999 19.0699L5.30998 5.55005C5.59998 4.61005 6.47 3.95996 7.45 3.95996H19.75C20.7 3.95996 21.49 4.53997 21.82 5.33997C22.01 5.76997 22.05 6.26001 21.93 6.76001Z"   strokeMiterlimit="10"/>
<path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.67999 6.38L10.72 2.06006"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.38 6.39001L17.32 2.05005"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.70001 12H15.7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.70001 16H14.7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MenuBoardRounded.displayName = "MenuBoardRounded";
export const MenuBoardRoundedMetadata = { 
  id: "menu-board_rounded", 
  baseId: "menu-board", 
  variant: "rounded", 
  name: "Menu Board", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MenuBoardRounded;
