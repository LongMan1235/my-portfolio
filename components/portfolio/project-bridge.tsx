'use client'

import { SectionHeading } from "./section-heading"
import { CTMFCard } from "./ctmf-card"

export function ProjectBridge() {
  return (
    <div className="space-y-6">
      <SectionHeading level="h2">
        Project 2: CIV102 Parametric Matboard Bridge Optimization
      </SectionHeading>

      <SectionHeading level="h3">Project Overview and Structural Constraints</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        The CIV102 Matboard Bridge Design Project required Team 606, consisting of myself, Rithik Sreekumar, Nathan Xia, and Daniel Ruffallo, to design, analyze, and construct a bridge using only 1.27 mm thick matboard and contact cement. While the materials were simple, the constraints imposed on the structure were deliberately strict to simulate real-world civil engineering limitations.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        The bridge was required to satisfy several geometric conditions:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
        <li>a maximum track elevation of 200 mm above the supports</li>
        <li>a minimum deck width of 100 mm to accommodate a moving vehicle</li>
        <li>a 60 mm flat resting surface on either side of the beam</li>
      </ul>

      <p className="text-muted-foreground leading-relaxed mt-4">
        In addition to geometric constraints, the structure had to withstand two primary loading cases:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
        <li>a 400 N moving load traversing the full span (Load Case 1)</li>
        <li>progressively increasing point loads until failure (Load Case 2)</li>
      </ul>

      <p className="text-muted-foreground leading-relaxed">
        The objective was not simply to build a bridge that could survive these loads, but to maximize the structural capacity-to-mass ratio. This introduced a key engineering tension: increasing strength without unnecessarily increasing material usage.
      </p>

      {/* Figure 3.0 - Final Bridge Photo */}
      <figure className="flex flex-col gap-2 my-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mkdDEkTtZv1mBdzWovOMw7XaQHEGX5.png"
          alt="Final double-webbed Pi-beam bridge structure made from matboard displayed on a construction table, showing the completed design with visible web diaphragms and the wooden support pattern underneath."
          className="w-full rounded-md border border-border object-cover"
        />
        <figcaption className="text-sm text-muted-foreground">
          <strong>Figure 3.0:</strong> The final matboard bridge structure, ready for load testing.
        </figcaption>
      </figure>

      <SectionHeading level="h3">The Baseline Failure and the Engineering Challenge</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        Our design process began with a baseline geometry, referred to as Design 0, which consisted of a standard U-shaped box girder.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        We performed a full analytical evaluation of this design, calculating:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
        <li>centroid location</li>
        <li>moment of inertia</li>
        <li>shear and bending behavior</li>
        <li>capacity across 10 distinct failure modes</li>
      </ul>

      <p className="text-muted-foreground leading-relaxed mt-4">
        This analysis immediately revealed a critical issue. Design 0 had a Factor of Safety (FOS) of <span className="text-primary font-semibold">0.616</span> against Case 1 Plate Buckling under Load Case 1. In practical terms, this meant the top flange would fail at approximately 60% of the required load.
      </p>

      <p className="text-muted-foreground leading-relaxed">
        Rather than treating this as a setback, we used it as a diagnostic result. This failure isolated the primary structural weakness: compression failure of the top flange due to insufficient support and poor geometric distribution of material. From this point forward, the problem was no longer {`"`}design a strong bridge,{`"`} but:
      </p>

      <p className="text-muted-foreground leading-relaxed font-semibold text-foreground">
        how do we prevent plate buckling in the top flange while maintaining material efficiency?
      </p>

      <p className="text-muted-foreground leading-relaxed">
        This reframing transformed the project into a parametric optimization problem, where geometry, not just material, would determine performance.
      </p>

      <SectionHeading level="h3">Application of Conceptual Thinking Meta-Frameworks (CTMFs)</SectionHeading>

      <p className="text-muted-foreground leading-relaxed">
        Unlike Project 1, which involved human behavior and system interaction, this project was governed almost entirely by rigid physical laws. As a result, the CTMFs applied here were heavily focused on representation and convergence, rather than open-ended divergence.
      </p>

      {/* Figure 3.1 - Hand calculations */}
      <figure className="flex flex-col gap-2 my-6">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-6UurKKpjG8YMuEfqxOvqS7FFx76u7Y.jpeg"
          alt="Two pages of handwritten CIV102 calculations showing flexural compression, tension, shear, glue shear, and buckling case calculations with FOS values."
          className="w-full rounded-md border border-border object-contain max-h-96"
        />
        <figcaption className="text-sm text-muted-foreground">
          <strong>Figure 3.1:</strong> Hand calculations for the final design iteration, covering all failure modes and FOS values.
        </figcaption>
      </figure>

      <div className="space-y-4 mt-6">
        <CTMFCard number={1} strand="Frame" title="Modeling: Reframing with Mathematical Failure Modes">
          <p>
            In this context, framing [2] extended beyond defining stakeholder needs. It required defining the mechanical limits of the material itself. Unlike the theft prevention project where framing involved understanding human behavior and facility constraints, this project demanded a precise mathematical characterization of how the structure would fail. The framing process was inherently quantitative from the outset.
          </p>

          <p>
            Rather than asking broad questions such as "what bridge design is strongest," we framed the problem in terms of specific failure modes [4]. By evaluating Design 0 across multiple failure cases, including flexural compression, shear failure, and local buckling, we identified Case 1 Plate Buckling as the governing constraint. This required calculating the Factor of Safety (FOS) for each potential failure mode and identifying which would occur first under load.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bridge%20Project%20FOS%20calcualtions%20for%20each%20type-stwpkQlqi8n00MnDV665b2KpkHQq1z.webp"
              alt="Spreadsheet showing FOS calculations for different bridge iterations including flange height, web width, base width, web height, stiffener gap, and lowest FOS values."
              className="w-full rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 3.3:</strong> Spreadsheet tracking FOS calculations across iterations, showing the parametric changes and their effects on structural performance.
            </figcaption>
          </figure>

          <p>
            The spreadsheet above documents our systematic approach to framing. For each design iteration, we tracked key geometric parameters: flange height, web width, base width, web height, stiffener gap, base height, flange width, total cross-sectional area, and the resulting lowest FOS. The "Lowest FOS" column was critical because it identified which failure mode governed each design and whether changes were moving us toward or away from our target performance.
          </p>

          <p>
            The initial Design 0 analysis revealed a FOS of only 0.284 for Case 2 (flexural compression) in one configuration, meaning the structure would fail at approximately 28% of the required load. This diagnostic result reframed the entire project: we were not designing a bridge from scratch, but systematically eliminating a specific structural weakness.
          </p>

          <p>
            This had two major implications:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><span className="font-semibold">The design space was immediately constrained:</span> any geometry that did not address top flange buckling was invalid, regardless of other potential benefits</li>
            <li><span className="font-semibold">Structural decisions became targeted:</span> instead of general strengthening, we focused specifically on reducing unsupported flange length and increasing resistance to compression</li>
          </ul>

          <p>
            This framing led us to discard entire categories of designs. Single-web and U-shaped configurations were eliminated, as they inherently provided insufficient support to the top flange. The single-web configuration had an unsupported flange span that was too wide, creating a buckling vulnerability that no amount of material addition could efficiently address.
          </p>

          <p>
            Instead, we converged toward a double-webbed Pi-beam configuration, which:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>increased the distance between the neutral axis and compressive fibers, improving moment of inertia</li>
            <li>reduced unsupported flange width by providing intermediate support points</li>
            <li>improved overall resistance to buckling through geometric redistribution of material</li>
            <li>allowed for more efficient diaphragm placement to prevent web buckling</li>
          </ul>

          <p>
            This was not an arbitrary design choice - it was a direct consequence of how the problem was framed. By defining the problem in terms of failure modes rather than abstract "strength," we created a framework where every geometric decision could be evaluated against specific, quantifiable criteria.
          </p>

          <p>
            This framing approach was effective because it replaced a vague objective ("maximize strength") with a targeted focus on the governing failure mode. By isolating plate buckling as the critical constraint, all subsequent design decisions became intentional and directly tied to improving performance. However, this also showed that if the wrong failure mode is identified, the entire optimization process can be misdirected despite being technically rigorous. We built in validation checkpoints by recalculating all failure modes after each major iteration to ensure our governing constraint had not shifted to a different failure mechanism.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Failure mode framing was highly effective for this structural optimization problem because it transformed a vague goal into measurable criteria. The limitation is that this approach assumes all failure modes can be accurately predicted beforehand. If an unexpected failure mechanism exists that wasn't modeled, the entire optimization could be misdirected despite rigorous analysis. This reinforced that analytical framing is only as good as the completeness of the underlying physics model.
          </p>
        </CTMFCard>

        <CTMFCard number={2} strand="Represent" title="Verification: Utilizing Programmatic Representation">
          <p>
            One of the most significant turning points in this project was the shift from manual calculation to programmatic representation [6]. This transition was not merely a convenience - it fundamentally altered the epistemology of our design process, changing how we generated knowledge about structural behavior and how that knowledge informed decisions.
          </p>

          <p>
            Initially, our workflow relied on static calculations. For every geometric modification, we recalculated all relevant parameters by hand: centroid location, moment of inertia, internal forces, moments, and failure capacities across all ten failure modes. This approach quickly became a bottleneck. Each iteration required approximately 45 minutes of calculation time, during which errors could compound and propagate. Iteration speed was limited, and exploring the design space efficiently became impractical.
          </p>

          <p>
            To address this, I led the transition toward algorithmic representation. We developed a Python-based system that automated the entire structural analysis pipeline:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>generated Shear Force Diagrams (SFD) across the full span for any train position</li>
            <li>generated Bending Moment Diagrams (BMD) with automatic envelope calculation</li>
            <li>calculated structural capacities for different geometries against all failure modes</li>
            <li>computed Factor of Safety for each failure mode automatically</li>
            <li>identified the governing (lowest) FOS and flagged the critical failure mechanism</li>
          </ul>

          <p>
            This fundamentally changed how we approached the problem. Instead of treating representation as a final verification step, it became an active design tool. We could now:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>modify parameters such as flange width, web spacing, or height in seconds</li>
            <li>instantly observe the impact on structural performance across all failure modes</li>
            <li>iterate rapidly without manual recalculation - reducing iteration time from 45 minutes to under 5 seconds</li>
            <li>explore "what-if" scenarios that would have been impractical with manual methods</li>
          </ul>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Python%20Max%20bending%20moment%20graph-vwPpbJOom5M3ZHFCPOT33IyaU91wi7.webp"
              alt="Python-generated plot showing Max Bending Capacity With Respect to Train Location For Load Case 1, comparing Final Iteration (250Nm max capacity), Design 0 (43Nm), and Actual Bending from Load Case 1."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 3.4:</strong> Python-generated bending capacity envelope showing the dramatic improvement from Design 0 (43Nm max capacity) to the final iteration (250Nm max capacity) compared to actual bending demands.
            </figcaption>
          </figure>

          {/* Keep the original shear force figure */}
          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f7fCQyYWrQhz3uCMgBaviW1n3YWeTr.png"
              alt="Python-generated plot showing Max Shear Force Capacity vs Train Location. Final iteration reaches 2090N max capacity compared to Design 0 at 687N."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 3.2:</strong> Python-generated shear force envelope showing the improvement from Design 0 (687N) to final iteration (2090N).
            </figcaption>
          </figure>

          <p>
            The graph above illustrates the power of programmatic representation. By plotting bending capacity against train location, we could visually confirm that our final design maintained a substantial safety margin across the entire span. The blue line (Final Iteration) shows a maximum bending capacity of 250Nm, compared to just 43Nm for Design 0 (orange line). The green line represents the actual bending moment from Load Case 1, demonstrating that our design maintains adequate capacity at every point along the bridge. The full design process, iteration documentation, and structural analysis are recorded in our project report [15].
          </p>

          <p>
            For example, adjusting the position of a web by a few millimeters could immediately be evaluated in terms of moment of inertia changes, stress distribution, and failure mode sensitivity. This eliminated guesswork entirely. Every design decision could be tested in real time. We could ask questions like "What happens if we increase flange width by 5mm but decrease web height by 3mm?" and receive a complete structural analysis within seconds.
          </p>

          <p>
            The programmatic approach also enabled sensitivity analysis - we could systematically vary each parameter and observe which changes had the greatest impact on performance. This revealed that flange width had a disproportionate effect on bending resistance, while web spacing primarily affected local buckling. These insights would have required dozens of manual calculations to discover.
          </p>

          <p>
            More importantly, this shift embodied a principle that has become central to my approach: <span className="font-semibold">representation should not follow ideation - it should evolve with it.</span> The Python model was not a static verification tool; it was a generative instrument that actively shaped our understanding of the design space and informed where to direct our optimization efforts.
          </p>

          <p>
            Transitioning to algorithmic representation fundamentally changed the design process by enabling rapid iteration and immediate feedback on structural performance. It removed ambiguity and allowed design decisions to be driven entirely by quantitative evidence rather than intuition. At the same time, it introduced a bias toward theoretical optimization, which contributed to under-prioritizing practical constraints such as fabrication time and build quality. The lesson here is that representation tools shape what we optimize for - and we must remain vigilant about what they exclude from consideration.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Algorithmic representation was transformative for this project, enabling rapid iteration that would have been impossible manually. The limitation was that it created an overconfidence in theoretical optimization while neglecting practical fabrication constraints. We optimized for computational perfection but ran out of time for careful construction. This taught me that representation tools can create blind spots - they amplify what they measure (structural performance) while hiding what they don't (buildability, time constraints, human fatigue).
          </p>
        </CTMFCard>

        <CTMFCard number={3} strand="Converge" title="Toulmin's Structure of Argument and Analytical Claims">
          <p>
            With a programmatic system in place, convergence became a process of structured argumentation rather than intuition [14]. The danger at this stage was that the ease of iteration could lead to aimless exploration - changing parameters without clear reasoning or direction. To prevent this, we applied Toulmin's Structure of Argument [14] to formalize every design decision.
          </p>

          <p>
            Toulmin's model requires each argument to consist of:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>a <span className="font-semibold">Claim</span> (what change we are making and why)</li>
            <li><span className="font-semibold">Grounds</span> (quantitative evidence from our model supporting the claim)</li>
            <li><span className="font-semibold">Warrant</span> (the engineering principle that connects the grounds to the claim)</li>
            <li><span className="font-semibold">Backing</span> (the theoretical foundation for the warrant)</li>
          </ul>
          <p>
            This ensured that every step in the optimization process was justified and traceable. We documented each iteration following this structure, creating a complete audit trail of our design evolution.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Iteration%20Toulmins%20Model-YG1DRVAV1IcJPpfyGpY3IUzJ3IiNxD.webp"
              alt="Documentation showing iterations 1 to 4 with detailed changes, explanations of why each change helps, and the effect on lowest FOS and cross-sectional area."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 3.5:</strong> Iteration documentation (1 through 4) following Toulmin's structure, showing changes, rationale, and quantitative results.
            </figcaption>
          </figure>

          <p>
            The figure above shows our early iterations documented using this framework. Each iteration includes three components: the specific change made, why it helps (the warrant), and the effect on the lowest FOS and cross-sectional area.
          </p>

          <p className="mt-4 font-semibold text-foreground">Iteration 1 to 2: Initial Flange Optimization</p>
          <p>
            <span className="font-semibold">Change:</span> Flange width increased from 135 mm to 140 mm, and dropped web height from 140 mm to 135 mm.
          </p>
          <p>
            <span className="font-semibold">Why this helps:</span> Increasing the flange width increases the cross-sectional area of the flange and importantly increases the section modulus and second moment of area, I, for bending. That lowers flexural stresses for the same moment.
          </p>
          <p>
            <span className="font-semibold">Effect of lowest FOS:</span> FOS increased from 3.05 to 3.23. The FOS jump is consistent with reduced peak flexural/compressive stresses due to larger flange width. Area (weight) decreased slightly because the web height reduced and traded geometry for a lighter overall cross section.
          </p>

          <p className="mt-4 font-semibold text-foreground">Iteration 2 to 3: Web Gap Optimization</p>
          <p>
            <span className="font-semibold">Change:</span> Flange width increased from 140 mm to 145 mm, diaphragm gap increased from 350 mm to 360 mm, and web gap decreased from 120 mm to 100 mm.
          </p>
          <p>
            <span className="font-semibold">Why this helps:</span> Increasing the flange width again increases section modulus and moment of inertia, improving bending resistance. Reducing the web gap shortens the unsupported web panel area, which reduces the local buckling risk.
          </p>
          <p>
            <span className="font-semibold">Effect of lowest FOS:</span> FOS increased from 3.23 to 3.293. The increase reflects lower flexural and local buckling stress. However, the area dropped a large amount, from 833,300mm² to 809,350 mm², meaning material was reduced while improving safety.
          </p>

          <figure className="flex flex-col items-center gap-2 my-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Final%20iteration%20also%20be%20used%20for%20toulmin-wZnRguke6ZRriJ7zJFlyTW1TGYvlXd.webp"
              alt="Documentation showing iterations 5 to 6 and 6 to Final with detailed changes including flange width increases, web height and gap adjustments, and stiffener spacing optimization."
              className="w-full max-w-xl rounded-md border border-border bg-white object-contain"
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 3.6:</strong> Final iterations (5 to Final) documenting the flange width increases, web gap optimization, and dynamic stiffener spacing decisions.
            </figcaption>
          </figure>

          <p className="mt-4 font-semibold text-foreground">Iteration 5 to 6: Critical Breakthrough</p>
          <p>
            <span className="font-semibold">Change:</span> Flange width increased from 145 mm to 150 mm, web height dropped from 133.5 mm to 130 mm, and web gap decreased from 100 mm to 80 mm.
          </p>
          <p>
            <span className="font-semibold">Why this helps:</span> Increasing flange width significantly boosts section modulus, which reduces flexural stress. Reducing the web gap improved case 1 buckling resistance by shortening the unsupported lengths of the web. The web height reduction creates optimal stress distribution and maintains high stiffness.
          </p>
          <p>
            <span className="font-semibold">Effect of lowest FOS:</span> FOS increased from 3.366 to 3.437. Area decreased from 816,400 mm² to 806,100 mm², providing a safer and lighter cross section.
          </p>

          <p className="mt-4 font-semibold text-foreground">Final Convergence: Dynamic Diaphragm Spacing</p>
          <p>
            <span className="font-semibold">Change:</span> Flange width increased from 150 mm to 155 mm, and stiffener spacing was varied (200 mm at edges, 400 mm at mid-span) while maintaining web gap near 100 mm.
          </p>
          <p>
            <span className="font-semibold">Why this helps:</span> The wider flange once again increases section modulus, while the renewed diaphragm spacing improves the efficiency, and tighter spacing near high bending moment regions reduces local buckling risk, while wider spacing in the middle saves weight.
          </p>
          <p>
            <span className="font-semibold">Effect of lowest FOS:</span> FOS increased from 3.437 to 4.00, at a small cost of increase of area from 806,100 mm² to 811,300 mm², highlighting the sensitive dependency between strength and effectiveness of area used.
          </p>

          <p>
            This final decision - implementing variable diaphragm spacing - represents a key aspect of engineering optimization: <span className="font-semibold">material should be placed where it contributes most to performance.</span> Rather than treating the structure as uniform, we recognized that different regions experience different stress states and should be reinforced accordingly.
          </p>

          <p>
            The final bridge design - a double-webbed Pi-beam with optimized diaphragm spacing - achieved a Factor of Safety of <span className="text-primary font-semibold">4.00</span> for flexural compression, a substantial improvement over the initial design's 0.616 FOS. This represents a 6.5x improvement in structural safety while maintaining efficient material usage.
          </p>

          <p>
            Applying Toulmin's structure enforced disciplined convergence by requiring every design change to be explicitly justified with computational evidence. This made the decision-making process transparent and prevented arbitrary or assumption-based modifications. However, its effectiveness was dependent on the accuracy of the underlying models, meaning that strong logical structure could still produce flawed conclusions if the data itself was incomplete or incorrect. The key lesson was that rigorous argumentation must be paired with validated computational tools - one without the other is insufficient.
          </p>

          <p className="mt-4 text-sm border-l-2 border-primary pl-4 italic">
            <span className="text-foreground not-italic font-semibold">Reflection on Utility:</span> Toulmin's argumentation structure prevented aimless parameter tweaking and forced every design change to be justified. The limitation is that it assumes the evidence being used (in this case, computational models) is accurate and complete. If the underlying physics model had errors or omitted failure modes, the rigorous logical structure would still lead to incorrect conclusions. This reinforced that formal reasoning frameworks are only as reliable as the data they process - structured thinking cannot compensate for flawed inputs.
          </p>
        </CTMFCard>
      </div>

      <SectionHeading level="h3">Critical Assessment and Reflection</SectionHeading>

      <div className="bg-secondary/30 border border-border rounded-lg p-6 mt-4">
        <p className="text-muted-foreground leading-relaxed">
          While the technical outcome of this project was strong, reflecting on the process revealed a critical limitation in our approach. The CTMFs we relied on - particularly algorithmic representation and structured argumentation - assume that the transition from theoretical design to physical implementation is seamless. In practice, this assumption was incorrect.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Our team became heavily focused on optimizing the design computationally. We spent significant time refining the Python model and pursuing marginal gains in structural efficiency. As a result, we delayed physical construction until the night before the deadline. We worked from 7:00 PM to 9:00 AM under fatigue. Contact cement was applied inconsistently, matboard components warped during assembly, and overall build quality was compromised.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          This exposed a fundamental flaw in our methodology: <span className="font-semibold">a design that is analytically optimal is still dependent on the conditions under which it is built.</span> No amount of computational accuracy can compensate for poor execution due to time constraints or human fatigue.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Moving forward, I will treat manufacturing time and conditions as core design constraints, not secondary considerations. Engineering does not end at analysis. The physical artifact must reflect the same level of precision as the model that defines it.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-2 hover:border-primary/30"
        >
          ↑ Back to top
        </button>
      </div>
    </div>
  )
}
