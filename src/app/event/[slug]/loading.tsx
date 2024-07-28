import Skeleton from "@/components/skeleton";

export default function CityLoading() {
  return (
    <div className="flex flex-col items-center gap-y-6 pt-28">
      <Skeleton className="w-[550px]" />
      <Skeleton className="w-[450px]" />
      <Skeleton className="w-[580px]" />
    </div>
  );
}
