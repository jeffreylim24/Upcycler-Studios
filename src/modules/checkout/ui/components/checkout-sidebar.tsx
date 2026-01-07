import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { CircleXIcon } from "lucide-react";

interface CheckoutSidebarProps {
  total: number;
  onPurchase: () => void;
  disabled?: boolean;
  isCanceled?: boolean;
}

export const CheckoutSidebar = ({ total, onPurchase, disabled, isCanceled }: CheckoutSidebarProps) => {
  return (
    <div className="bg-black rounded-xl overflow-hidden flex flex-col font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h4 className="font-semibold text-lg text-white">Total</h4>
        <p className="font-bold text-lg text-white">{formatCurrency(total)}</p>
      </div>
      <div className="p-6 flex items-center justify-center">
        <Button
          disabled={disabled}
          onClick={onPurchase}
          size="lg"
          className="text-base w-full bg-white text-black rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition"
        >
          Checkout
        </Button>
      </div>
      {isCanceled && (
        <div className="p-4 flex justify-center items-center border-t border-white/10">
          <div className="bg-red-100 border border-red-400 font-medium px-4 py-3 rounded-lg flex items-center w-full">
            <CircleXIcon className="size-6 mr-2 text-red-500" />
            <span className="text-black">Checkout failed. Please try again.</span>
          </div>
        </div>
      )}
    </div>
  );
};