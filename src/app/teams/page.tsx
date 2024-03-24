import JoinTeam from "@/components/joining-page";
import ScrollIndicator from "@/components/scrollindicator";

export default function Teams() {
  return (
    <main className="min-h-screen">
      <JoinTeam
        teamName="Management"
        order="1"
        titles={["EVENTS", "OUTREACH", "FINANCE"]}
      />
      <JoinTeam
        teamName="Tech"
        order="2"
        titles={["APP", "WEB", "AI/ML", "RnD", "DEVOPS"]}
      />
      <JoinTeam
        teamName="Design"
        order="1"
        titles={["UI/UX", "GRAPHICS", "VIDEO"]}
      />
      <ScrollIndicator />
    </main>
  );
}
