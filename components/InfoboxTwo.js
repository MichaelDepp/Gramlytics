const InfoboxTwo = (props) => (
    <div className="infobox-two">
        <label className="small">{props.info}</label>
        <label className="big">{props.val}</label>
    </div>
);

export default InfoboxTwo;