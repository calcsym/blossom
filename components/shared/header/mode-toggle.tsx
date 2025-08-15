'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"; 
import { Sun, Moon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme(); 

    useEffect(() => {
        setMounted(true);
    }, []);
    if(!mounted) {
        return null;
    }
    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    return 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="focus-visible:ring-2 focus-visible:ring-0 focus-visible:ring-offset-0">
                    {theme === "system" ? (<SunMoon />) : theme === "dark" ? (<Moon />) : (<Sun />)}                           
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Apparence</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === "system"} onCheckedChange={() => handleThemeChange("system")}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "light"} onCheckedChange={() => handleThemeChange("light")}>
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === "dark"} onCheckedChange={() => handleThemeChange("dark")}>
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>;
}
 
export default ModeToggle;