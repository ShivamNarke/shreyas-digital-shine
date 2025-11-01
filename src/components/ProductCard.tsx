import React, { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import EditProductModal from "./EditProductModal";

interface ProductCardProps {
  productId: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  category: string;
  onRefresh: () => void;
}

const ProductCard = ({ productId, title, description, icon, image, link, category, onRefresh }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { user, token } = useAuth();
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast({
          title: 'Product deleted',
          description: 'Product has been deleted successfully.',
        });
        onRefresh();
      } else {
        const data = await response.json();
        toast({
          title: 'Failed to delete product',
          description: data.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
        {/* Image area with click */}
        <div
          className="relative flex items-center justify-center bg-gray-50 border-b border-border overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            src={image}
            alt={title}
            className="max-h-64 w-auto object-contain p-2 transition-all duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content area */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg">
                {icon}
              </div>
              {user && user.is_verified === 1 && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleDelete}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>

          <div className="flex justify-center mt-4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm" className="w-full">
                Explore
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Popup modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-3 py-1 text-sm hover:bg-black/80 transition"
            >
              ✕
            </button>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain max-h-[80vh] transition-transform duration-300"
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      <EditProductModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        product={{
          product_id: productId,
          product_name: title,
          description,
          product_link: link,
          category,
          product_image: image,
        }}
        onSuccess={onRefresh}
      />
    </>
  );
};

export default ProductCard;
