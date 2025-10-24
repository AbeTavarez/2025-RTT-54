// types/index.ts
export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };
  return (
    <div className={`p-2 rounded ${alertStyles[type]}`}>
      <div className="flex">
        <div className="text-lg font-bold">{message}</div>
        <span onClick={onClose} className="ml-auto mr-2 font-bold hover:cursor-pointer">
          x
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default AlertBox;
