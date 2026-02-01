"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiteSetting, SettingType } from "@prisma/client";
import { Save, Check, AlertCircle, Plus } from "lucide-react";

interface SettingsManagerProps {
  settings: SiteSetting[];
}

// Default settings that should exist
const defaultSettings = [
  {
    key: "paypal_url",
    description: "PayPal donation button URL",
    valueType: "URL" as SettingType,
    defaultValue: "",
  },
  {
    key: "calendar_embed_url",
    description: "Google Calendar embed URL",
    valueType: "URL" as SettingType,
    defaultValue: "",
  },
  {
    key: "amazon_wishlist_url",
    description: "Amazon Wishlist URL for donations",
    valueType: "URL" as SettingType,
    defaultValue: "",
  },
  {
    key: "contact_phone",
    description: "Main contact phone number",
    valueType: "STRING" as SettingType,
    defaultValue: "540-948-4427",
  },
  {
    key: "contact_email",
    description: "Main contact email address",
    valueType: "EMAIL" as SettingType,
    defaultValue: "info@mesamadisonva.org",
  },
  {
    key: "address_street",
    description: "Street address",
    valueType: "STRING" as SettingType,
    defaultValue: "927 Orange Road",
  },
  {
    key: "address_city_state_zip",
    description: "City, State, ZIP",
    valueType: "STRING" as SettingType,
    defaultValue: "Madison, VA 22731",
  },
];

export function SettingsManager({ settings: initialSettings }: SettingsManagerProps) {
  const router = useRouter();
  const [settings, setSettings] = useState(initialSettings);
  const [editedValues, setEditedValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [initializing, setInitializing] = useState(false);

  // Check which default settings are missing
  const existingKeys = new Set(settings.map((s) => s.key));
  const missingSettings = defaultSettings.filter(
    (ds) => !existingKeys.has(ds.key)
  );

  const handleValueChange = (key: string, value: string) => {
    setEditedValues((prev) => ({ ...prev, [key]: value }));
    setSaved((prev) => {
      const next = new Set(prev);
      next.delete(key);
      return next;
    });
  };

  const handleSave = async (setting: SiteSetting) => {
    const value = editedValues[setting.key] ?? setting.value;
    setSaving(setting.key);
    setErrors((prev) => {
      const next = { ...prev };
      delete next[setting.key];
      return next;
    });

    try {
      const response = await fetch(`/api/admin/settings/${setting.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) throw new Error("Failed to save");

      setSaved((prev) => new Set(prev).add(setting.key));
      setSettings((prev) =>
        prev.map((s) => (s.id === setting.id ? { ...s, value } : s))
      );
    } catch {
      setErrors((prev) => ({
        ...prev,
        [setting.key]: "Failed to save. Please try again.",
      }));
    } finally {
      setSaving(null);
    }
  };

  const initializeSettings = async () => {
    setInitializing(true);
    try {
      const response = await fetch("/api/admin/settings/initialize", {
        method: "POST",
      });

      if (!response.ok) throw new Error("Failed to initialize");

      router.refresh();
    } catch {
      setErrors((prev) => ({
        ...prev,
        _init: "Failed to initialize settings. Please try again.",
      }));
    } finally {
      setInitializing(false);
    }
  };

  const formatSettingKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getInputType = (valueType: SettingType) => {
    switch (valueType) {
      case "URL":
        return "url";
      case "EMAIL":
        return "email";
      case "BOOLEAN":
        return "checkbox";
      default:
        return "text";
    }
  };

  return (
    <div>
      {/* Initialize Missing Settings */}
      {missingSettings.length > 0 && (
        <div className="mb-6 rounded-xl bg-yellow-50 p-6">
          <h3 className="font-semibold text-yellow-800">
            Missing Default Settings
          </h3>
          <p className="mt-1 text-sm text-yellow-700">
            {missingSettings.length} default setting(s) need to be initialized.
          </p>
          <button
            onClick={initializeSettings}
            disabled={initializing}
            className="mt-4 flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            {initializing ? "Initializing..." : "Initialize Default Settings"}
          </button>
          {errors._init && (
            <p className="mt-2 text-sm text-red-600">{errors._init}</p>
          )}
        </div>
      )}

      {/* Settings List */}
      {settings.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">No settings have been configured yet.</p>
          <p className="mt-1 text-sm text-gray-500">
            Click the button above to initialize default settings.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {settings.map((setting) => {
            const currentValue = editedValues[setting.key] ?? setting.value;
            const originalValue = settings.find(
              (s) => s.key === setting.key
            )?.value;
            const hasChanges =
              editedValues[setting.key] !== undefined &&
              editedValues[setting.key] !== originalValue;
            const isSaving = saving === setting.key;
            const isSaved = saved.has(setting.key);
            const error = errors[setting.key];
            const inputType = getInputType(setting.valueType);

            return (
              <div
                key={setting.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {formatSettingKey(setting.key)}
                    </h3>
                    {setting.description && (
                      <p className="text-sm text-gray-500">
                        {setting.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {isSaved && !hasChanges && (
                      <span className="flex items-center gap-1 text-sm text-green-600">
                        <Check className="h-4 w-4" />
                        Saved
                      </span>
                    )}
                    <button
                      onClick={() => handleSave(setting)}
                      disabled={isSaving || (!hasChanges && !error)}
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        hasChanges
                          ? "bg-mesa-green-600 text-white hover:bg-mesa-green-700"
                          : "bg-gray-100 text-gray-400"
                      } disabled:cursor-not-allowed`}
                    >
                      <Save className="h-4 w-4" />
                      {isSaving ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}

                {inputType === "checkbox" ? (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={currentValue === "true"}
                      onChange={(e) =>
                        handleValueChange(
                          setting.key,
                          e.target.checked ? "true" : "false"
                        )
                      }
                      className="h-4 w-4 rounded border-gray-300 text-mesa-green-600 focus:ring-mesa-green-500"
                    />
                    <span className="text-sm text-gray-700">Enabled</span>
                  </label>
                ) : (
                  <input
                    type={inputType}
                    value={currentValue}
                    onChange={(e) =>
                      handleValueChange(setting.key, e.target.value)
                    }
                    placeholder={`Enter ${formatSettingKey(setting.key).toLowerCase()}`}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-mesa-green-500 focus:outline-none focus:ring-1 focus:ring-mesa-green-500"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
