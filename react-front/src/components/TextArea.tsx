"use client";

type CustomChangeEvent = {
  target: { name: string; value: string };
};

type TextAreaProps = {
  title: string;
  cols: number;
  name: string;
  id: string;
  placeholder?: string;
  mdRows?: number;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      | CustomChangeEvent
  ) => void;
  error?: string;
};

const colSpanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
};

export default function TextArea({
  title,
  cols,
  name,
  id,
  placeholder,
  mdRows = 6,
  value,
  onChange,
  error,
}: TextAreaProps) {
  const colSpanClass = colSpanMap[cols] ?? "";

  const minH = Math.max(mdRows, 4) * 1.5;

  return (
    <div className={`flex flex-col ${colSpanClass}`}>
      <span className="text-xs md:text-base ">{title}</span>

      <textarea
        className={`
          resize-none rounded-[5px] p-2 outline-none
          bg-[var(--branco3)]
          text-sm md:text-base
          ${error ? "border border-red-500" : "border border-[var(--cinza100)]"}
          min-h-[6rem]                 /* 4 linhas = 6 rem */
          md:min-h-0                  /* zera para sobrepor via style */
        `}
        style={{ minHeight: `calc(${minH}rem)` }}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
