import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ArchitectureFlow({ nodes }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-2">
      {nodes.map((node, index) => (
        <div key={node} className="flex min-w-0 items-center gap-1.5">
          <span className="rounded-full border border-theme bg-surface dark:bg-page px-3 py-1 text-[11px] font-semibold text-primary">
            {node}
          </span>
          {index < nodes.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-secondary shrink-0" /> : null}
        </div>
      ))}
    </div>
  );
}
