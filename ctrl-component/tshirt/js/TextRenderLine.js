const TextRenderLine = ({value, onChange}) => {
  const handlerTextRender = (event) => {
    onChange(event.target.value);
  };

	return (
    <div class="type-text">
      <textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" 
      onChange={handlerTextRender}></textarea>
    </div>
	);
};
