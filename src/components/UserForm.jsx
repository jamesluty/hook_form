import React, {useState} from 'react'
import styles from './styles.module.css'

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (input) => {
        input.preventDefault();
        const newInfo = {firstName, lastName, email, password, confirmPassword};
    };

    return (
        <div className={styles.center}>
            <form className={styles.column} onSubmit={createUser}>
                <div className={styles.inputs}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={ (input) => setFirstName(input.target.value)}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (input) => setLastName(input.target.value)}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={ (input) => setEmail(input.target.value)}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="password">Password</label>
                    <input type="text" onChange={ (input) => setPassword(input.target.value)}/>
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" onChange={ (input) => setConfirmPassword(input.target.value)}/>
                </div>
                <input className={styles.submit} type="submit" value="Create User"/>
            </form>
            <p className={styles.textAlign}>Your Form Data</p>
            <div className={styles.middle}>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm