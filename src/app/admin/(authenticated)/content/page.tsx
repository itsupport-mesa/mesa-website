import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ContentEditor } from "@/components/admin/ContentEditor";

export const metadata: Metadata = {
  title: "Content Editor",
};

async function getContentBlocks() {
  const blocks = await prisma.contentBlock.findMany({
    orderBy: [{ page: "asc" }, { sortOrder: "asc" }],
    include: {
      lastEditedBy: {
        select: { name: true },
      },
    },
  });

  // Group by page
  const grouped = blocks.reduce(
    (acc, block) => {
      if (!acc[block.page]) {
        acc[block.page] = [];
      }
      acc[block.page].push(block);
      return acc;
    },
    {} as Record<string, typeof blocks>
  );

  return grouped;
}

export default async function ContentPage() {
  const contentByPage = await getContentBlocks();
  const pages = Object.keys(contentByPage);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Content Editor</h1>
        <p className="mt-1 text-gray-600">
          Edit the text content displayed on your website pages
        </p>
      </div>

      {pages.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">
            No content blocks have been created yet.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Content blocks will be seeded when you set up initial content.
          </p>
        </div>
      ) : (
        <ContentEditor contentByPage={contentByPage} />
      )}
    </div>
  );
}
