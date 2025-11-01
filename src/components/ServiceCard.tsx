import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
}

const ServiceCard = ({ title, description, icon, link, image }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={handleClick} className="group relative bg-card border border-border rounded-lg overflow-hidden hover-lift cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-foreground">{title}</h3>

        <p className="text-muted-foreground">{description}</p>

        <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
          <span className="text-primary">Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
