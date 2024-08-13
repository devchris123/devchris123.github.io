// 1. Import utilities from `astro:content`
import { z, defineCollection, } from 'astro:content';

// 2. Define your collection(s)
const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string())
    }),
});
const booksCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        rating: z.enum(["1", "2", "3", "4", "5"]),
        tags: z.array(z.string())
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectsCollection,
    'books': booksCollection
};