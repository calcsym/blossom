import Link from "next/link";
import { APP_NAME } from "@/lib/constants";         
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
    <footer className="border-t">
            <div className="text-sm text-gray-600">
                &copy; {currentYear} {APP_NAME}. All rights reserved.
            </div>
            <div className="space-x-2">
                <Button asChild variant="ghost">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/terms-of-service">Terms of Service</Link>
                </Button>
            </div>
    </footer>);
}
 
export default Footer;