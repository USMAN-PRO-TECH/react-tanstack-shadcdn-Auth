import {
  ChevronUp,
  Home,
  Inbox,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/authStore";
import { User2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
const items = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Feedback", url: "/about", icon: Inbox },
];


export function AppSidebar() {
    const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate({

      to: '/login',
      search: { redirect: location.href },
    });
  };
  

  return (
    <Sidebar>
      {/* Top Section - User Info */}

      <div className="flex items-center gap-3 p-4">
        <Avatar>
          <AvatarFallback className="bg-black text-white">V</AvatarFallback>
        </Avatar>
        <div>
          <p className=" font-inter">Welcome aboard</p>
          <p>vomaxo 3838</p>
        </div>
        <ModeToggle />
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-2 px-4">
        <Button
          variant="secondary"
          className="bg-primary-dark text-primary-light hover:bg-primary-light hover:text-primary-dark px-4 py-2 font-heading"
        >
          Recruitment
        </Button>
        <Button
          variant="secondary"
          className="bg-primary-dark text-primary-light hover:bg-primary-light hover:text-primary-dark px-4 py-2 font-heading"
        >
          Companies
        </Button>
      </div>

      {/* Menu Items */}
      <SidebarContent className="mt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-4 py-3 text-interlight  rounded-md hover:bg-hover-dark hover:text-hover-light transition"
                    >
                      <item.icon className="w-5 h-5 text-secondary-light" />
                      <span className="text-secondary-light font-heading">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
  <span>Sign out</span>
</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/* Bottom Branding */}
      {/* <div className="p-4 text-center text-white font-semibold text-lg">
        Dialr
      </div> */}
    </Sidebar>
  );
}
