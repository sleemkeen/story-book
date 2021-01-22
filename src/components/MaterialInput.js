import TextField from '@material-ui/core/TextField';


export default function MaterialInput({handleChange, label, id}){
    return(
        <form className="mt-3" noValidate autoComplete="off">
          <TextField id={id} onChange={handleChange} label={label} variant="filled" />
      </form>
    );
}