export default function FloatingInput({label, onChange}){
    return(
        <div className="floatingForm">
            <label>FirstName</label>
            <div className="floatingInput">
                <input type="text"  placeholder="FirstName" onChange={() => onChange()}/>
            </div>
        </div>
    );
}