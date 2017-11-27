const FontSelector = ({fonts, selectedFont, onSelect}) => {
    const handlerInput = (event) => {
      const fontName = event.target.value;
      const font = fonts.find((elem)=> elem.name == fontName);
      onSelect(font);
    };

    return (
      <div className="font-picker">
        {fonts.map((font) => (
          <div className="grid center font-item">      
            <input type="radio" name="font" value={font.name} id={font.name} onChange={handlerInput}/>
            <label htmlFor={font.name} className="grid-1">
              <PictureFont text = "abc" path = {font.path}/>
            </label>
          </div>
        ))}
      </div>
    );
};
