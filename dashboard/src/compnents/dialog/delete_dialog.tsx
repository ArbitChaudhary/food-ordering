import Button from "../ui/button";
import DialogLayout from "./dialog_layout";

interface IDeleteDialog {
  isDialogOpen: boolean;
  item: string;
  setIsDialogOpen: any;
  handleDelete: () => void;
}

const DeleteDialog: React.FC<IDeleteDialog> = ({
  isDialogOpen,
  item,
  setIsDialogOpen,
  handleDelete,
}) => {
  return (
    <DialogLayout
      title="Delete Category"
      setIsDialogOpen={setIsDialogOpen}
      isDialogOpen={isDialogOpen}
      className="max-w-[400px] w-full bg-white h-fit mainContainer rounded-md z-50"
    >
      <div className="w-full">
        <div className="text-[18px] font-semibold text-gray-700">
          Are you sure want to delete {item}?
        </div>
        <div className="text-sm text-gray-500">
          The action cannot be undone.
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          <Button
            type="submit"
            onClick={() => setIsDialogOpen(false)}
            className="px-4 py-1 md:py-2 bg-red-600"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              handleDelete();
              setIsDialogOpen(false);
            }}
            className="px-4 py-1 md:py-2"
          >
            Confirm
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
};

export default DeleteDialog;
