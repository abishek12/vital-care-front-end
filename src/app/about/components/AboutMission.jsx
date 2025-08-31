import { Goal, HandHeart, Sparkles } from "lucide-react";

import { AboutCard } from "@/components/Card/AboutCard";

const AboutMission = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#0b3a74]/5">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        {" "}
        {/* Reduced from py-10 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <AboutCard
            icon={<HandHeart className="size-6" />}
            title="Our Values"
            desc="Innovation, Trust, Respect, Integrity, Empowerment, Dignity"
          />
          <AboutCard
            icon={<Goal className="size-6" />}
            title="Our Mission"
            desc="To empower, encourage, and enable people who are aging or have disabilities to enhance their quality of life with dignity and respect. To evaluate and exceed stakeholders’ expectations. To provide care focused on the holistic view of each individual."
          />
          <AboutCard
            icon={<Sparkles className="size-6" />}
            title="Our Vision"
            desc="At Vital Care Group, our vision is to build a resilient and empowered community by partnering with individuals with disabilities, empowering them to lead fulfilling lives full of choice, dignity, and opportunity."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
