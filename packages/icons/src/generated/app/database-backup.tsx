/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DatabaseBackupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DatabaseBackup = React.forwardRef<SVGSVGElement, DatabaseBackupProps>(
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 12a9 3 0 0 0 5 2.69" />
  <path d="M21 9.3V5" />
  <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
  <path d="M12 12v4h4" />
  <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </svg>
  )
);
DatabaseBackup.displayName = "DatabaseBackup";
export const DatabaseBackupMetadata = { 
  id: "database-backup", 
  baseId: "database-backup", 
  variant: "default", 
  name: "Database Backup", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DatabaseBackup;
