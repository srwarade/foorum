import "./option-palette.scss";

const OptionPalette = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="option-palette">
      <div className="options" onClick={handleClick}>
        <button>
          Paraghraph
          <img src="images/option-palette/chevron.png" alt="chevron" />
        </button>
        <span className="bold-icon">
          <img src="images/option-palette/bold.png" alt="bold" />
        </span>
        <img src="images/option-palette/italic.png" alt="italic" />
        <img src="images/option-palette/underline.png" alt="underline" />
        <span className="divider"></span>
        <img src="images/option-palette/list.png" alt="list" />
        <img src="images/option-palette/number-list.png" alt="list" />
        <span className="divider"></span>
        <img src="images/option-palette/quote.png" alt="quote" />
        <img src="images/option-palette/code.png" alt="code" />
      </div>
      <div className="delete-icon" onClick={handleClick}>
        <img src="images/option-palette/delete.png" alt="delete" />
      </div>
    </div>
  );
};

export default OptionPalette;
