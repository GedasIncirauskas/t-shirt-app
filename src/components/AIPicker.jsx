import PropTypes from "prop-types";
import Button from "./Button";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button type="outline" title="Asking AI..." customStyles="text-xs" />
        ) : (
          <>
            <Button
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <Button
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;

AIPicker.propTypes = {
  prompt: PropTypes.string,
  setPrompt: PropTypes.func,
  generatingImg: PropTypes.bool,
  handleSubmit: PropTypes.func,
};
