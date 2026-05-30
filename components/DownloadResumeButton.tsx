import React from 'react';
import { Download } from 'lucide-react';

interface DownloadResumeButtonProps {
  pdfPath: string;
  fileName: string;
}

export default function DownloadResumeButton({ pdfPath, fileName }: DownloadResumeButtonProps) {
  return (
    <a
      href={pdfPath}
      download={fileName}
      className="w-full flex justify-between items-center px-10 py-8 bg-foreground text-background  group border-2 border-transparent hover:bg-transparent hover:border-foreground hover:text-foreground hover:scale-[1.02] transition-all shadow-xl"
    >
      <span className="text-sm font-bold uppercase tracking-[0.2em]">Download Detailed Resume</span>
      <Download className="w-6 h-6 group-hover:translate-y-2 transition-transform duration-300 text-[#ffcc01]" />
    </a>
  );
}
