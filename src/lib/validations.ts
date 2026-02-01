import { z } from "zod";

// Testimonial submission form validation
export const testimonialSubmissionSchema = z.object({
  story: z
    .string()
    .min(50, "Please share at least a few sentences about your experience")
    .max(2000, "Story must be less than 2000 characters"),
  clientName: z.string().optional(),
  clientEmail: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  shareOnWebsite: z.boolean().default(false),
  shareOnFacebook: z.boolean().default(false),
  shareInNewsletter: z.boolean().default(false),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "You must confirm that your story is true and accurate",
    }),
  }),
});

export type TestimonialSubmission = z.infer<typeof testimonialSubmissionSchema>;

// Content block update validation
export const contentBlockUpdateSchema = z.object({
  content: z.string().min(1, "Content cannot be empty"),
});

export type ContentBlockUpdate = z.infer<typeof contentBlockUpdateSchema>;

// Slideshow image validation
export const slideshowImageSchema = z.object({
  altText: z.string().min(1, "Alt text is required for accessibility"),
  caption: z.string().optional(),
  linkUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  isActive: z.boolean().default(true),
});

export type SlideshowImageInput = z.infer<typeof slideshowImageSchema>;

// Resource validation
export const resourceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  url: z.string().url("Please enter a valid URL"),
  category: z.string().min(1, "Category is required"),
  isActive: z.boolean().default(true),
});

export type ResourceInput = z.infer<typeof resourceSchema>;

// Site setting validation
export const siteSettingSchema = z.object({
  value: z.string(),
});

export type SiteSettingInput = z.infer<typeof siteSettingSchema>;
