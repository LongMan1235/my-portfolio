'use client'

import { SectionHeading } from "./section-heading"

export function PositionStatement() {
  return (
    <div className="space-y-8">
        {/* Hero Section with Showcase Photo */}
        <div id="about" className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/10 shadow-lg animate-fade-in">
          <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="animate-fade-in-left delay-200">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                    Rithik Sreekumar
                  </h1>
                  <p className="text-xl text-primary font-semibold mb-2">Engineering Science Student</p>
                  <p className="text-muted-foreground font-medium">University of Toronto</p>
                </div>
                <div className="h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent animate-scale-in delay-300"></div>
                <p className="text-muted-foreground leading-relaxed text-lg animate-fade-in delay-400">
                  First-year Engineering Science student passionate about translating complex stakeholder needs into verifiable, efficient engineering solutions. This portfolio documents my design journey through ESC102 Praxis II, showcasing projects in theft prevention systems, structural optimization, and aquatic training equipment.
                </p>
              </div>
              <div className="order-1 lg:order-2 animate-scale-in delay-200">
                <figure className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-xl border-2 border-border shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-su22Wd8Ywk2RNaVkUXpyUemEwJl74K.png"
                      alt="Rithik Sreekumar and team presenting VORTEQ project at design showcase"
                      className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <figcaption className="text-sm text-muted-foreground text-center">
                    <strong>Figure 1.0:</strong> VORTEQ team presenting Variable Output Resistance Training Equipment at the Praxis II Design Showcase.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>

        {/* Statement Section */}
        <div id="statement" className="relative rounded-xl border border-border bg-gradient-to-br from-card via-secondary/5 to-card p-8 md:p-10 shadow-sm animate-slide-up delay-100">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary rounded-l-xl"></div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Statement of Engineering Design Position
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-6">
              Engineering design, to me, is the disciplined translation of stakeholder needs into systems that are not only functional, but verifiable, efficient, and defensible. It is not just the application of mathematics or technical knowledge. More importantly, it is the structured management of constraints, ambiguity, and human decision-making to ensure that the problem being solved is both correctly defined and meaningfully addressed.
            </p>
            
            <figure className="flex flex-col gap-3 mt-8">
              <div className="overflow-hidden rounded-lg border border-border shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-C5Z2IJPxNucQhmXGDSxOxuB7E0ID6G.jpeg"
                  alt="Engineering design team presenting at beta release with poster board showcasing the Variable Resistance Swim Equipment project."
                  className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <figcaption className="text-sm text-muted-foreground text-center">
                <strong>Figure 1.1:</strong> Design team presenting Variable Resistance Swim Equipment at beta release.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Core Principles */}
        <section id="principles" className="space-y-6 animate-slide-up delay-200">
          <SectionHeading level="h3">Core Principles</SectionHeading>
          <p className="text-muted-foreground leading-relaxed text-lg">
            My design position is grounded in three consistent principles:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 space-y-3 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">Rigorous Framing</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Problems must be rigorously framed before solutions are explored
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 space-y-3 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">Evidence Over Hierarchy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Team dynamics must prioritize validity over hierarchy
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 space-y-3 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">Early Representation</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ideas must be forced into representation early to ensure they are testable
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Without these, engineering work tends to drift toward assumptions, weak justification, and ultimately, ineffective solutions.
          </p>
        </section>

        {/* Team Dynamics */}
        <section id="team-dynamics" className="space-y-4 animate-slide-up">
          <SectionHeading level="h3">Team Dynamics and Democratic Engineering Consensus</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            The effectiveness of an engineering outcome is directly tied to how well a team is able to challenge itself. Research on effective teams, particularly the Comprehensive Assessment of Team Member Effectiveness (CATME) framework, emphasizes that peer evaluations are valuable precisely because &quot;peers frequently see performance and behavior that others do not&quot; [1]. This insight reinforces my belief that all team members must be empowered to evaluate and challenge ideas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In previous leadership experiences, such as drafting governance structures or participating in institutional decision-making, I worked within environments that relied on hierarchical authority. In those contexts, efficiency depended on having a clear decision-maker who could act quickly and move processes forward.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Engineering design operates differently. Authority does not validate a design. Evidence does.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Because of this, I approach engineering teams as deliberately non-hierarchical systems where ideas are subjected to continuous scrutiny regardless of their source. The CATME research identifies five key categories of effective team member contributions: contributing to the team's work, interacting with teammates, keeping the team on track, expecting quality, and having relevant knowledge, skills, and abilities [1]. My role in these environments involves applying structured pressure to ideas early through:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li>isolating assumptions within a proposal</li>
            <li>testing logical consistency</li>
            <li>identifying potential failure modes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            At the same time, I actively work to prevent discussions from becoming dominated by a small subset of voices. In practice, I have observed that individuals who contribute less frequently often possess highly specific technical insights. A brief comment, such as a reference to a physical mechanism or mathematical relationship, can become the basis for a more refined solution. Ensuring that these inputs are surfaced is essential to maintaining a complete design space.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ultimately, I view team dynamics as a system where ideas must earn their place through resistance, not through consensus or authority.
          </p>
        </section>

        {/* Rigorous Framing */}
        <section id="rigorous-framing" className="space-y-4 animate-slide-up">
          <SectionHeading level="h3">Rigorous Framing: Defining the Engineering Parameters</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            One of the most critical insights I have developed is that poorly defined problems consistently lead to low-quality solutions. As emphasized in the framing lecture, &quot;framing defines how we are looking at a Splartz—what perspective (or stakeholder orientation) we are taking in defining the opportunity&quot; [2]. This understanding that our values, experiences, and unconscious biases affect what we perceive shapes my deliberate approach to problem definition.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Initial design prompts are often broad and ambiguous. If a team proceeds directly into ideation without refining these prompts, the resulting solutions tend to be either overly simplistic or disconnected from meaningful engineering principles. These are often solutions that technically function, but fail to engage with the deeper constraints of the problem.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To avoid this, I treat problem framing as the highest-risk and most important phase of the design process. Understanding the distinction between perspective-taking (how am I looking at this?) and scoping (what am I considering?) provides a framework for this systematic approach [2].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Before any ideation or modeling begins, I focus on systematically constraining the problem space through:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li>stakeholder analysis, a systematic process to identify all parties affected by or influencing a project [3]</li>
            <li>identification of functional requirements through understanding the working environment</li>
            <li>translation of qualitative needs into quantitative metrics via GAP analysis</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This is formalized through the development of Needs, Goals, Objectives, and Specifications (NGOS). As the design brief lecture establishes, &quot;a design brief is a document that frames an opportunity from an engineering design perspective&quot; and must provide the information needed to &quot;successfully develop designs with the potential to legitimately address an identified opportunity&quot; [4]. By converting vague requirements into measurable parameters, I establish clear boundaries that define what constitutes a valid solution.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The importance of maintaining solution-agnostic objectives is critical. As demonstrated with the headphone example, when objectives become tied to specific implementations (like &quot;having a reel&quot;), designs without that feature become invalid, unnecessarily constraining the design space [3]. This process serves two key purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li>it eliminates ambiguity, allowing the team to focus on solvable constraints</li>
            <li>it prevents the pursuit of solutions that do not meaningfully address the core problem</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Without rigorous framing, the design process becomes reactive rather than intentional.
          </p>
        </section>

        {/* Managing Divergence */}
        <section id="divergence" className="space-y-4 animate-slide-up">
          <SectionHeading level="h3">Managing Divergence and Mitigating Cognitive Bias</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            A major shift in my design approach has been recognizing the importance of preserving ideas during early-stage divergence. The Alpha Release framework emphasizes that early design reviews should focus on &quot;understanding and critiquing your design process, and the design concepts you have developed so far&quot;—not prematurely eliminating options [5].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Initially, I tended to evaluate concepts immediately against constraints, filtering out anything that appeared impractical. While this improved short-term efficiency, it limited the overall quality and diversity of the solution space. As the Alpha stage lecture notes, this phase should demonstrate &quot;having developed a range of design concepts worthy of testing&quot;—the emphasis is on range, not premature selection [5].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I have since moved toward a more structured divergence process, where evaluation is intentionally delayed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            During this phase, ideas are allowed to exist outside of constraints. A concept that violates size limitations or mechanical feasibility may still contain a useful sub-mechanism or principle. If it is discarded too early, that potential is lost.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To manage this without introducing disorder, I rely on structured divergence frameworks such as:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li>6-3-5 brainwriting, which ensures equal participation and reduces verbal dominance</li>
            <li>morphological analysis, which decomposes systems into functional components and allows systematic recombination</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            These tools enable the extraction of value from a wide range of ideas, while maintaining organization within the design process. The objective is not to identify the best solution immediately, but to build a comprehensive repository of usable concepts that can later be evaluated against defined constraints.
          </p>

          <figure className="flex flex-col gap-2 mx-auto" style={{ maxWidth: "360px" }}>
            <div className="overflow-hidden rounded-md border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-venZBD3dMrnZtNaoPtcNrVC288JauP.jpeg"
                alt="Student holding handwritten early-stage notes and sketches showing reverse brainstorming concepts and problem framing diagrams."
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground text-center">
              <strong>Figure 1.2:</strong> Early-stage handwritten ideation notes documenting Praxis I problem framing and reverse brainstorming.
            </figcaption>
          </figure>
        </section>

        {/* Programmatic Representation */}
        <section id="representation" className="space-y-4 animate-slide-up">
          <SectionHeading level="h3">Programmatic Representation and Data-Driven Convergence</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            While divergence benefits from openness, convergence requires strict discipline. The convergence framework establishes a clear process: elicit biases, codify requirements, gather data for verification, systematically assess designs, and iterate [6]. This structured approach prevents convergence from becoming arbitrary.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A defining element of my engineering approach is the insistence that ideas must be translated into representation as early as possible. As the prototyping lecture emphasizes, a prototype &quot;is a representation that is used as the input to a measurement process to obtain a measurement of some characteristic of a design&quot; [6]. If a concept cannot be modeled, calculated, or simulated, it remains speculative and cannot be meaningfully evaluated. Critically, &quot;prototypes are not your design concepts—they are representations of one or more aspects of your design concepts&quot; [6].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To enforce this transition, I prioritize the use of programmatic and analytical tools, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li>scripting environments such as Python or MATLAB</li>
            <li>automated calculation frameworks</li>
            <li>analytical modeling of system behavior</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This allows qualitative discussions to quickly evolve into quantitative evaluations. The measurement matrix approach demonstrates this principle: each number in a matrix is &quot;a claim that you support with evidence,&quot; and the purpose of measurements is &quot;to enable comparison not to provide a certain definition of performance&quot; [6].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For example, instead of debating the effectiveness of a structural configuration, I will implement a model that calculates load distribution, stress, or deformation. This removes ambiguity and replaces subjective reasoning with measurable outcomes. Three approaches for gathering design data include: conducting research, performing calculations (using CIV or PHY knowledge), and developing prototypes with test protocols [6].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This approach aligns with the principle that representation must keep pace with ideation. As ideas become more complex, the methods used to evaluate them must scale accordingly. Prototypes exist &quot;to support your claims&quot; about how a design works, why it works, how it performs, how it is used, and how it addresses Design for X considerations [5].
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By grounding every design decision in data, I ensure that convergence is driven by verifiable performance rather than intuition. This not only improves the quality of the final solution, but also makes the reasoning behind it defensible and transparent.
          </p>
        </section>

        <section className="space-y-6">
          <SectionHeading level="h3">Engineering Design Philosophy</SectionHeading>
          <p className="text-muted-foreground leading-relaxed">
            Through Praxis II, I have developed a design philosophy that treats every decision as a claim requiring evidence, every problem as a system requiring rigorous framing, and every team as a structure requiring deliberate management. These principles are not isolated techniques. They are a unified approach to engineering that I intend to carry forward. As I move into more complex design challenges, my goal is to continue building systems that are not just functional, but defensible, transparent, and grounded in the needs of the people they serve.
          </p>
        </section>
    </div>
  )
}
