

interface ButtonProps {
    type?: 'button' | 'reset' | 'submit'; 
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}




function Button({type='button', text, onClick, disabled=false}: ButtonProps) {
    return (
     <button type={type} disabled={disabled} onClick={onClick}>
        {text}
    </button>
    )
}

export default Button;