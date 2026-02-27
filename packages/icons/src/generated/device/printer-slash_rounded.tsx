/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PrinterSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PrinterSlashRounded = React.forwardRef<SVGSVGElement, PrinterSlashRoundedProps>(
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
      <path d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9699 15H15.9999V19C15.9999 21 14.9999 22 12.9999 22H10.9999C9.30995 22 8.32995 21.29 8.06995 19.86" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.97 7.52002C20.66 8.00002 21 8.83002 21 10V15C21 17 20 18 18 18H16V15H13" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 15H15.79" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 11H9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PrinterSlashRounded.displayName = "PrinterSlashRounded";
export const PrinterSlashRoundedMetadata = { 
  id: "printer-slash_rounded", 
  baseId: "printer-slash", 
  variant: "rounded", 
  name: "Printer Slash", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PrinterSlashRounded;
