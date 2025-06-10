"use client";

import { EScheduleStatus } from "@/lib/types/enums";

type StatusBadgeProps = {
  status: EScheduleStatus | string | boolean;
};

const statusColors: Record<string, string> = {
  [EScheduleStatus.WAITING]: "bg-[var(--laranja200)] border-[#E9A98B]",
  [EScheduleStatus.DONE]: "bg-[var(--verde400)]  border-[#45D9BE]",
  [EScheduleStatus.ABANDONED]: "bg-[var(--vermelho)]  border-[#D93A3D]",
  [EScheduleStatus.ERROR]: "bg-[var(--vermelho)]  border-[#D93A3D]",
  [EScheduleStatus.MISSED]: "bg-[var(--vermelho)]  border-[#D93A3D]",
  true: "bg-[var(--verde400)]  border-[#45D9BE]",
  false: "bg-[var(--vermelho)]  border-[#D93A3D]",
};

const statusTexts: Record<string, string> = {
  [EScheduleStatus.WAITING]: "AGUARDANDO",
  [EScheduleStatus.DONE]: "REALIZADO",
  [EScheduleStatus.ABANDONED]: "ABANDONO",
  [EScheduleStatus.ERROR]: "ERRO",
  [EScheduleStatus.MISSED]: "FALTOU",
  true: "ATIVO",
  false: "INATIVO",
};

function StatusBadge({ status }: StatusBadgeProps) {
  const statusKey = String(status);

  const colorClass = statusColors[statusKey] ?? "bg-gray-300";
  const text = statusTexts[statusKey] ?? "N/A";

  return (
    <div className="flex items-start gap-1 text-xs">
      <div className={`w-2.5 h-2.5 rounded-[1.5px] border ${colorClass}`} />
      <p className="leading-[100%]">{text}</p>
    </div>
  );
}

export default StatusBadge;
