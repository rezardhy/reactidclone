function ListData(value) {

    console.log(value);
    return(
        <ol>
        { value.map((item,i) => <li key={i} className="list">{item.name}</li>)}
        </ol>
        //<h1>z</h1>
    )
}

export default ListData;