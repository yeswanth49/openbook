import React from 'react';
import { MarkdownRenderer } from '@/components/markdown';

interface ToolInvocation {
  toolName: string;
  toolInput: any;
  toolOutput?: string;
}

interface ToolInvocationListViewProps {
  toolInvocations: ToolInvocation[];
  message: any;
}

const ToolInvocationListView: React.FC<ToolInvocationListViewProps> = ({ 
  toolInvocations, 
  message 
}) => {
  if (!toolInvocations || toolInvocations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 mt-4">
      {toolInvocations.map((invocation, index) => (
        <div 
          key={`${invocation.toolName}-${index}`} 
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        >
          <div className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 font-medium text-sm text-neutral-800 dark:text-neutral-200">
            {invocation.toolName}
          </div>
          <div className="p-4 text-sm">
            {invocation.toolOutput && (
              <MarkdownRenderer content={invocation.toolOutput} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolInvocationListView; 