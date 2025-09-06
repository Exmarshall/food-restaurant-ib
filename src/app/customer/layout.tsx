import FooterCustomer from "@/components/customer/Footer";
import NavbarCustomer from "@/components/customer/Navbar";

export default function customerLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavbarCustomer />
           <div className="min-h-screen bg-gray-500">
            {children}
            </div> 
            <FooterCustomer />
        </>
    );
}
