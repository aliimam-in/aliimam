import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
} from "@/src/components/layout/page-header"


export function Journey() {
  return (
    <section className="container relative">
      <div className="border-x pb-20 border-b">
        <SectionHeader>
          <SectionHeaderHeading>
            My Creative Journey
          </SectionHeaderHeading>
        </SectionHeader>
        <div className="flex flex-col items-center space-y-6 justify-center">
          <SectionHeaderDescription className="text-center">
            My love for design began years ago, evolving through diverse roles
            across industries, from sales to animation, before finding my true
            calling in graphic design and development. Each step of my career
            has shaped my unique perspective, blending artistic vision with
            strategic thinking. Today, at Here, I channel this experience into
            creating digital and visual experiences that are both stunning and
            functional. My journey spans roles at renowned companies like
            IDCUBE, Steadfast Nutrition, Garage Productions, and Yellow Straw
            Advertising, where I honed my skills in UI/UX design, branding,
            motion graphics, and more. From crafting pixel-perfect interfaces to
            leading creative campaigns, I’ve built a reputation for delivering
            results that exceed expectations.
          </SectionHeaderDescription>

          <SectionHeaderDescription className="text-center">
            At Here, you work directly with me—founder, designer, and creative
            strategist. This means personalized attention, seamless
            collaboration, and a commitment to bringing your vision to life.
            I’ve been dedicated to providing a complete platform for design,
            offering end-to-end creative solutions tailored to your needs.
          </SectionHeaderDescription>

          <SectionHeaderDescription className="text-center">
            Currently, I work from my studio as an independent contractor,
            helping brands develop effective visuals and design systems. In my
            design studio, I spend most of my time building design tools and resources,
            with a focus on creativity and experience, while experimenting with new tools and
            trends.
          </SectionHeaderDescription> 
        </div>
      </div>
    </section>
  );
}
