import { Button } from "@/modules/shared/components/ui/button";

interface DownloadButtonProps {
  onClick: () => void;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="w-56 text-2xl my-5 py-6">
      Descargar Tickets
    </Button>
  );
};
