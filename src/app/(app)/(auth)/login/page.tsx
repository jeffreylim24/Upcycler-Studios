import { redirect } from "next/navigation";

import { LIComponent } from "@/modules/auth/ui/views/li-component";
import { caller } from "@/trpc/server";

export const dynamic = 'force-dynamic';

const Page = async () => {
  const session = await caller.auth.session();
  
  if (session.user) {
    redirect("/");
  }

  return (
    <LIComponent />
  )
}

export default Page;