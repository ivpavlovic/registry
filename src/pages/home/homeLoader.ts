import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackeges";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPackages = await getFeaturedPackages();
  return {
    featuredPackages,
  };
}
