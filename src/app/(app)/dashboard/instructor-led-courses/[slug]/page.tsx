import { Card, CardContent } from "@/components/ui/card";
import CourseVideo from "./components/CourseVideo";
import CourseProgress from "./components/CourseProgress";
import SelectedCourseSideBar from "./components/SelectedCourseSideBar";
import AssessmentModal from "./components/assessmentModal";

export default function SelectedCoursePage() {
  return (
    <>
      <Card className="px-4 py-5">
        <CardContent className="p-0 grid gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
            <CourseVideo />
            <CourseProgress />
          </div>
          <SelectedCourseSideBar />
        </CardContent>
      </Card>
      <AssessmentModal />
    </>
  );
}
