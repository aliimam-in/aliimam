/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QrCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QrCode = React.forwardRef<SVGSVGElement, QrCodeProps>(
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
      <rect width="5" height="5" x="3" y="3" rx="1" />
  <rect width="5" height="5" x="16" y="3" rx="1" />
  <rect width="5" height="5" x="3" y="16" rx="1" />
  <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
  <path d="M21 21v.01" />
  <path d="M12 7v3a2 2 0 0 1-2 2H7" />
  <path d="M3 12h.01" />
  <path d="M12 3h.01" />
  <path d="M12 16v.01" />
  <path d="M16 12h1" />
  <path d="M21 12v.01" />
  <path d="M12 21v-1" />
    </svg>
  )
);
QrCode.displayName = "QrCode";
export const QrCodeMetadata = { 
  id: "qr-code", 
  baseId: "qr-code", 
  variant: "default", 
  name: "Qr Code", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QrCode;
