import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface ActionToolTipProps {
  label: string;
  side?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode ;
  align?: "center" | "start" | "end";
}
const ActionToolTip = ({
  align,
  children,
  label,
  side,
}: ActionToolTipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent align={align} side={side}>
        <p className="font-semibold text-sm capitalize"></p>
        {label.toLowerCase()}
      </TooltipContent>
    </Tooltip>
  );
};

export default ActionToolTip;
