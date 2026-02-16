import { Metadata } from "next";
import { ExternalLink, Phone, Globe } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Community resources and support services available to Madison County, Virginia residents.",
};

// This page will be dynamic to fetch resources from the database
export const dynamic = "force-dynamic";

async function getResources() {
  try {
    const resources = await prisma.resource.findMany({
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });
    return resources;
  } catch {
    return [];
  }
}

export default async function ResourcesPage() {
  const resources = await getResources();

  // Group resources by category
  const groupedResources = resources.reduce(
    (acc, resource) => {
      const category = resource.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(resource);
      return acc;
    },
    {} as Record<string, typeof resources>
  );

  // Static resources that are always shown
  const staticResources = [
    {
      category: "Government Services",
      items: [
        {
          name: "Madison County Department of Social Services",
          description:
            "SNAP benefits, Medicaid, TANF, and other assistance programs",
          phone: "540-948-4211",
          url: "https://www.dss.virginia.gov/localagency/madison/",
        },
        {
          name: "Virginia 211",
          description:
            "Free, confidential referral service connecting people to local resources",
          phone: "211",
          url: "https://www.211virginia.org/",
        },
      ],
    },
    {
      category: "Food Assistance",
      items: [
        {
          name: "Blue Ridge Area Food Bank",
          description: "Regional food bank serving the Shenandoah Valley",
          url: "https://www.brafb.org/",
        },
        {
          name: "Find a Local Pantry",
          description:
            "Use the Blue Ridge Area Food Bank's food finder to locate a pantry near you",
          url: "https://foodfinder.brafb.org/",
        },
        {
          name: "USDA Food and Nutrition Service",
          description: "Federal food assistance programs information",
          url: "https://www.fns.usda.gov/",
        },
      ],
    },
    {
      category: "Utility Assistance",
      items: [
        {
          name: "Rappahannock Electric Cooperative",
          description: "Electric service provider for Madison County",
          phone: "800-552-3904",
          url: "https://www.myrec.coop/",
        },
        {
          name: "LIHEAP (Low Income Home Energy Assistance)",
          description: "Federal program to help with heating and cooling costs",
          url: "https://www.benefits.gov/benefit/623",
        },
      ],
    },
    {
      category: "Health Services",
      items: [
        {
          name: "Piedmont Community Health",
          description: "Affordable healthcare for uninsured and underinsured",
          phone: "540-948-5820",
          url: "https://www.piedmontcommunityhealth.org/",
        },
        {
          name: "Free Clinic of Culpeper",
          description: "Free medical care for eligible uninsured adults",
          phone: "540-829-5032",
          url: "https://freecliniccville.org/",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mesa-blue-700 to-mesa-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Community Resources
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-mesa-blue-100">
            Additional support services available to Madison County residents
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-mesa-cream py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            In addition to our food pantry and emergency services, there are
            many other organizations that can help Madison County residents.
            Below is a list of resources that may be helpful to you.
          </p>
        </div>
      </section>

      {/* Database Resources */}
      {Object.keys(groupedResources).length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {Object.entries(groupedResources).map(([category, items]) => (
              <div key={category} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {category}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((resource) => (
                    <div
                      key={resource.id}
                      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-mesa-blue-700">
                        {resource.name}
                      </h3>
                      {resource.description && (
                        <p className="mt-2 text-gray-600">
                          {resource.description}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        {resource.url && (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-mesa-blue-600 hover:text-mesa-blue-700"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Website
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Static Resources */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {staticResources.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {section.category}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((resource) => (
                  <div
                    key={resource.name}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-mesa-blue-700">
                      {resource.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{resource.description}</p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                      {resource.phone && (
                        <a
                          href={`tel:${resource.phone}`}
                          className="flex items-center gap-1 text-mesa-blue-600 hover:text-mesa-blue-700"
                        >
                          <Phone className="h-4 w-4" />
                          {resource.phone}
                        </a>
                      )}
                      {resource.url && (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-mesa-blue-600 hover:text-mesa-blue-700"
                        >
                          <Globe className="h-4 w-4" />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help */}
      <section className="bg-mesa-blue-50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            If you&apos;re unsure which resources are right for your situation,
            give us a call. We&apos;re happy to help connect you with the
            appropriate services.
          </p>
          <a
            href="tel:540-948-4427"
            className="mt-6 inline-block rounded-md bg-mesa-blue-700 px-6 py-3 text-white hover:bg-mesa-blue-800"
          >
            Call 540-948-4427
          </a>
        </div>
      </section>
    </div>
  );
}
