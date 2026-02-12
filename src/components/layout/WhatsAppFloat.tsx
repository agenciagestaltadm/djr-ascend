import { CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { CONSULTORIA_WA_URL } from "@/lib/consultoria";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={CONSULTORIA_WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Agendar consultoria"
    >
      <CalendarClock className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppFloat;
