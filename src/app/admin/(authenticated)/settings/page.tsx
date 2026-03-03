import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SettingsManager } from "@/components/admin/SettingsManager";

export const metadata: Metadata = {
  title: "Settings",
};

export const dynamic = "force-dynamic";

async function getSettings() {
  try {
    const settings = await prisma.siteSetting.findMany({
      orderBy: { key: "asc" },
    });
    return settings;
  } catch {
    return [];
  }
}

export default async function SettingsPage() {
  let session;
  try {
    session = await getServerSession(authOptions);
  } catch {
    redirect("/admin/login");
  }

  if (session?.user.role !== "ADMIN") {
    redirect("/admin");
  }

  const settings = await getSettings();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
        <p className="mt-1 text-gray-600">
          Configure site-wide settings and integrations
        </p>
      </div>

      <SettingsManager settings={settings} />
    </div>
  );
}
