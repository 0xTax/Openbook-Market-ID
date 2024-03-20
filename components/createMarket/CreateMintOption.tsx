import { ReactNode } from "react";
import { classNames } from "../../utils/general";

export default function CreateMintOption({
  active,
  checked,
  children,
}: {
  active: boolean;
  checked: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={classNames(
        "p-2 flex-1 border border-slate-600 rounded-md flex items-center justify-center text-sm cursor-pointer",
        active
          ? "bg-cyan-500 border-slate-500"
          : "bg-slate-700 border-slate-600",
        checked ? "bg-cyan-500 border-cyan-500" : "text-slate-200"
      )}
    >
      {children}
    </div>
  );
}
