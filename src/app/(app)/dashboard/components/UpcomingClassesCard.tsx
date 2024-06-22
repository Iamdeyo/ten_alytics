import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function UpcomingClassesCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-4">
        <Card className="rounded-xl overflow-hidden w-full">
          <CardHeader className="bg-neutral-100 dark:bg-neutral-900">
            <CardTitle className="text-gray-900 dark:text-neutral-50 text-lg font-bold">
              Upcoming Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 ">
            <EmptyState />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center">
      <p className="font-bold">No upcoming live class</p>
      <div className="p-1 rounded-lg">
        <Icons.fileSearch />
      </div>
      <p className="text-neutral-600 dark:text-neutral-500 text-sm">
        Enroll in an interactive learning environment led by professional
        instructors to receive live links.
      </p>
    </div>
  );
}