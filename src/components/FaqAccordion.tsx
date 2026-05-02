import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqAccordion({ faq }: { faq: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mt-8">
      {faq.map((f, i) => (
        <AccordionItem key={i} value={`f${i}`}>
          <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
