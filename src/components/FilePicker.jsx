import PropTypes from "prop-types";
import Button from "./Button";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload picture
        </label>

        <p className="mt-2 ml-1 text-gray-500 text-sm truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
        />
        <Button
          type="outline"
          title="Only logo"
          handleClick={() => readFile("logo")}
        />
      </div>
    </div>
  );
};

export default FilePicker;

FilePicker.propTypes = {
  file: PropTypes.any,
  setFile: PropTypes.func,
  readFile: PropTypes.func,
};
