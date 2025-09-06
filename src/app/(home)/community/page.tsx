import { HydrateClient, trpc } from "@/trpc/server";
import { HomeView } from "@/modules/home/views/home-view";
import { DEFAULT_LIMIT } from "@/constans";
import { AnimatedGroup } from "@/components/ui/animated-group";

export const dynamic = "force-dynamic"; //khong cache

interface PageProps {
  searchParams: Promise<{
    //co san trong nextjs
    categoryId: string;
  }>;
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(8px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 0.8,
      },
    },
  },
}

const Page = async ({ searchParams }: PageProps) => {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch(); //lãng phí neu trong children khong === voi du lieu prefetch
  void trpc.videos.getMany.prefetchInfinite({ categoryId, limit: DEFAULT_LIMIT })

  return (
    <>
      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.25,
              },
            },
          },
          ...transitionVariants,
        }}>
        <HydrateClient>
          {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-4">*/}
          {/*<div className="md:col-span-2">*/}
          <HomeView categoryId={categoryId} />
          {/*</div>*/}
          {/*<div className="h-1.5 bg-red-400"></div>*/}
          {/*</div>*/}
        </HydrateClient>
      </AnimatedGroup>

    </>
  );
};

export default Page;
