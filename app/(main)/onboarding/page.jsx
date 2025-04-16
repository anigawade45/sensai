import { redirect } from "next/navigation";
// import { industries } from "@/data/industries";
import OnboardingForm from "./components/onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";  // Adjust the path if necessary

export default async function OnboardingPage() {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}