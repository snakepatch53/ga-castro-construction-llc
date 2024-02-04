import { fetchAdapter } from "./apiConfig";

const resource = "send-me-mail";

export async function sendContactForm({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
        all: true,
        // printResponse: true,
    });
    return response;
}
