'use client'

import { SectionHeading } from "./section-heading"
import { CTMFCard } from "./ctmf-card"

export function ProjectSwim() {
  return (
    <div className="space-y-6">
      <SectionHeading level="h2">
        Project 3 - Praxis II: Variable Swim Resistance for MSSAC
      </SectionHeading>

      <SectionHeading level="h3">Project Overview and the Working Environment</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        In partnership with the <span className="font-semibold text-foreground">Mississauga Aquatic Club (MSSAC)</span>, this project aims to engineer a highly variable resistance training device specifically tailored for high-performance competitive swimmers.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Initial engagement with coaching staff and athletes revealed a critical deficiency in current aquatic training equipment. Standard resistance tools, such as traditional swim parachutes or stretch cords, essentially offer a <span className="text-primary">binary resistance state</span>: either high drag or no drag. If a swimmer requires a different resistance level, they must physically exit the lane, swap out the parachute for a different size, and restart their set. This disrupts the fast-paced nature of competitive training and restricts the ability to create nuanced, individualized, and progressive resistance regimens.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Furthermore, the working environment imposed severe physical and administrative constraints. The MSSAC operates out of a shared municipal facility. Any proposed engineering solution had to be completely <span className="font-semibold">non-destructive</span>, meaning it could not require drilling into the pool deck or permanently altering the bulkhead. Additionally, the device had to be rapidly deployable, capable of withstanding prolonged exposure to chlorinated water, and designed with a quick-release safety mechanism to prevent swimmer entanglement.
      </p>

      <SectionHeading level="h3">Establishing Rigorous Engineering Parameters (NGOS)</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        To transition this opportunity from a qualitative stakeholder request into a verifiable engineering challenge, our team established a strict framework of Needs, Goals, Objectives, and Specifications (NGOS).
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The primary engineering objective was to provide <span className="font-semibold text-foreground">integrated adjustability</span>. We translated the subjective desire for variability into a rigid, testable specification: The device must possess a minimum of <span className="text-primary font-semibold">5 discrete, integrated resistance levels</span>, with less than a <span className="text-primary">10% force difference</span> between neighboring levels. This single specification acted as a ruthless filter, immediately disqualifying any design that relied on arbitrary user tensioning or required the swapping of physical components to change drag profiles.
      </p>

      <SectionHeading level="h3">Design Archetypes and Proposed Concepts</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        Generating over 50 mechanical concepts, we recognized that evaluating individual ideas against our NGOS would result in severe cognitive overload. We systematically categorized our design space into four dominant mechanical paradigms: <span className="text-primary">Power Towers</span> (deck-mounted pulley systems), <span className="text-primary">Parachutes</span> (hydrodynamic drag-based), <span className="text-primary">Stretch Cords</span> (elastic resistance), and <span className="text-primary">Ziplines</span> (overhead friction tracks).
      </p>

      <p className="text-muted-foreground leading-relaxed">
        By evaluating these archetypes against our facility constraints, we eliminated entire classes of solutions. For example, all Power Tower concepts were discarded because they violated the non-destructive infrastructure requirement of the municipal pool.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Focusing our optimization on the surviving archetypes, we converged on two highly viable final concepts:
      </p>

      <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed ml-4 mt-4">
        <li>
          <span className="font-semibold text-foreground">The Umbrella Parachute:</span> Stemming from the parachute archetype, this design replaces a static nylon chute with a rigid, articulating canopy. The resistance is modulated by adjusting the opening/closing angle of the umbrella mechanism. A larger deployment angle actively increases the surface area perpendicular to the flow, thereby increasing the drag coefficient. This allows the swimmer to mechanically dial in their exact resistance level without swapping equipment.
        </li>
        <li>
          <span className="font-semibold text-foreground">The Zipline with Screw-Bracket Brake:</span> An overhead tether system secured temporarily to the starting blocks. Resistance is applied via a carriage rolling along the tensioned wire. We engineered a precise braking mechanism using a screw-driven rectangular bracket that compresses a friction pad against the wire. Because the distance screwed is quantifiable (e.g., half-turn, full-turn), it allows coaches to reproduce exact, verifiable resistance settings for different athletes.
        </li>
      </ol>

      <figure className="flex flex-col gap-2 my-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X1VXeWVYbfx1lrZ70VhBvufeIRiCP7.png"
          alt="3D CAD model of the Umbrella Parachute mechanism showing 6 articulating ribs with a central hub and adjustment screw."
          className="w-full max-w-xl mx-auto rounded-md border border-border bg-white object-contain"
        />
        <figcaption className="text-sm text-muted-foreground text-center">
          <strong>Figure 4.1:</strong> 3D CAD model of the Umbrella Parachute mechanism by Vedant Nehete, showing the articulating rib structure and central adjustment hub.
        </figcaption>
      </figure>

      <figure className="flex flex-col gap-2 my-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aGcdmdt37FfP7kIOumZCLzecwk4TyT.png"
          alt="Final rendered design showing the complete Umbrella Parachute system with waist belt, tether cable, and deployable canopy mechanism."
          className="w-full max-w-2xl mx-auto rounded-md border border-border object-contain"
        />
        <figcaption className="text-sm text-muted-foreground text-center">
          <strong>Figure 4.2:</strong> Final rendered design of the complete Umbrella Parachute system showing waist belt attachment and cable tether.
        </figcaption>
      </figure>

      <SectionHeading level="h3">Application of Conceptual Thinking Meta-Frameworks (CTMFs)</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        To navigate the complex, human-centric constraints of a municipal aquatic facility, our team deployed a distinct set of Praxis CTMFs. Unlike the rigid mathematical parameters of the CIV102 bridge, the MSSAC project required frameworks capable of translating qualitative human behaviors into verifiable physical mechanisms, and evaluating those mechanisms without access to professional hydrodynamic testing facilities.
      </p>

      <div className="space-y-4 mt-6">
        <CTMFCard number={7} strand="Frame" title="The PIAA Model (Perceive, Interpret, Assess, Act)">
          <p>
            The most significant barrier early in this project was the qualitative nature of the stakeholder requests. Swimmers and coaches expressed frustrations in terms like "we need more options" and "it's annoying to switch equipment." These statements, while valid, did not provide actionable engineering requirements. To systematically translate swimmer frustrations into engineering parameters, I utilized the <span className="font-semibold text-foreground">PIAA Model</span> [11]. This framework prevented us from jumping straight from an observation to a solution, a common failure mode in stakeholder-driven projects.
          </p>

          <p>
            The PIAA Model [11] structures the framing process into four distinct phases, each requiring explicit documentation before proceeding to the next. This forced rigor was essential in preventing cognitive shortcuts that could lead to misaligned solutions.
          </p>

          <ul className="list-none space-y-4 mt-4">
            <li>
              <span className="text-primary font-semibold">Perceive:</span> During our site visits to the MSSAC facility, I perceived specific behaviors that indicated underlying problems. Swimmers were frequently stopping mid-lane, exiting the water, walking to the equipment storage area, swapping out different sized nylon parachutes, re-entering the water, and restarting their sets. This process took approximately 45-90 seconds per equipment change. I also perceived that coaches were constantly shouting timing adjustments to compensate for the equipment swap delays, disrupting the rhythm of the entire lane.
            </li>
            <li>
              <span className="text-primary font-semibold">Interpret:</span> I interpreted this behavior not just as an annoyance, but as a critical disruption to the physiological flow of high-performance interval training. High-intensity swim training relies on precise work-to-rest ratios, typically 1:1 or 1:2 for sprint sets. A 90-second equipment change during a 30-second rest interval completely destroys the metabolic stress pattern that the training is designed to induce. The existing tools were functionally binary (high drag or no drag), forcing coaches to choose between inappropriate resistance levels or disruptive equipment changes. Neither option supported optimal athletic development.
            </li>
            <li>
              <span className="text-primary font-semibold">Assess:</span> We assessed the working environment of the MSSAC comprehensively. The facility is a shared municipal pool, meaning the club does not own or control the infrastructure. We recognized a severe conflict: while the athletes needed heavy, rigid resistance (capable of withstanding forces from elite swimmers generating over 50N of thrust), the municipal facility managers strictly prohibited any permanent structural modifications. No drilling into the pool deck. No permanent anchors in the bulkhead. No modifications to the starting blocks. Any solution that required infrastructure changes was automatically disqualified, regardless of its performance benefits.
            </li>
            <li>
              <span className="text-primary font-semibold">Act:</span> Based on these observations and constraints, we defined a clear and actionable design direction. Since swimmers were losing 45–90 seconds per equipment change and disrupting their training intervals, the device needed to eliminate the need to leave the lane entirely. This directly led to the requirement for a single integrated system with multiple resistance settings, rather than interchangeable equipment. Additionally, because coaches described needing “more options” and we observed that existing tools only provided binary resistance, we translated this into a requirement for at least 5 discrete resistance levels, aligning with the distinct training zones used in high-performance swim programs. To ensure these levels were actually usable in practice, we specified that adjacent resistance levels must differ by less than 10% in force, allowing swimmers to perceive meaningful but controlled progression without overshooting intensity targets. Finally, due to the strict facility constraints prohibiting permanent modifications, the system had to be fully temporary and non-destructive, capable of delivering high resistive forces without relying on fixed infrastructure. Together, these decisions directly respond to the observed inefficiencies, the physiological requirements of training, and the environmental constraints, forming a cohesive and justified engineering objective.
            </li>
          </ul>

          <p className="mt-4">
            The PIAA process also revealed secondary constraints that shaped our design space. For example, during the Perceive phase, we noticed that coaches often worked with multiple swimmers simultaneously, suggesting the device needed to be adjustable quickly (under 10 seconds) to allow coaches to set up multiple athletes without bottlenecking. This observation would not have emerged from a standard stakeholder interview. It required direct behavioral observation.
          </p>

          <p>
            The PIAA model was effective in forcing a structured translation of qualitative swimmer behavior into concrete engineering requirements. It prevented premature solution development by separating observation from interpretation and grounding decisions in the actual constraints of the facility. However, its reliability depends heavily on the accuracy of the interpretation stage - incorrect assumptions at that point would propagate through the entire design. We mitigated this risk by conducting multiple site visits and validating our interpretations with coaching staff before finalizing the NGOS.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> The PIAA model excelled at converting vague stakeholder frustrations into specific engineering requirements, particularly in this human-centric facility context. The limitation is that it relies on accurate interpretation of observed behavior - if the interpretation stage is flawed, all subsequent work can be misdirected despite rigorous application of the framework. This taught me that structured observation frameworks are essential for translating human needs into engineering specifications, but must be validated with stakeholders before locking in requirements.
          </p>
        </CTMFCard>

        <CTMFCard number={8} strand="Diverge" title="SCAMPER">
          <p>
            During the divergence phase, our team suffered from severe cognitive anchoring [7]; we were stuck iterating on minor variations of traditional nylon swim parachutes. Every concept we generated was essentially "a parachute, but slightly different" - different sizes, different attachment points, different materials. This was a classic case of functional fixedness, where familiarity with existing solutions prevented us from exploring fundamentally different approaches.
          </p>

          <p>
            To break this anchor, I facilitated a structured divergence session utilizing <span className="font-semibold text-foreground">SCAMPER</span> [12] (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse). Unlike reverse brainstorming [7] - which we initially attempted but abandoned because fluid dynamics cannot be logically reversed in this context - SCAMPER provided specific, actionable prompts that forced consideration of alternative mechanisms.
          </p>

          <figure className="flex flex-col gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCAMPER-DfZvMTfBYhVjIxZZirG2fgUwH09IYu.webp"
              alt="SCAMPER analysis table showing Reference Design categories (Power Towers, Stretch Cords, Parachute, Drag Suits, Vasa Swim Machine) with corresponding SCAMPER actions, concept names, and results."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground">
              <strong>Figure 4.4:</strong> SCAMPER analysis table systematically applying each prompt to reference designs to generate improved variants.
            </figcaption>
          </figure>

          <p>
            The SCAMPER analysis table above documents our systematic application of each prompt to existing reference designs. We analyzed five categories of existing resistance equipment: Power Towers, Stretch Cords, Parachutes, Drag Suits, and Vasa Swim Machines. For each, we applied relevant SCAMPER actions and documented the resulting concepts.
          </p>

          <p>
            Key concepts that emerged from this analysis include:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-3 mt-3">
            <li>
              <span className="font-semibold text-foreground">Power Tower - Substitute:</span> Weighted Pulley. Use dense weights instead of water bucket for storage efficiency.
            </li>
            <li>
              <span className="font-semibold text-foreground">Power Tower - Modify:</span> Water Wheel I. Fan frame filled with water; more water adds drag on spinning blades.
            </li>
            <li>
              <span className="font-semibold text-foreground">Stretch Cords - Combine:</span> Dual Cord. One cord connected to each side of the pool deck. By adjusting the resistances of each cord, you can incorporate more resistance levels.
            </li>
            <li>
              <span className="font-semibold text-foreground">Parachute - Modify (add holes):</span> Hole + Revolving Slide. Sliding cover controls how many holes are open, adjusting drag.
            </li>
            <li>
              <span className="font-semibold text-foreground">Parachute - Substitute (material):</span> Mesh Parachute. Metal mesh tightened and loosened by cord. Porosity equals drag control.
            </li>
            <li>
              <span className="font-semibold text-foreground">Parachute - Adapt (umbrella):</span> Umbrella Parachute. Shape adjustable like an umbrella. Wider spread equals higher drag.
            </li>
            <li>
              <span className="font-semibold text-foreground">Vasa Swim Machine - Put to other use:</span> In-Water Vasa. Paddles with adjustable size on the palm. The other side is shaped like an anti-paddle to make it easy to recover stroke underwater.
            </li>
          </ul>

          <p>
            The <span className="text-primary">Adapt</span> and <span className="text-primary">Modify</span> prompts yielded our most critical breakthrough. When we applied &quot;Adapt&quot; to the parachute category, we asked: what other mechanisms govern fluid or air resistance? This led us to adapt the folding rib mechanism of a standard rain umbrella. The umbrella&apos;s ability to change its cross-sectional area while maintaining structural integrity directly addressed our core NGOS requirement for integrated adjustability.
          </p>

          <p>
            We then applied "Modify" to integrate this umbrella skeleton into a hydrodynamic form factor. The result was the <span className="text-primary font-semibold">Umbrella Parachute concept</span>: a hydrodynamic canopy where the drag coefficient is mechanically modulated by adjusting the opening/closing angle. This design perfectly satisfied our NGO for integrated, 5-level adjustability without swapping parts. Each position of the umbrella mechanism corresponds to a specific, repeatable drag value.
          </p>

          <p>
            The SCAMPER session generated 14 distinct concepts across the five reference categories. Not all were viable. The Capsule Parachute concept (parachute made of water capsules with removable cone caps) was eliminated due to complexity concerns. But the breadth of ideas generated broke our team's cognitive fixation and enabled genuine exploration of the design space.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> SCAMPER was critical in breaking the team's fixation on traditional parachute designs and enabling a shift toward fundamentally different mechanisms. The "Adapt" and "Modify" prompts directly led to the umbrella-based concept, demonstrating its effectiveness in generating meaningful variation. At the same time, not all prompts were useful in this context. "Reverse" and "Eliminate" produced few viable concepts for fluid dynamics applications, reinforcing that the framework must be applied selectively rather than followed rigidly. <span className="text-foreground font-semibold">Here, I learned that the effectiveness of a design tool depends on whether it aligns with the underlying system being analyzed: human, mechanical, or environmental.</span>
          </p>
        </CTMFCard>

        <CTMFCard number={9} strand="Represent" title="Proxy Testing">
          <p>
            Having generated over 50 mechanical concepts and applied rigorous convergence filtering, we narrowed our focus to two finalists: the Umbrella Parachute and the Screw-Bracket Zipline. Both concepts satisfied our NGOS [4] on paper - they offered integrated adjustability, non-destructive installation, and theoretical compliance with our 5-level requirement. To make a final, defensible engineering recommendation, we could not rely on intuition or theoretical analysis alone. We needed empirical data.
          </p>

          <p>
            However, we lacked access to an Olympic-sized hydrodynamic testing pool or a flow-channel lab to gather standard empirical data. Professional drag coefficient measurements require controlled flow conditions, calibrated force transducers, and repeatable velocity profiles - none of which were available to our team. This created a critical challenge: how do we validate our concepts without access to industry-standard testing facilities?
          </p>

          <p>
            To solve this, we utilized <span className="font-semibold text-foreground">Proxy Testing</span> [13], which Praxis defines as approximating a standard test with the resources you have. The key insight was that while we could not measure absolute drag coefficients, we could measure <em>relative</em> drag differences between deployment angles, which was actually the critical variable for our 5-level adjustability requirement.
          </p>

          <figure className="flex flex-col gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Proxy%20Testing-APqBlXDjJrKe9rC5cJ4pNSEe8ujzcv.webp"
              alt="Proxy testing in pool showing a red Canada-branded frisbee attached to a digital force gauge (showing approximately 10 units on the scale) measuring drag resistance in water."
              className="w-full max-w-lg mx-auto rounded-md border border-border object-cover"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 4.5:</strong> Proxy testing conducted by Katie Ma. Setup in pool with force gauge measuring drag resistance of a parachute proxy (frisbee) at controlled pull speeds.
            </figcaption>
          </figure>

          <p>
            <span className="font-semibold text-foreground">The Proxy Test Setup:</span> To evaluate the Umbrella Parachute’s resistive force, we conducted tethered swim testing using a protocol adapted from competitive swimming research [18]. The setup connected the swimmer to the device via a belt and tether with a force meter in line, allowing us to directly measure drag force during a max effort sprint.
          </p>

          <p className="mt-4">
            The test protocol involved:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
            <li>Testing both a mesh parachute and an umbrella parachute prototype in closed and open states</li>
            <li>Three swim trials per prototype configuration</li>
            <li>Force readings recorded at peak effort using a force meter tracking maximum encountered force</li>
            <li>Statistical averaging across trials to reduce measurement variance</li>
          </ul>

          <p className="mt-4">
            The mesh parachute produced an average closed-state force of <strong>35N</strong> (trials: 32, 42, 30N). The open state failed during testing due to significant mesh deformation, meaning it did not meet Requirement 1.4. The umbrella parachute produced an average closed-state force of <strong>30N</strong> (trials: 25, 31, 34N) and an average open-state force of <strong>101N</strong> (trials: 111, 90, 102N). Since the prototypes were approximately 5% smaller than the final design, the projected forces for the final design are <strong>39N</strong> (closed) and <strong>108N</strong> (open), directly satisfying our maximum resistive force requirement. Larger open-state forces can be achieved by increasing arm length.
          </p>

          <p className="mt-4">
            This testing validated the Umbrella Parachute as the superior prototype, providing the empirical evidence needed to justify our design recommendation.
          </p>

          <p>
            By combining proxy testing with quantitative force measurements, we objectively demonstrated that the Umbrella Parachute produced a maximum resistive force of 108N at full deployment, satisfying our core functionality requirement. The mesh parachute was eliminated due to structural failure under open-state loading, while the umbrella parachute’s rigid canopy maintained consistent force output across trials with low variance. This data-driven comparison drove our final convergence to recommend the Umbrella Parachute for beta testing and deployment.
          </p>

          <p>
            This combined approach allowed for objective evaluation despite the lack of formal testing facilities, ensuring that final decisions were still grounded in data. Proxy testing provided approximated performance insights, while the measurement matrix structured comparison against NGOS. However, the validity of the conclusions depended on how accurately the proxy conditions represented reality - our pool tests did not account for factors like swimmer turbulence, varying swimming speeds, or long-term material fatigue. These limitations were documented and flagged for validation during the beta testing phase with actual MSSAC swimmers.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Proxy testing exemplifies a broader principle: perfect data is not required for sound engineering decisions. What matters is whether the proxy accurately captures the <em>variable of interest</em>. Since our NGOS focused on relative adjustability (differences between levels) rather than absolute drag values, our pool-based proxy test was sufficient to validate the concept. The limitation is that proxy tests are only valid if they accurately represent the critical variables - our simplified pool test couldn't capture long-term material fatigue or the turbulence effects of actual elite swimmers. This taught me to carefully identify which variables are critical for a decision and design tests that target those specific variables, while documenting what the proxy cannot measure.
          </p>
        </CTMFCard>
      </div>

      <SectionHeading level="h3">Final Outcome and Implementation</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        The Umbrella Parachute prototype advanced to our end-of-term Engineering Showcase, held this past Wednesday. At the Showcase, we presented our design opportunity, the engineering process leading to our final concept, and our proxy testing findings to judges and peers. This outcome was the result of a structured engineering process: the PIAA Model [11] grounded our requirements in real stakeholder observations, SCAMPER [12] broke our cognitive anchors to generate non-obvious concepts like the Umbrella Parachute, and Proxy Testing [13] provided the empirical evidence needed to justify our final recommendation. Together, these tools exemplify how structured problem framing, creative divergence, and rigorous convergence can yield engineering solutions tailored to real-world constraints.
      </p>

    </div>
  )
}
