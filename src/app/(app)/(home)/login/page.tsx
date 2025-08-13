import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Page = () => {
    return (
        <div className="p-4">
            <div className="flex flex-col gap-y-4">
                <div>
                    <Progress value={50} />
                </div>
                <div>
                    <Textarea placeholder="Type your message here..." />
                </div>
                <div>
                    <Checkbox className="mr-2" />
                    <label className="text-base">Accept Terms and Conditions</label>
                </div>
            </div>
        </div>
    );
}

export default Page;