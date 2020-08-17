const InfoboxOne = (props) => (
    <div className="infobox-one">
        <label className="small">{props.info}</label>
        <label className="big">{props.val}</label>
    </div>
);

export default InfoboxOne;