"use server";

import { revalidateTag } from "next/cache";

export async function handleRevaliDateDetails () {
    revalidateTag("mindmapDetails");
}
export const handleRevaliDate = async () => {
    revalidateTag("mindmap");
} 