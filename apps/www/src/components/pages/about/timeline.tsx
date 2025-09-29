import {
  Card, 
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Badge } from "@/registry/default/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "current" | "past" | "early";
  isPresent?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Founder",
    company: "Ali Imam",
    location: "Bokaro Steel City",
    period: "Aug 2024 - Present",
    description:
      "Launched my own creative agency, offering comprehensive design and development solutions.",
    type: "current",
    isPresent: true,
  },
  {
    id: "2",
    title: "Graphic Designer",
    company: "IDCUBE",
    location: "Noida",
    period: "Feb 2024 - Present",
    description:
      "Designing innovative visuals and UI/UX solutions for a leading tech company.",
    type: "past", 
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "Steadfast Nutrition",
    location: "Noida",
    period: "Aug 2023 - Jan 2024",
    description:
      "Created impactful branding and packaging designs for a health and wellness brand.",
    type: "past",
  },
  {
    id: "4",
    title: "Assistant Art Director",
    company: "Garage Productions",
    location: "Noida",
    period: "Dec 2020 - Dec 2022",
    description:
      "Led creative direction for video and advertising projects, blending artistry with storytelling.",
    type: "past",
  },
  {
    id: "5",
    title: "Consultant Graphic Designer",
    company: "FormsADDA.com",
    location: "Ranchi",
    period: "Jun 2020 - Dec 2020",
    description: "Delivered tailored design solutions for a digital platform.",
    type: "past",
  },
  {
    id: "6",
    title: "Senior Visualizer",
    company: "Yellow Straw Advertising",
    location: "Noida",
    period: "Nov 2018 - Jun 2020",
    description:
      "Spearheaded visual campaigns and branding projects for diverse clients.",
    type: "past",
  },
  {
    id: "7",
    title: "Faculty",
    company: "WLC College India Ltd.",
    location: "Delhi",
    period: "Aug 2018 - Nov 2018",
    description:
      "Mentored aspiring designers, sharing my expertise in visual communication.",
    type: "past",
  },
  {
    id: "8",
    title: "Animator",
    company: "Pointillist Media",
    location: "Delhi",
    period: "Nov 2017 - Aug 2018",
    description: "Crafted engaging animations for media projects.",
    type: "past",
  },
  {
    id: "9",
    title: "Early Career Roles",
    company: "Various Companies",
    location: "Multiple Locations",
    period: "2015 - 2017",
    description:
      "Gained foundational experience in sales and promotions with companies like Cadbury Gifting India, Innovsource, and Jukaso Journeys, building skills in client engagement and communication.",
    type: "early",
  },
];

export function Timeline() {
  return (
    <div className="container relative">
      <div className="border-x border-b px-6 py-10 md:px-20">
        <div className="absolute left-15 md:left-29 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-3">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-3">
              {/* Timeline dot */}
              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ${
                  item.type === "current"
                    ? "bg-primary border-primary"
                    : item.type === "early"
                      ? "bg-muted border-muted-foreground/20"
                      : "bg-card border-border"
                }`}
              >
                <Building2
                  className={`h-6 w-6 ${
                    item.type === "current"
                      ? "text-primary-foreground"
                      : item.type === "early"
                        ? "text-muted-foreground"
                        : "text-muted-foreground"
                  }`}
                />
              </div>

              {/* Content card */}
              <Card
                className={`flex-1 shadow-none ${item.type === "current" ? " shadow-lg" : ""}`}
              >
                <CardHeader >
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid md:flex items-center gap-3">
                      <CardTitle className="text-xl font-semibold">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {item.company}
                      </CardDescription>
                    </div>
                    {item.isPresent && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        Current
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardHeader> 
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
