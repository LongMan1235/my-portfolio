'use client'

import { SectionHeading } from './section-heading'
import { CTMFCard } from './ctmf-card'

export function ProjectTheft() {
  return (
    <div className="space-y-6">
      <SectionHeading level="h2">
        Project 1 - Praxis I: Targeted Theft Prevention in Recreational Spaces
      </SectionHeading>

      <SectionHeading level="h3">Project Overview and the Working Environment</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        The <strong>Chestnut Residence gym</strong> is a <strong>high-traffic recreational space</strong> used by University of Toronto students. Before any intervention, the facility was <strong>consistently losing equipment due to unauthorized removal</strong>. The problem we were initially given was broad: <strong>“prevent the theft of gym equipment.”</strong>
      </p>

      <p className="text-muted-foreground leading-relaxed">
        At first, this seems like a <strong>straightforward engineering challenge</strong>. But once we actually analyzed the environment, it became clear that the <strong>problem was not properly defined</strong>.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The gym contains a <strong>wide range of equipment</strong>, from large, fixed cable machines to <strong>small, easily portable items</strong> like 5 lb plates and jump ropes. Trying to design a <strong>single solution for all cases</strong> quickly pushed us toward <strong>administrative fixes</strong> like adding staff, implementing sign-out systems, or increasing surveillance.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        While these approaches may reduce theft, they <strong>do not constitute strong engineering solutions</strong>. They <strong>depend on human compliance</strong>, introduce <strong>ongoing operational costs</strong>, and <strong>fail to engage with the physical system</strong> we are designing for.
      </p>

      <SectionHeading level="h3">Scoping the Engineering Challenge</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        To transition from an administrative problem to a valid engineering challenge, we conducted a detailed scoping analysis focused on usage patterns and theft frequency. Through this process, we identified a clear target: cast-iron dumbbells within the 10-75 lb range were the most frequently stolen items.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        By isolating a specific object class, we transformed the problem from a vague objective into a well-defined engineering scenario. Instead of addressing "gym security" as a whole, we were now analyzing the unauthorized spatial displacement of dense, ferromagnetic objects with consistent geometry.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We combined direct observation of the design space with floor plan analysis to rescope the challenge in a more manageable way. Site visits revealed the spatial relationship between the dumbbell rack and the exit, while the floor plan allowed us to identify specific intervention points. This combination of qualitative observation and spatial mapping was essential for understanding the physical constraints of the problem.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 my-6">
        <figure className="flex flex-col gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LuLZSn45ahxAf3kAuNsI0M8BxmEYxH.png"
            alt="Entrance to Chestnut gym showing frosted glass door with EXIT sign."
            className="w-full rounded-md border border-border object-cover aspect-[3/4]"
          />
          <figcaption className="text-sm text-muted-foreground">
            <strong>Figure 2.1a:</strong> The gym entrance and exit door.
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XBiATHn9dBStxQUBiN16errT0pel6Q.png"
            alt="Interior view of Chestnut gym showing dumbbell rack and equipment."
            className="w-full rounded-md border border-border object-cover aspect-[3/4]"
          />
          <figcaption className="text-sm text-muted-foreground">
            <strong>Figure 2.1b:</strong> The dumbbell rack placement relative to the exit.
          </figcaption>
        </figure>
      </div>

      <figure className="flex flex-col items-center gap-2 my-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y79ukMZHm8vuCQmSGa0SNaor93AoWV.png"
          alt="Floor plan of Chestnut Residence Gym with legend indicating door and dumbbell rack as modification areas."
          className="w-full max-w-2xl rounded-md border border-border bg-white object-contain"
        />
        <figcaption className="text-sm text-muted-foreground text-center">
          <strong>Figure 2.2:</strong> Rescoped floor plan of Chestnut Residence Gym showing design intervention points.
        </figcaption>
      </figure>

      <SectionHeading level="h3">Establishing Engineering Parameters (NGOS)</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        With a clearly scoped problem, the next step was to translate the general goal of &quot;preventing theft&quot; into a set of measurable engineering requirements through Needs, Goals, Objectives, and Specifications (NGOS). The full NGOS framework and design opportunity are documented in our Design Brief [16].
      </p>

      <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed ml-4 mt-4">
        <li>
          <span className="font-semibold text-foreground">Functional Integrity:</span> The dumbbell must remain fully usable with less than 0.6 lbs additional mass and less than 4.65 Nm of torque about the grip axis.
        </li>
        <li>
          <span className="font-semibold text-foreground">Durability:</span> The system must survive 500 drops from 500 mm and withstand over 100,000 usage cycles.
        </li>
        <li>
          <span className="font-semibold text-foreground">Reliability:</span> Achieve a success rate of at least 95% with activation within 2 minutes of a theft event.
        </li>
      </ol>

      <SectionHeading level="h3">Conceptual Thinking Meta-Frameworks (CTMFs)</SectionHeading>

      <div className="space-y-6 mt-6">
        <CTMFCard number={1} strand="Frame" title="Scoping and the Reframing of NGOS">
          <p>
            As noted in my design position, early attempts to frame the theft issue comprehensively resulted in administrative, non-engineering solutions (e.g., hiring guards). I utilized <span className="font-semibold text-foreground">Scoping</span> [8] to deliberately shrink the problem boundary. By isolating 10-75 lb cast-iron dumbbells, we created a static geometric and material profile that allowed for specific mechanical interventions.
          </p>

          <p>
            The scoping process began with a comprehensive analysis of the Chestnut Residence gym environment. We mapped the physical layout, identifying the spatial relationship between equipment storage areas and the single exit point. This analysis revealed that the gym's architectural configuration, with dumbbells positioned within 3 meters of an unsupervised exit, created an inherent vulnerability that no amount of signage or policy enforcement could eliminate. The floor plan below illustrates the specific areas we designated as open to modification, including the door mechanism, the dumbbell rack itself, and certain floor regions where sensors could be embedded.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scope-otPmlpoJMmKFwe5MZLiE2jtToZxBBl.webp"
              alt="Gym layout diagram showing scope definition with legend indicating door, dumbbell rack, floor tiles open to modification, and pillar locations."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 2.3:</strong> Detailed scope diagram showing the Chestnut gym layout and areas open to modification.
            </figcaption>
          </figure>

          <p>
            This visual scoping exercise was instrumental in communicating constraints to the entire team. By explicitly marking which elements could and could not be modified, we prevented scope creep and ensured all generated concepts would respect the physical boundaries of the working environment. The decision to focus specifically on dumbbells in the 10-75 lb range (in 5 lb increments) emerged from theft frequency data provided by residence staff, which indicated these mid-range weights were disproportionately targeted.
          </p>

          <p>
            Furthermore, we rigorously applied <span className="font-semibold text-foreground">Problem and Needs Definition</span> [4] to our NGOS. During our Alpha Release preparation [5], I advocated for a critical reframing of our success metrics. Initially, our objective was "Accuracy," measuring the percentage of thefts detected. However, a critical assessment revealed that for a de-incentivizing solution (making the weight useless outside the gym), detection accuracy is irrelevant if the mechanism fails to deploy.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scope%202-NPzkgIMeQIw0Gcw4mX4lZtmcNMDwgz.webp"
              alt="Notes discussing the pivot from accuracy to reliability as the primary success metric."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 2.4:</strong> Working notes documenting the rationale for pivoting from "Accuracy" to "Reliability" as our primary metric.
            </figcaption>
          </figure>

          <p>
            The distinction between accuracy and reliability became a pivotal discussion point. As documented in our working notes, we recognized that percentage-based theft detection metrics do not make sense for de-incentivizing solutions. The question shifted from "How often do we detect theft?" to "How reliably does the mechanism activate when needed?" For the RFID-based solution we initially considered, the accuracy of theft detection was almost 100% when the system functioned correctly, but the variable was whether the system would work at all. This insight led us to reframe our primary metric around mechanical reliability rather than detection accuracy.
          </p>

          <p>
            I drove the pivot from "Accuracy" to "Reliability," establishing a rigid metric: <span className="text-primary font-semibold">The system shall have a mechanical deployment success rate of at least 95%</span>. This specific framing immediately disqualified complex, software-heavy tracking systems in favor of robust, localized electro-mechanical triggers. The 95% threshold was not arbitrary. It was derived from the expected usage frequency (approximately 500 uses per week across all dumbbells) and an acceptable failure rate that would still provide effective deterrence.
          </p>

          <p>
            This framing step was what made the problem tractable from an engineering perspective rather than defaulting to administrative solutions. By narrowing the scope to a specific object class and redefining success in terms of reliability instead of accuracy, the design space became both constrained and actionable. However, this also reinforced that framing decisions are high-risk - if NGOS are defined incorrectly at this stage, they can systematically eliminate otherwise viable solutions. The consequence of this insight was that we built in explicit review checkpoints throughout the design process to revisit and validate our initial framing assumptions against emerging evidence.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Scoping and NGOS reframing proved essential for this project, transforming an impossibly broad administrative problem into a solvable engineering challenge. The limitation was that aggressive scoping necessarily excludes potential solutions - by focusing only on 10-75 lb dumbbells, we ignored theft of smaller equipment, resistance bands, and other items. This shows that scoping always involves trade-offs: gain tractability at the cost of comprehensiveness. I learned that the scope boundary should be drawn where engineering solutions become viable, not where the problem naturally ends.
          </p>
        </CTMFCard>

        <CTMFCard number={2} strand="Diverge" title="Reverse Brainstorming and the Random Noun Method">
          <p>
            To generate high-yield mechanical concepts, we needed to bypass our initial cognitive anchors [7]. We deployed two highly structured diverging tools with significant success. The challenge we faced was that our team - comprised primarily of engineering students - naturally gravitated toward surveillance-based solutions: cameras, RFID tracking, check-in/check-out systems. These were the "obvious" answers, but they were also administratively dependent and failed to engage with the physical system we were designing for.
          </p>

          <p>
            First, we utilized <span className="font-semibold text-foreground">Reverse Brainstorming</span> [7]. Instead of asking how to prevent theft, we asked: "How can we cause or encourage the theft of weights?" This inversion was incredibly useful; it bypassed standard security biases and illuminated the intrinsic vulnerabilities of the working environment. The session was structured around five key prompts, as documented in our working notes.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reverse%20Brainstorming-LLA4gFHqmZ7KIvqLc5JwPzFxkjdbhn.webp"
              alt="Google Doc showing reverse brainstorming session with sections for Reversing the Problem, Ways of Causing the Problem, Other Ways of Causing the Problem, Preventing the Problem Being Caused, and Preventing Causes More Robustly."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 2.5:</strong> Reverse brainstorming session documentation showing the structured inversion of the theft prevention problem.
            </figcaption>
          </figure>

          <p>
            The reverse brainstorming process began with the inverted question: "How can we cause theft of weights from the Chestnut gym?" The purpose was to identify what enables theft and then flip those causes to find prevention ideas. We systematically documented ways of causing the problem - leaving gym doors unlocked, no staff monitoring, poor lighting, weights being small and portable, no ID tags, racks located close to exits, and no inventory tracking. From this analysis, we derived corresponding prevention measures: lock doors after hours with keycard access, add cameras and sensors, tag all weights with RFID, position racks away from exits, and conduct regular inventory checks.
          </p>

          <p>
            The most valuable insight emerged from the "Preventing Causes More Robustly" section, where we brainstormed engineering solutions rather than administrative ones. This included smart rack systems with load cells to detect missing weights, RFID per-weight tracking, physical cable systems with retractable cords, and automated alerts. We identified that the proximity of the racks to the exit and the lack of physical "obsolescence" were the primary enablers. The weights retained full functionality regardless of where they were taken.
          </p>

          <p>
            To generate the physical mechanisms to address these vulnerabilities, we employed the <span className="font-semibold text-foreground">Random Noun Method</span> [7]. This tool proved exceptionally valuable in forcing lateral engineering connections. We generated a list of 20 random nouns and systematically attempted to connect each to potential design mechanisms:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
            <li>The random noun <span className="text-primary">&quot;Spider&quot;</span> forced us to consider multi-legged geometry, directly leading to the concept of spring-loaded &quot;spokes&quot; ejecting from the dumbbell handle. The spider&apos;s radial leg structure translated directly into a mechanical deployment pattern.</li>
            <li>The random noun <span className="text-primary">"Magnet"</span> transitioned our focus from standard locks to electromagnetic detection, culminating in the idea of utilizing the dumbbell's own iron mass to trigger a Hall effect sensor at the door. This was significant because it required no modification to the dumbbell itself for detection - only for the actuation response.</li>
            <li>The random noun <span className="text-primary">"Porcupine"</span> reinforced the spoke concept, suggesting that the deployed mechanism should make the object actively unpleasant or impossible to grip, not merely alarmed.</li>
            <li>The random noun <span className="text-primary">"Measuring Tape"</span> generated the ratcheting cable concept - a retractable tether that allows normal use within the gym but prevents removal beyond a certain radius.</li>
          </ul>

          <p>
            These divergence tools were effective because they forced the team to move beyond conventional security thinking and directly engage with how the system fails. Reverse brainstorming exposed real environmental vulnerabilities, while the random noun method introduced non-obvious mechanical concepts that would not have emerged through linear ideation. At the same time, their usefulness depended on strong convergence afterward, since many generated ideas were only partially viable or required extraction of specific components.
          </p>

          <p>
            The combination of these two methods generated over 30 distinct mechanical concepts within a single 2-hour session. Many were impractical (e.g., a "smoke bomb" that activates when the weight leaves the gym), but several contained extractable mechanisms that informed our final designs. The discipline of documenting every idea, regardless of initial feasibility assessment, proved critical - the spoke mechanism emerged from an idea that was initially dismissed as "too aggressive."
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Unlike in Project 3 (MSSAC Swimming) where Reverse Brainstorming failed because the fluid dynamics of water cannot be &quot;reversed,&quot; it was the single most effective diverging tool for this security project. It proved that human-centric systems (like theft) are highly susceptible to inversion analysis, whereas purely physical/environmental systems are not. This insight has shaped my approach to selecting divergence tools: I now assess whether the problem domain involves reversible human behaviors or fixed physical constraints before choosing my methodology.
          </p>
        </CTMFCard>

        <CTMFCard number={3} strand="Converge" title="Concept Clustering and Morphological Analysis">
          <p>
            Having generated over 50 mechanical concepts - ranging from invisible ink to ratcheting cables - we faced severe cognitive overload. We could not evaluate 50 ideas simultaneously against our NGOS [4]. The divergence phase had been successful in breaking cognitive anchors, but it created a new problem: decision paralysis. Every team member had favorite concepts, and without a systematic approach to convergence, we risked falling back on subjective preferences rather than evidence-based selection.
          </p>

          <p>
            To manage this, we applied <span className="font-semibold text-foreground">Concept Clustering</span> [9]. I helped categorize the raw data into four distinct operational paradigms, each representing a fundamentally different approach to addressing theft:
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paradigm%20Sorting-sbAQ0JERGUusv7oqixf7dmrOFtDNZV.webp"
              alt="Google Doc showing paradigm sorting with categories: Delayed Detection, Active Detection, Prevention, and De-incentivization, along with a shortlist of specific concepts including RFID, Magnetic sensor, Ratcheting cable, and Spokes."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 2.6:</strong> Paradigm sorting documentation showing the four operational categories and the shortlisted concepts within each.
            </figcaption>
          </figure>

          <p>
            The four paradigms were defined as follows:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-3 mt-3">
            <li>
              <span className="text-primary font-semibold">Delayed Detection:</span> Detects if the weight is not put back for a certain amount of time. Example: a smart weight rack that alerts staff if a dumbbell has been missing for more than 30 minutes.
            </li>
            <li>
              <span className="text-primary font-semibold">Active Detection:</span> Detects if a weight is stolen immediately. Example: an RFID sensor at the door that triggers an alarm when an unauthorized weight passes through.
            </li>
            <li>
              <span className="text-primary font-semibold">Prevention:</span> Prevents the weight from being stolen in the first place. Example: a retractable cable system that physically tethers weights to the rack.
            </li>
            <li>
              <span className="text-primary font-semibold">De-incentivization/Obsolescence:</span> Makes the weight useless outside of the gym. Example: spokes that extend from the weight when removed, making it impossible to grip or use.
            </li>
          </ul>

          <p>
            This macro-level convergence was vital. By evaluating the paradigms rather than individual ideas, we quickly determined that "Delayed Detection" (e.g., a smart rack that alerts staff 2 hours after a weight goes missing) failed our 2-minute activation requirement and was entirely discarded. This single paradigm-level decision eliminated approximately 15 individual concepts from consideration, dramatically reducing our decision space.
          </p>

          <p>
            From the surviving paradigms, we developed a shortlist of the most promising concepts, as documented in our working notes. The shortlist included:
          </p>

          <ol className="list-decimal list-inside ml-4 space-y-2 mt-3">
            <li><span className="font-semibold">RFID on weight + door:</span> Detects if weight is moved past door threshold.</li>
            <li><span className="font-semibold">Magnetic sensor:</span> Magnet on door, Hall effect sensor on weight. Detects amplified magnetic field when weight approaches exit.</li>
            <li><span className="font-semibold">Ratcheting cable:</span> Low-stiffness cable that can be extended for use but retracts like a measuring tape after use.</li>
            <li><span className="font-semibold">Spokes:</span> Spokes extend from weight when removed for too long or when it passes the door sensor, making it impossible to grip.</li>
            <li><span className="font-semibold">Floor scale + TCard scanning:</span> Measures weight differential when users scan their TCard to exit/enter.</li>
          </ol>

          <p>
            Finally, we utilized <span className="font-semibold text-foreground">Morphological Analysis</span> [10] (Morph Charts) to synthesize our final designs within the surviving paradigms. We decomposed the theft prevention system into distinct sub-functions: <span className="text-primary">Sensor Modality</span> (RFID, Magnetic, Weight Differential) and <span className="text-primary">Actuation Method</span> (Door Lock, Cable Lock, Spoke Deployment, Alarm Only).
          </p>

          <p>
            The Morph Chart created a 3x4 matrix of possible combinations. We systematically evaluated each cell against our NGOS, assigning scores for reliability, durability, cost, and user experience impact. We discovered that pairing an RFID sensor with Spoke Deployment was sub-optimal due to the durability issues of embedding RFID chips in heavy iron (which sustains up to 500 drops in its lifecycle). The repeated impacts would destroy delicate electronics within weeks of deployment.
          </p>

          <p>
            However, pairing a <span className="text-primary font-semibold">Magnetic Sensor</span> (which requires no delicate internal electronics in the dumbbell - only a simple ferromagnetic mass that the dumbbell already possesses) with <span className="text-primary font-semibold">Spoke Deployment</span> satisfied all durability and reliability NGOS perfectly. The magnetic detection leverages the dumbbell's existing cast-iron construction, while the spring-loaded spoke mechanism can be designed with heavy-duty springs rated for thousands of deployment cycles.
          </p>

          <p>
            This structured convergence directly yielded our final Alpha design recommendation. The process took approximately 6 hours of focused team work, but it ensured that our final selection was defensible against any stakeholder scrutiny. Every design decision could be traced back to a specific NGOS requirement and a documented evaluation process.
          </p>

          <p>
            This convergence approach was critical in managing the scale of ideas and transitioning from abstraction to structured design. Paradigm clustering reduced cognitive overload by filtering entire categories, while morphological analysis ensured that final concepts were systematically constructed rather than arbitrarily selected. However, this also highlighted that convergence tools must be layered - high-level filtering alone is insufficient without detailed synthesis and validation. The lesson I carried forward was that convergence is not a single step but a progressive narrowing process, with each stage requiring its own appropriate methodology.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Paradigm clustering and morphological analysis were essential for managing over 50 concepts without falling into decision paralysis or subjective preferences. The limitation is that paradigm boundaries must be defined correctly - if categories overlap or are poorly defined, valid concepts can be prematurely eliminated. This taught me that convergence requires multiple layers of filtering (macro to micro) and that the quality of convergence depends heavily on how well the initial categorization captures fundamental differences between approaches.
          </p>
        </CTMFCard>
      </div>

      <SectionHeading level="h3">Final Design: Magnetic Obsolescence Mechanism</SectionHeading>

      <figure className="flex flex-col gap-2 my-6">
        <img
          src="/my-portfolio/89FCF258-6844-4575-BB96-A2937D0F6E91.jpg"
          alt="3D CAD model of the Magnetic Obsolescence Mechanism showing 6 spring-loaded spokes with a central hub and trigger mechanism."
          className="w-full max-w-xl mx-auto rounded-md border border-border bg-white object-contain"
        />
        <figcaption className="text-sm text-muted-foreground text-center">
          <strong>Figure 2.3:</strong> CAD model of the final "Spokes" mechanism by Perry Xu. The 6-spoke radial deployment renders the dumbbell ungrippable when triggered by the magnetic threshold sensor at the exit.
        </figcaption>
      </figure>

      <p className="text-muted-foreground leading-relaxed">
        The final recommended design integrates a Hall effect magnetic sensor at the gym exit threshold with a spring-loaded spoke deployment mechanism embedded in the dumbbell handle. When a dumbbell passes through the doorway without proper authorization, the sensor triggers an electromagnetic release that allows the compressed springs to deploy six radial spokes, rendering the object impossible to grip and therefore useless outside the gym environment.
      </p>

      <SectionHeading level="h3">Final Outcome and Implementation</SectionHeading>
      <p className="text-muted-foreground leading-relaxed">
        The Magnetic Obsolescence Mechanism advanced to our end-of-term Engineering Showcase, held this past Wednesday, where we presented our design opportunity, engineering process, and final concept to judges and peers. At this stage, the design remains at the Alpha release level. Our recommended next step is further testing to validate the feasibility of the spoke deployment mechanism and confirm compatibility with the gym environment and dumbbell design space. This outcome was the result of a structured engineering process: Scoping and NGOS reframing [8] defined a tractable problem, Concept Clustering [9] and Morphological Analysis [10] systematically converged our solution space, and Toulmin&apos;s Structure of Argument [14] ensured every design decision remained defensible and traceable.
      </p>

      <div className="flex justify-center pt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-2 hover:border-primary/30"
        >
          ↑ Back to top
        </button>
      </div>
    </div>
  )
}
