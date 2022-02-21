function Paragraph(props) {
    return (
        <p id={props.id}>{props.children}</p>
    );
}

export default Paragraph;