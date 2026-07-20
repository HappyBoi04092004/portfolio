'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Terminal as TerminalIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#050816] text-[#f8fafc] font-mono flex flex-col items-center justify-center p-6 relative">
      {/* Cyber Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        {/* Terminal Header */}
        <div className="border border-slate-700 bg-slate-950/60 rounded-t-lg px-4 py-2 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-red-400 font-bold uppercase tracking-wider">ERROR_DIRECTORY_RESOLVER</span>
        </div>

        {/* Terminal Screen Body */}
        <div className="border-x border-b border-slate-700 bg-slate-950/40 backdrop-blur-md rounded-b-lg p-6 space-y-4 text-left">
          <div className="flex items-center space-x-2 text-red-500 font-bold text-sm">
            <TerminalIcon className="w-4 h-4" />
            <span>CRITICAL: 404 DIRECTORY UNRESOLVABLE</span>
          </div>

          <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
            <p>// Attempting to resolve secure workspace endpoint...</p>
            <p className="text-red-400 font-bold">ERROR: File directory could not be located inside system mapping indexes.</p>
            <p>Possible issues:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Path argument typo inside URL parameter</li>
              <li>Requested index node has been deleted or archived</li>
              <li>Insufficent read permissions for active user token</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
            <span>RESOLVER: FALLBACK_DAEMON</span>
            <span className="flex items-center text-indigo-400">
              <Compass className="w-3.5 h-3.5 mr-1 animate-spin" />
              <span>DOCKING ROUTE OUT</span>
            </span>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-xs font-mono font-bold shadow-lg hover:shadow-indigo-500/20 border border-indigo-400/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            RETURN TO SECURE ORIGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
