
import { SectionTitle } from "@/components/ui/section-title";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544962421-5677a69f3f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1468929251330-b2010f2a9093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1502380756092-40f752aed553?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1576605222788-ab37579de6cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-ice-50">
      <div className="container">
        <SectionTitle 
          title="Síguenos en Instagram" 
          subtitle="@hielopolardelcentro"
          center
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative overflow-hidden group cursor-pointer">
              <img 
                src={post.image} 
                alt="Instagram post"
                className="w-full aspect-square object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-ice-800/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-ice-600 hover:text-ice-700 font-medium"
          >
            <Instagram size={20} className="mr-2" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
