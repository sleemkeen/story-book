export default function Button({title, onSubmitData}){

    return (
        <button className="btn btn-primary" onClick={()=>onSubmitData()}>{title}</button>
    )
}