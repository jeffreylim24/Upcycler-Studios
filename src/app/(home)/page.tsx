import { Button } from "@/components/ui/button"; 
import {Input} from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";


export default function Home() {
  return (
    <div
      className="p-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <div className="flex flex-col gap-y-4 bg-white/80 rounded-lg p-6 max-w-md mx-auto">
      <div>
        <Button variant="elevated" >
          Im a button
        </Button>
      </div>
      <div>
        <Input placeholder="Im an input"/>
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am a text area" />
      </div>
      <div>
        <Checkbox/>
      </div>
    </div>
    </div>
  );
};