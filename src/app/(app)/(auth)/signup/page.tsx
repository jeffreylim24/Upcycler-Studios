import { redirect } from "next/navigation";

import { SUComponent } from "@/modules/auth/ui/views/su-component";
import { caller } from "@/trpc/server";

const Page = async () => {
  const session = await caller.auth.session();
    
    if (session.user) {
      redirect("/");
    }
  
  return (
    <SUComponent />
  );
}

export default Page;