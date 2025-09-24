import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReviewForm } from "./review-form";

interface Props {
  productId: string;
}

export const ReviewSidebar = ({ productId }: { productId: string }) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.reviews.getOne.queryOptions({ productId }));
  
  return (
    <ReviewForm productId={productId} initialData={data}/>
  )
}