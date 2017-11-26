const SearchBox = ({filterBooks, value}) => {
    const handlerQuery = (event) => {
        value = event.target.value;
        filterBooks(value);
    };

    return (
        <input onChange={handlerQuery} value={value} type="text"
               placeholder="Поиск по названию или автору"/>
    );
};