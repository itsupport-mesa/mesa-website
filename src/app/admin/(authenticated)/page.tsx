import { getServerSession } from "next-auth";
import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Images,
  Link as LinkIcon,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function getDashboardStats() {
  const [
    pendingTestimonials,
    approvedTestimonials,
    contentBlocks,
    slideshowImages,
    resources,
    users,
  ] = await Promise.all([
    prisma.testimonial.count({ where: { status: "PENDING" } }),
    prisma.testimonial.count({ where: { status: "APPROVED" } }),
    prisma.contentBlock.count(),
    prisma.slideshowImage.count({ where: { isActive: true } }),
    prisma.resource.count({ where: { isActive: true } }),
    prisma.user.count(),
  ]);

  return {
    pendingTestimonials,
    approvedTestimonials,
    contentBlocks,
    slideshowImages,
    resources,
    users,
  };
}

async function getRecentActivity() {
  const recentTestimonials = await prisma.testimonial.findMany({
    where: { status: "PENDING" },
    orderBy: { submittedAt: "desc" },
    take: 5,
    select: {
      id: true,
      clientInitials: true,
      submittedAt: true,
      story: true,
    },
  });

  return recentTestimonials;
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  const stats = await getDashboardStats();
  const recentActivity = await getRecentActivity();
  const isAdmin = session?.user.role === "ADMIN";

  const cards = [
    {
      title: "Pending Reviews",
      value: stats.pendingTestimonials,
      description: "Testimonials awaiting moderation",
      icon: MessageSquare,
      href: "/admin/testimonials",
      highlight: stats.pendingTestimonials > 0,
    },
    {
      title: "Published Stories",
      value: stats.approvedTestimonials,
      description: "Approved testimonials on website",
      icon: MessageSquare,
      href: "/admin/testimonials",
    },
    {
      title: "Content Blocks",
      value: stats.contentBlocks,
      description: "Editable page sections",
      icon: FileText,
      href: "/admin/content",
    },
    {
      title: "Slideshow Images",
      value: stats.slideshowImages,
      description: "Active homepage slides",
      icon: Images,
      href: "/admin/slideshow",
    },
    ...(isAdmin
      ? [
          {
            title: "Resources",
            value: stats.resources,
            description: "External links published",
            icon: LinkIcon,
            href: "/admin/resources",
          },
          {
            title: "Staff Users",
            value: stats.users,
            description: "Registered admin users",
            icon: Users,
            href: "/admin/users",
          },
        ]
      : []),
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Welcome back, {session?.user.name?.split(" ")[0]}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
              card.highlight ? "ring-2 ring-mesa-orange-400" : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{card.description}</p>
              </div>
              <div
                className={`rounded-lg p-3 ${
                  card.highlight
                    ? "bg-mesa-orange-100 text-mesa-orange-600"
                    : "bg-mesa-blue-50 text-mesa-blue-600"
                }`}
              >
                <card.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-mesa-blue-600 group-hover:text-mesa-blue-700">
              View details
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Pending Testimonials
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm">
            <ul className="divide-y divide-gray-100">
              {recentActivity.map((testimonial) => (
                <li key={testimonial.id}>
                  <Link
                    href={`/admin/testimonials?id=${testimonial.id}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mesa-blue-100">
                      <span className="text-sm font-medium text-mesa-blue-700">
                        {testimonial.clientInitials || "?"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm text-gray-900">
                        {testimonial.story.slice(0, 100)}
                        {testimonial.story.length > 100 ? "..." : ""}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {new Date(testimonial.submittedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/testimonials"
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <MessageSquare className="h-5 w-5 text-mesa-blue-600" />
            Review Testimonials
          </Link>
          <Link
            href="/admin/content"
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FileText className="h-5 w-5 text-mesa-blue-600" />
            Edit Page Content
          </Link>
          <Link
            href="/admin/slideshow"
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <Images className="h-5 w-5 text-mesa-blue-600" />
            Manage Slideshow
          </Link>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ArrowRight className="h-5 w-5 text-mesa-blue-600" />
            View Live Site
          </Link>
        </div>
      </div>
    </div>
  );
}
