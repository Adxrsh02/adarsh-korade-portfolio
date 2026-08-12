import type { PerformanceMetrics } from "@/types";

/* =========================================================
   PerformanceTable
   Responsive metrics comparison table.
   Highlights best-performing rows in accent orange.
   ========================================================= */

interface PerformanceTableProps {
  metrics: PerformanceMetrics;
}

export function PerformanceTable({ metrics }: PerformanceTableProps) {
  const { headers, rows } = metrics;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-none sm:rounded-xl border-y sm:border border-[#E5E5E5] shadow-sm">
      <table
        className="w-full min-w-[520px] border-collapse text-sm"
        aria-label="Performance metrics comparison"
      >
        {/* Table head */}
        <thead>
          <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="px-5 py-3.5 text-left text-[10px] uppercase tracking-widest text-[#737373] font-semibold whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={
                row.isBest
                  ? "table-best-row border-b border-[#FED7AA]"
                  : "bg-white border-b border-[#F5F5F5] hover:bg-[#FAFAFA]"
              }
            >
              {/* Row label */}
              <td className="px-5 py-4 text-sm font-semibold text-[#0A0A0A] whitespace-nowrap">
                {row.isBest && (
                  <span
                    className="inline-block mr-2 text-[#F97316]"
                    aria-label="Best performing"
                    title="Best result"
                  >
                    ★
                  </span>
                )}
                {row.label}
              </td>

              {/* Metric values */}
              {row.values.map((val, valIdx) => (
                <td
                  key={valIdx}
                  className={`px-5 py-4 tabular-nums whitespace-nowrap ${
                    row.isBest
                      ? "font-bold text-[#C2410C]"
                      : "text-[#404040]"
                  }`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
