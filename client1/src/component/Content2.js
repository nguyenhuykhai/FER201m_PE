function Content2(props) {
    return (
      <div className="content-card">
        <h2>{ props.title || "Title of the Content Card" }</h2>
        <p>{ props.detail || "This is the content of the card. You can add more text and elements here." }</p>
      </div>
    );
}

export default Content2