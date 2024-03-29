import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  if(!params.id) {
    // TODO: redirecionar para homepage
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  });

  if(!barbershop) {
    // TODO: redirecionar para homepage
    return null;
  }

  return (  
   <>
    <BarbershopInfo barbershop={barbershop}/>
    
    <div className="flex flex-col px-5 gap-4 py-6">
    {barbershop.services.map((service) => (
      <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user}/>
    ))}
    </div>
   </>
  );
}
 
export default BarbershopDetailsPage;