import Link from "next/link";

const ActionButton = ({formDetails}) => {
    return (
        <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
        <button className="w-full bg-indigo-600 hover:bg-indigo-800">Interested</button>
        <Link href="/payment" className="w-full text-center p-2 bg-[#464849] rounded-md border border-[#5f5f5f]/50 shadow-md cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1">Going</Link>
      </div>
    );
};

export default ActionButton;