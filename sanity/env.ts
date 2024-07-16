export const apiVersion = process.env.SANITY_API_VERSION || "2023-08-18";

export const dataset = assertValue(
    process.env.SANITY_STUDIO_DATASET || "production",
    "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
    process.env.SANITY_STUDIO_PROJECT_ID,
    "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

const token = `${process.env.SANITY_API_READ_TOKEN}`;
export const previewToken = assertValue(
    token,
    "Missing environment variable:SANITY_API_READ_TOKEN"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}
