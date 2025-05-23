import { FormSection } from "../ui/sections/form-section";

interface VideoViewProps {
    videoId: string;
}

const VideoView = ({ videoId }: VideoViewProps) => {
    return (
        <div className="px-4 pt-2.5 pb-32">
            <FormSection videoId={videoId} />
        </div>
    );
}

export default VideoView;   