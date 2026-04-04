import { useState } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const contacts = [
  {
    name: "Daniel Júnior",
    phone: "(91) 92004-5607",
    whatsappUrl:
      "https://wa.me/5591920045607?text=ol%C3%A1,%20eu%20vim%20do%20site%20e%20quero%20agendar%20uma%20consultoria!!",
  },
  {
    name: "Júnior Rabelo",
    phone: "(94) 92000-6366",
    whatsappUrl:
      "https://wa.me/5594920006366?text=ol%C3%A1,%20eu%20vim%20do%20site%20e%20quero%20agendar%20uma%20consultoria!!",
  },
];

interface ContactSelectorProps {
  buttonText?: string;
  buttonClassName?: string;
}

const ContactSelector = ({
  buttonText = "Agendar Consultoria",
  buttonClassName = "",
}: ContactSelectorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={`gap-2 font-heading font-semibold scan-line ${buttonClassName}`}>
          <Phone className="w-5 h-5" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-xl">
            Escolha seu contato
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 rounded-lg border border-border/40 bg-card/30 px-5 py-4 text-left hover:border-primary/40 hover:bg-primary/5 transition-all group"
            >
              <div className="flex flex-col gap-1">
                <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {contact.name}
                </span>
                <span className="text-sm text-muted-foreground">{contact.phone}</span>
              </div>
              <Phone className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSelector;
