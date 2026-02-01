import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SettingType } from "@prisma/client";

// Default settings to initialize
const defaultSettings = [
  {
    key: "paypal_url",
    description: "PayPal donation button URL",
    valueType: "URL" as SettingType,
    value: "",
  },
  {
    key: "calendar_embed_url",
    description: "Google Calendar embed URL",
    valueType: "URL" as SettingType,
    value: "",
  },
  {
    key: "amazon_wishlist_url",
    description: "Amazon Wishlist URL for donations",
    valueType: "URL" as SettingType,
    value: "",
  },
  {
    key: "contact_phone",
    description: "Main contact phone number",
    valueType: "STRING" as SettingType,
    value: "540-948-4427",
  },
  {
    key: "contact_email",
    description: "Main contact email address",
    valueType: "EMAIL" as SettingType,
    value: "info@mesamadisonva.org",
  },
  {
    key: "address_street",
    description: "Street address",
    valueType: "STRING" as SettingType,
    value: "927 Orange Road",
  },
  {
    key: "address_city_state_zip",
    description: "City, State, ZIP",
    valueType: "STRING" as SettingType,
    value: "Madison, VA 22731",
  },
];

export async function POST() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get existing settings
    const existingSettings = await prisma.siteSetting.findMany({
      select: { key: true },
    });
    const existingKeys = new Set(existingSettings.map((s) => s.key));

    // Filter to only settings that don't exist
    const settingsToCreate = defaultSettings.filter(
      (s) => !existingKeys.has(s.key)
    );

    if (settingsToCreate.length === 0) {
      return NextResponse.json({ message: "All settings already exist" });
    }

    // Create missing settings
    await prisma.siteSetting.createMany({
      data: settingsToCreate,
    });

    return NextResponse.json({
      message: `Created ${settingsToCreate.length} settings`,
      created: settingsToCreate.map((s) => s.key),
    });
  } catch (error) {
    console.error("Error initializing settings:", error);
    return NextResponse.json(
      { error: "Failed to initialize settings" },
      { status: 500 }
    );
  }
}
