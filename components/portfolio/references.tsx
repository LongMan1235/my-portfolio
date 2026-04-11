'use client'

import { SectionHeading } from "./section-heading"

interface Reference {
  id: number
  lecture: string
  quote: string
  context: string
}

const references: Reference[] = [
  {
    id: 1,
    lecture: "ESC101 20259, "Lecture 24: Team Feedback and CATME," University of Toronto, 2026.",
    quote: "Peers frequently see performance and behavior that others do not.",
    context: "Loughry, Ohland, & Moore (2007) on the value of peer evaluations in team settings. The CATME framework identifies five categories of effective team member contributions: contributing to the team's work, interacting with teammates, keeping the team on track, expecting quality, and having relevant knowledge, skills, and abilities."
  },
  {
    id: 2,
    lecture: "ESC101 20259, "Lecture 12: Framing and Perspective," University of Toronto, 2026.",
    quote: "Framing defines how we are looking at a Splartz—what perspective (or stakeholder orientation) we are taking in defining the opportunity.",
    context: "Distinguishes between perspective-taking (how am I looking at this?) and scoping (what am I considering?). Emphasizes that our values, experiences, and unconscious biases affect what we perceive."
  },
  {
    id: 3,
    lecture: "ESC101 20259, "Lecture 14: Stakeholder Analysis and Objectives," University of Toronto, 2026.",
    quote: "Stakeholder analysis is a systematic process to identify all parties affected by or influencing a project.",
    context: "Demonstrates the headphone example where objectives tied to specific implementations (like 'having a reel') unnecessarily constrain the design space by making designs without that feature invalid. Emphasizes solution-agnostic objective definition."
  },
  {
    id: 4,
    lecture: "ESC101 20259, "Lecture 13: Design Brief Development," University of Toronto, 2026.",
    quote: "A design brief is a document that frames an opportunity from an engineering design perspective.",
    context: "Must provide the information needed to 'successfully develop designs with the potential to legitimately address an identified opportunity.' Covers NGOS (Needs, Goals, Objectives, Specifications) framework for translating qualitative needs into quantitative metrics."
  },
  {
    id: 5,
    lecture: "ESC101 20259, "Lecture 25: Alpha Release and Prototyping," University of Toronto, 2026.",
    quote: "Understanding and critiquing your design process, and the design concepts you have developed so far.",
    context: "Alpha Release framework emphasizes 'having developed a range of design concepts worthy of testing.' Prototypes exist 'to support your claims' about how a design works, why it works, how it performs, how it is used, and how it addresses Design for X considerations."
  },
  {
    id: 6,
    lecture: "ESC101 20259, "Lecture 26: Convergence and Measurement," University of Toronto, 2026.",
    quote: "A prototype is a representation that is used as the input to a measurement process to obtain a measurement of some characteristic of a design.",
    context: "Convergence framework: elicit biases, codify requirements, gather data for verification, systematically assess designs, and iterate. 'Prototypes are not your design concepts—they are representations of one or more aspects of your design concepts.' Measurement matrix principle: each number is 'a claim that you support with evidence,' and measurements 'enable comparison not to provide a certain definition of performance.' Three approaches for gathering design data: conducting research, performing calculations, and developing prototypes with test protocols."
  },
  {
    id: 7,
    lecture: "ESC101 20259, "Lecture 21: Divergent Thinking Methods," University of Toronto, 2026.",
    quote: "Reverse brainstorming asks: How can we cause or encourage the problem?",
    context: "Structured divergence tools including Reverse Brainstorming, Random Noun Method, 6-3-5 Brainwriting, and SCAMPER. These methods help bypass cognitive anchors and generate non-obvious solutions by forcing lateral thinking connections."
  },
  {
    id: 8,
    lecture: "ESC101 20259, "Lecture 12: Scoping the Design Space," University of Toronto, 2026.",
    quote: "Scoping defines what we are considering—what boundaries we draw around the problem.",
    context: "Scoping is distinct from framing (perspective). Proper scoping transforms broad administrative problems into tractable engineering challenges by isolating specific object classes, contexts, or constraints."
  },
  {
    id: 9,
    lecture: "ESC101 20259, "Lecture 26: Concept Clustering," University of Toronto, 2026.",
    quote: "How can you gather data about your designs: ... Reference Design similarities",
    context: "By evaluating paradigms rather than individual ideas, teams can quickly eliminate entire categories of solutions that fail key requirements, dramatically reducing decision space and cognitive overload."
  },
  {
    id: 10,
    lecture: "ESC101 20259, "Lecture 26: Morphological Analysis," University of Toronto, 2026.",
    quote: "Morphological analysis decomposes systems into distinct sub-functions for systematic recombination.",
    context: "Creates matrices of possible combinations by pairing independent functional components. Enables systematic evaluation of each cell against NGOS, revealing optimal pairings that might not emerge from linear ideation."
  },
  {
    id: 11,
    lecture: "ESC101 20259, "Lecture 13: PIAA Model," University of Toronto, 2026.",
    quote: "PIAA (Perceive, Interpret, Assess, Act) structures the framing process into four distinct phases.",
    context: "Prevents jumping from observation to solution by forcing explicit documentation at each phase. Particularly effective for translating qualitative stakeholder behavior into concrete engineering requirements."
  },
  {
    id: 12,
    lecture: "ESC101 20259, "Lecture 21: SCAMPER Method," University of Toronto, 2026.",
    quote: "SCAMPER provides specific, actionable prompts: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.",
    context: "Unlike reverse brainstorming which requires logical inversion, SCAMPER works for any domain by systematically applying transformation prompts to existing reference designs."
  },
  {
    id: 13,
    lecture: "ESC101 20259, "Lecture 25: Proxy Testing," University of Toronto, 2026.",
    quote: "Proxy testing uses accessible representations to evaluate design characteristics that cannot be directly measured.",
    context: "When professional testing facilities are unavailable, proxy tests with properly defined acceptance criteria can validate design claims. The validity depends on how well the proxy approximates the target characteristic."
  },
  {
    id: 14,
    lecture: "ESC101 20259, "Lecture 26: Toulmin's Structure of Argument," University of Toronto, 2026.",
    quote: "Every claim must be supported by data, connected through warrants, and qualified with rebuttals.",
    context: "Toulmin's framework ensures that design decisions are defensible and transparent. Claims without supporting data or clear warrants are speculation, not engineering justification."
  }
]

export function References() {
  return (
    <div className="space-y-8">
      <SectionHeading level="h2">References</SectionHeading>
      
      <p className="text-muted-foreground leading-relaxed">
        This portfolio draws on concepts and frameworks from ESC101/ESC102 Praxis lectures at the University of Toronto. The following references document specific lecture content cited throughout the design position statement and project analyses.
      </p>

      <div className="space-y-6">
        {references.map((ref) => (
          <div 
            key={ref.id} 
            id={`ref-${ref.id}`}
            className="rounded-lg border border-border bg-card/50 p-6 space-y-3 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {ref.id}
              </span>
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-foreground text-sm">
                  {ref.lecture}
                </h3>
                <blockquote className="border-l-2 border-primary/50 pl-4 italic text-muted-foreground">
                  &quot;{ref.quote}&quot;
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ref.context}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-lg bg-secondary/30 border border-border">
        <h3 className="font-semibold text-foreground mb-3">Citation Format</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          References are cited in-text using bracketed numbers [1], [2], etc. Each number corresponds to a specific lecture source listed above. Multiple citations may appear together [1, 2] when concepts from different lectures are combined.
        </p>
      </div>
    </div>
  )
}
