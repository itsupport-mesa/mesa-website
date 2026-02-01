import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ResourcesManager } from "@/components/admin/ResourcesManager";

export const metadata: Metadata = {
  title: "Resources",
};

async function getResources() {
  const resources = await prisma.resource.findMany({
    orderBy: [{ category: "asc" }, { sortOrder: "asc" }],
  });
  return resources;
}

export default async function ResourcesPage() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "ADMIN") {
    redirect("/admin");
  }

  const resources = await getResources();

  // Get unique categories
  const categories = Array.from(new Set(resources.map((r) => r.category))).sort();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">External Resources</h1>
        <p className="mt-1 text-gray-600">
          Manage external links displayed on the Resources page
        </p>
      </div>

      <ResourcesManager resources={resources} categories={categories} />
    </div>
  );
}
