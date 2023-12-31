import { redirect } from "next/navigation";

// import { authOptions } from "@/lib/auth"
// import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/dashboard-header";
// import { PostCreateButton } from "@/components/post-create-button"
// import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Posts"
        text="Create and manage posts."
      ></DashboardHeader>
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any posts yet. Start creating content.
        </EmptyPlaceholder.Description>
      </EmptyPlaceholder>
    </DashboardShell>
  );
}
