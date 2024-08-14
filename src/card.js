//CARD FUNCTION AND FORMATTING IF NOT DEFINED ELSEWHERE
function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-black';
    return 'card mb-3 ' + bg + txt;
  }
  return (
    <div className={classes()} style={{width: "35rem", margin: "15px"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">{props.title && (<h5 className="card-title">{props.title}</h5>)}{props.text && (<p className="card-text">{props.text}</p>)}{props.body}{props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}
//EXPORT- CAN THIS BE INDIVIDUAL
export default Card;
