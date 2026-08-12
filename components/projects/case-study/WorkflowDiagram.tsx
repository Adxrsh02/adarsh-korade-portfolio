/* =========================================================
   WorkflowDiagram
   Vertical pipeline visualization for project workflows.
   Each step is a card connected by animated arrows.
   ========================================================= */

interface WorkflowStep {
  step: string;
  description?: string;
}


interface WorkflowDiagramProps {
  steps: WorkflowStep[];
}

export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div
      className="flex flex-col items-center gap-0"
      role="list"
      aria-label="Application workflow steps"
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className="workflow-step-enter flex flex-col items-center w-full max-w-[480px]"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {/* Step card */}
          <div
            role="listitem"
            className="w-full bg-white border border-[#E5E5E5] rounded-xl p-4 md:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-shadow duration-200"
          >
            <div className="flex items-start gap-4">
              {/* Step number */}
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center tabular-nums mt-0.5"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              {/* Step content */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-semibold text-[#0A0A0A] leading-snug">
                  {step.step}
                </span>
                {step.description && (
                  <span className="text-xs text-[#737373] leading-relaxed">
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Connector (not after last step) */}
          {index < steps.length - 1 && (
            <div className="flex flex-col items-center" aria-hidden="true">
              <div className="w-px h-5 bg-[#D4D4D4]" />
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="text-[#D4D4D4]"
              >
                <path
                  d="M6 8L0 0h12L6 8z"
                  fill="currentColor"
                />
              </svg>
              <div className="w-px h-5 bg-[#D4D4D4]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
