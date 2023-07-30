import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Dash board page(protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
