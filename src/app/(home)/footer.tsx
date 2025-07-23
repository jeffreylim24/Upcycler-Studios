import Image from 'next/image';
export const Footer = () => {
    return (
        <footer className="flex border-t justify-between font-medium p-2 bg-black text-white">
            <div className="flex items-center gap-2">
                <Image src="/Logo.png" alt="Logo" width={50} height={50} className="mr-3"/>
                <span className="text-xl font-semibold">Upcycler Studios</span> 
            </div>
        </footer>
    );
};