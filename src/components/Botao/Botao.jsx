import './Botao.css'; 
import clsx from 'clsx';

export default function Botao (props){
    const {contorno, className, children, ...rest} = props;

    const classes = clsx(
        {
            btn:true,
            "btn-default":!contorno,
            "btn-contorno":contorno,
        },
        className
    );
    return(
        <>
            <button className={classes} {...rest}>{children}</button>
        </>
    )
}