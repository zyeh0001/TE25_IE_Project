import ImageUploading from "../components/ImageUploading";
import SelfCheckForm from "../components/SelfCheckForm";
import Upload from "../components/SelfCheckPageCom/Upload";

function SelfCheckPage() {
  return (
    <div>
      self check page will be updated in iteration 2
      <Upload />
      <div className="col-12">
        <ImageUploading />
        <SelfCheckForm />
      </div>
    </div>
  );
}
export default SelfCheckPage;
