import styles from "./ButtonContainer.module.css"
const ButtonContainer=()=>{  
    const ButtonName=[
        'c',
        '1',
        '2',
        '+',
        '3',
        '4',
        '-',
        '5',
        '6',
        '*',
        '7',
        '8',
        '/',
        '=',
        '9',
        '0',
        '.',
    ];
      

return  <div className={styles.ButtonContainer} >
       
       {ButtonName.map(ButtonName=><button className={styles.button}>{ButtonName}</button>)}
</div>
};

export default ButtonContainer;